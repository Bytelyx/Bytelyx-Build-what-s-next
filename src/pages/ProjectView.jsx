import React, { useLayoutEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ReadyToStart } from '../components/ReadyToStart';
import './ProjectView.css';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_TIMELINE_ROWS = [
  [
    { label: 'Discovery & Analysis', start: 0, span: 2.5, tone: 'indigo' },
  ],
  [
    { label: 'UI/UX Design', start: 1.0, span: 1.45, tone: 'violet' },
    { label: 'Design Update', start: 4.0, span: 1.5, tone: 'violet' },
  ],
  [
    { label: 'Core Development', start: 1.45, span: 2.35, tone: 'cyan' },
  ],
  [
    { label: 'Compliance Integration', start: 4.15, span: 3.35, tone: 'teal' },
  ],
  [
    { label: 'QA & User Testing', start: 2.0, span: 6.2, tone: 'blue' },
  ],
  [
    { label: 'Deployment', start: 7.5, span: 1.5, tone: 'indigo' },
  ],
];

const TIMELINE_AXIS_LABELS = [
  { label: 'I Month', positionPct: 0 },
  { label: 'III Month', positionPct: 25 },
  { label: 'V Month', positionPct: 50 },
  { label: 'VII Month', positionPct: 75 },
  { label: 'IX Month', positionPct: 100 },
];

const TOTAL_MONTHS = 9;

const PHASE_OVERRIDES = {
  'ui/ux design': { start: 1.0, span: 1.45, tone: 'violet' },
  'design update': { start: 4.0, span: 1.5, tone: 'violet' },
  'core development': { start: 1.45, span: 2.35, tone: 'cyan' },
  'qa & user testing': { start: 2.0, span: 6.2, tone: 'blue' },
};

function applyPhaseOverride(item) {
  const key = item?.label?.toLowerCase();
  if (key && PHASE_OVERRIDES[key]) {
    return { ...item, ...PHASE_OVERRIDES[key] };
  }
  return item;
}

function normalizeTimelineRows(rawTimeline) {
  if (!Array.isArray(rawTimeline) || rawTimeline.length === 0) {
    return DEFAULT_TIMELINE_ROWS;
  }
  if (Array.isArray(rawTimeline[0])) {
    return rawTimeline.map((row) => row.map(applyPhaseOverride));
  }

  const rows = [];
  let designUpdateItem = null;

  for (const rawItem of rawTimeline) {
    const item = applyPhaseOverride(rawItem);

    if (item.label?.toLowerCase() === 'design update') {
      designUpdateItem = item;
      continue;
    }

    rows.push([item]);

    if (item.label?.toLowerCase() === 'ui/ux design' && designUpdateItem) {
      rows[rows.length - 1].push(designUpdateItem);
      designUpdateItem = null;
    }
  }

  if (designUpdateItem) {
    rows.push([designUpdateItem]);
  }

  return rows;
}

function OutcomeIcon({ type }) {
  switch (type) {
    case 'transfers':
      return (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
          <path d="M12.5 22.5C14.1 15.6 20.3 10.5 27.6 10.5C33.4 10.5 38.4 13.7 41 18.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M42.2 13.5L41.4 19.3L35.6 18.4" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M39.5 29.5C37.9 36.4 31.7 41.5 24.4 41.5C18.6 41.5 13.6 38.3 11 33.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M9.8 38.5L10.6 32.7L16.4 33.6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 17.5V34.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M30 21.2C30 19.5 28.2 18.4 26 18.4C23.8 18.4 22 19.5 22 21.2C22 23 23.6 23.8 26 24.3C28.4 24.8 30 25.6 30 27.6C30 29.5 28.2 30.8 26 30.8C23.7 30.8 21.8 29.6 21.8 27.8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      );

    case 'rocket':
      return (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
          <path d="M38.8 13.2C31.5 13.4 24.6 16.5 19.6 21.8L16.2 25.4L26.6 35.8L30.2 32.4C35.5 27.4 38.6 20.5 38.8 13.2Z" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.8 21.6L13.5 21.8L10.5 26.5L16.2 28.4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30.4 32.2L30.2 38.5L25.5 41.5L23.6 35.8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="29.5" cy="22.5" r="3.2" stroke="currentColor" strokeWidth="2.6" />
          <path d="M12.5 39.5L17 35" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M10.5 34.5L13.2 31.8" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M17.5 41.5L20.2 38.8" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );

    case 'globe':
      return (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
          <circle cx="26" cy="26" r="17" stroke="currentColor" strokeWidth="2.8" />
          <ellipse cx="26" cy="26" rx="7.5" ry="17" stroke="currentColor" strokeWidth="2.6" />
          <path d="M9.5 26H42.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M12.2 17.5H39.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M12.2 34.5H39.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );

    case 'design':
    default:
      return (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
          <rect x="29.5" y="10.5" width="9" height="34" rx="4.5" transform="rotate(45 29.5 10.5)" stroke="currentColor" strokeWidth="2.8" />
          <path d="M31.2 16.5L35.5 20.8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M18.5 11V17M15.5 14H21.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M13 21V25M11 23H15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M36 33V38M33.5 35.5H38.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
  }
}

function SectionTitle({ primary, accent }) {
  return (
    <h2 className="pv-heading">
      <span className="pv-heading-primary">{primary}</span>{' '}
      <span className="pv-heading-accent">{accent}</span>
    </h2>
  );
}

export function ProjectView() {
  const { name } = useParams();
  const { pathname } = useLocation();
  const pageRef = useRef(null);
  const timelineScrollRef = useRef(null);
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const project =
    projectsData.find(
      (p) => p.name?.toLowerCase() === name?.toLowerCase()
    ) || projectsData[0];

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const forceScrollTop = () => {
      if (window.lenis && typeof window.lenis.scrollTo === 'function') {
        window.lenis.scrollTo(0, { immediate: true, force: true });
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      ScrollTrigger.refresh();
    };

    forceScrollTop();

    const rafId = requestAnimationFrame(() => {
      forceScrollTop();
    });

    const timerId = setTimeout(() => {
      forceScrollTop();
    }, 80);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [pathname, name, project?.name]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pv-timeline-bar', {
        scaleX: 0.85,
        opacity: 0,
        transformOrigin: 'left center',
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.pv-timeline-board',
          start: 'top 84%',
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, [project?.name]);

  const handleTimelineMouseDown = (e) => {
    const el = timelineScrollRef.current;
    if (!el) return;
    dragStateRef.current = {
      isDown: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
    };
  };

  const handleTimelineMouseMove = (e) => {
    const el = timelineScrollRef.current;
    if (!el || !dragStateRef.current.isDown) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragStateRef.current.startX) * 1.2;
    el.scrollLeft = dragStateRef.current.scrollLeft - walk;
  };

  const handleTimelineMouseUpOrLeave = () => {
    dragStateRef.current.isDown = false;
  };

  const accentColor = '#307FE2';
  const heroGlowColor = 'rgba(48, 127, 226, 0.45)';
  const heroLineColor = '#05C3DE';

  const rawLiveUrl =
    project?.liveLink ||
    project?.liveUrl ||
    project?.website ||
    project?.url ||
    '';
  const liveWebsiteUrl = rawLiveUrl
    ? /^https?:\/\//i.test(rawLiveUrl)
      ? rawLiveUrl
      : `https://${rawLiveUrl}`
    : '';

  const showcaseImages = (project?.showcaseImages || []).filter(Boolean);
  const painPoints = project?.painPointsEn || [];
  const keyChallenges = project?.keyChallengesEn || [];
  const objectives = project?.objectivesEn || [];
  const timelineRows = normalizeTimelineRows(project?.timeline);
  const outcomes = project?.outcomes || [];

  const featureGroups =
    project?.featureGroups ||
    (project?.modules?.length
      ? [
          {
            tone: 'dark',
            deviceFrame: project.device === 'imac' ? 'imac' : 'standalone',
            image: project.projectImage,
            items: project.modules,
          },
        ]
      : []);

  const metadataItems = [
    { label: 'Client', value: project.clientEn || project.titleEn },
    { label: 'Category', value: project.categoryEn },
    { label: 'Year', value: project.yearEn || '2025' },
  ].filter((item) => item.value);

  const outcomeIconOrder = ['transfers', 'rocket', 'globe', 'design'];

  return (
    <div ref={pageRef} className="pv-page" style={{ '--pv-accent': accentColor, '--pv-hero-glow': heroGlowColor, '--pv-hero-line': heroLineColor,}}>
      {/* 1. HERO SECTION */}
      <section className="pv-hero" aria-label={project.titleEn}>
        <div className="pv-hero-glow" />
        <div className="pv-hero-stage">
          {project.heroCoinsImage ? (
            <img
              src={project.heroImage}
              alt={`${project.titleEn} showcase`}
              className="pv-hero-laptop"
            />
          ) : project.heroImage ? (
            <img
              src={project.heroImage}
              alt={`${project.titleEn} 3D showcase`}
              className="pv-hero-scene"
            />
          ) : (
            <div className="pv-hero-device-fallback">
              {project.device === 'imac' ? (
                <div className="pv-imac" style={{ maxWidth: '580px' }}>
                  <div className="pv-imac-screen">
                    <img src={project.projectImage} alt={project.titleEn} />
                  </div>
                  <img
                    src="/images/projects/iMac.svg"
                    alt="Desktop monitor display"
                    className="pv-imac-frame"
                  />
                </div>
              ) : project.device === 'mobile' ? (
                <div className="pv-mobile-frame">
                  <div className="pv-mobile-screen">
                    <img
                      src={
                        Array.isArray(project.projectImage)
                          ? project.projectImage[0]
                          : project.projectImage
                      }
                      alt={project.titleEn}
                    />
                  </div>
                  <img
                    src="/images/projects/mobile.svg"
                    alt="Mobile phone display"
                    className="pv-mobile-bezel"
                  />
                </div>
              ) : (
                <div className="pv-macbook">
                  <div className="pv-macbook-screen">
                    <img
                      src={
                        Array.isArray(project.projectImage)
                          ? project.projectImage[0]
                          : project.projectImage
                      }
                      alt={project.titleEn}
                    />
                  </div>
                  <img
                    src="/images/projects/MacbookPro.svg"
                    alt="MacBook Pro display"
                    className="pv-macbook-frame"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {project.heroCoinsImage && (
          <img
            src={project.heroCoinsImage}
            alt=""
            aria-hidden="true"
            className="pv-hero-coins"
          />
        )}

        <div className="pv-hero-bottom-glow" />
        <div className="pv-hero-divider" />
      </section>

      {/* 2 & 3. PROJECT OVERVIEW + PROJECT INFORMATION */}
      <section className="pv-overview-section" aria-label="Project Overview">
        <SectionTitle primary="Project" accent="Overview" />

        <div className="pv-overview-grid">
          <div className="pv-overview-content">
            <p className="pv-overview-desc">
              {project.overviewEn || project.descriptionEn}
            </p>

            {liveWebsiteUrl && (
              <div className="pv-live-actions">
                <a href={liveWebsiteUrl} target="_blank" rel="noopener noreferrer" className="pv-live-link">
                  <span>Visit Live Website</span>
                  <ExternalLink size={16} strokeWidth={2} />
                </a>
              </div>
            )}
          </div>

          <div className="pv-overview-meta">
            {metadataItems.map((item) => (
              <div key={item.label}>
                <span className="pv-meta-label">{item.label}</span>
                <span className="pv-meta-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISUAL SHOWCASE */}
      {showcaseImages.length > 0 && (
        <section className="pv-showcase" aria-label="Visual Showcase">
          {showcaseImages.length >= 2 && (
            <div className="pv-showcase-top">
              {showcaseImages.slice(0, 2).map((src, idx) => (
                <div key={idx} className="pv-showcase-card pv-showcase-card--pair">
                  <img
                    src={src}
                    alt={`${project.titleEn} visual ${idx + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {showcaseImages[2] && (
            <div className="pv-showcase-card pv-showcase-card--wide">
              <img
                src={showcaseImages[2]}
                alt={`${project.titleEn} partnership showcase`}
                loading="lazy"
              />
            </div>
          )}
        </section>
      )}

      {/* 5. PAIN POINTS & KEY CHALLENGES */}
      {(painPoints.length > 0 || keyChallenges.length > 0) && (
        <section className="pv-challenges-grid" aria-label="Pain Points and Challenges">
          {painPoints.length > 0 && (
            <div className="pv-dark-panel">
              <h3 className="pv-panel-title">Pain points</h3>
              <ul className="pv-bullet-list">
                {painPoints.map((item, idx) => (
                  <li key={idx} className="pv-bullet-item">
                    <span className="pv-bullet-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {keyChallenges.length > 0 && (
            <div className="pv-dark-panel">
              <h3 className="pv-panel-title">Key Challenges</h3>
              <ul className="pv-bullet-list">
                {keyChallenges.map((item, idx) => (
                  <li key={idx} className="pv-bullet-item">
                    <span className="pv-bullet-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* OUR OBJECTIVE */}
      {objectives.length > 0 && (
        <section className="pv-objective-wrap" aria-label="Our Objective">
          <div className="pv-objective-card">
            <div className="pv-objective-grid">
              <div>
                <h3 className="pv-panel-title">Our Objective</h3>
                <ul className="pv-check-list">
                  {objectives.map((item, idx) => (
                    <li key={idx} className="pv-check-item">
                      <span className="pv-check-box" aria-hidden="true">
                        <Check size={12} strokeWidth={3.2} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.objectiveImage && (
                <div className="pv-objective-visual">
                  <img
                    src={project.objectiveImage}
                    alt={`${project.titleEn} objective`}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CORE FEATURES */}
      {featureGroups.length > 0 && (
        <section aria-label="Core Features">
          <div className="pv-features-header">
            <SectionTitle primary="Core" accent="Features" />
          </div>

          {featureGroups.map((group, groupIdx) => {
            const bandClass =
              group.tone === 'slate' || groupIdx % 2 === 1
                ? 'pv-feature-band pv-feature-band--slate'
                : 'pv-feature-band pv-feature-band--dark';

            return (
              <div key={groupIdx} className={bandClass}>
                <div className="pv-feature-inner">
                  <div className="pv-feature-texts">
                    {group.items.map((feat, itemIdx) => (
                      <div key={itemIdx}>
                        <h3 className="pv-feature-title">{feat.titleEn}</h3>
                        <p className="pv-feature-desc">{feat.descEn}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pv-feature-visual">
                    {group.deviceFrame === 'imac' ? (
                      <div className="pv-imac">
                        <div className="pv-imac-screen">
                          <img
                            src={group.image}
                            alt={group.items[0]?.titleEn || project.titleEn}
                            loading="lazy"
                          />
                        </div>
                        <img
                          src="/images/projects/iMac.svg"
                          alt="Desktop monitor display"
                          className="pv-imac-frame"
                        />
                      </div>
                    ) : (
                      <img
                        src={group.image}
                        alt={group.items[0]?.titleEn || project.titleEn}
                        loading="lazy"
                        className="pv-feature-standalone"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* PROJECT TIMELINE (FULL EDGE-TO-EDGE ABOVE PROJECT OUTCOMES) */}
      {timelineRows.length > 0 && (
        <section className="pv-timeline-section" aria-label="Project Timeline">
          <div className="pv-timeline-inner">
            <SectionTitle primary="Project" accent="Timeline" />
          </div>

          <div ref={timelineScrollRef} className="pv-timeline-scroll" data-lenis-prevent onMouseDown={handleTimelineMouseDown} onMouseMove={handleTimelineMouseMove} onMouseUp={handleTimelineMouseUpOrLeave} onMouseLeave={handleTimelineMouseUpOrLeave}>
            <div className="pv-timeline-board">
              <div className="pv-timeline-grid-lines" aria-hidden="true">
                {Array.from({ length: TOTAL_MONTHS + 1 }).map((_, idx) => (
                  <span key={idx} className="pv-timeline-col-line" />
                ))}
              </div>

              <div className="pv-timeline-rows">
                {timelineRows.map((rowItems, rowIdx) => {
                  let cursorPct = 0;
                  return (
                    <div key={rowIdx} className="pv-timeline-row">
                      {rowItems.map((phase, itemIdx) => {
                        const startPct = Math.max(
                          0,
                          Math.min(92, (phase.start / TOTAL_MONTHS) * 100)
                        );
                        const widthPct = Math.max(
                          11,
                          Math.min(
                            100 - startPct,
                            (phase.span / TOTAL_MONTHS) * 100
                          )
                        );
                        const gapPct = Math.max(0, startPct - cursorPct);
                        cursorPct = startPct + widthPct;
                        const toneClass = `pv-timeline-bar--${phase.tone || 'blue'}`;

                        return (
                          <div key={itemIdx} className={`pv-timeline-bar ${toneClass}`}
                            style={{
                              '--pv-bar-gap': `${gapPct}%`,
                              '--pv-bar-width': `${widthPct}%`,
                              marginLeft: `${gapPct}%`,
                              width: `${widthPct}%`,
                            }}>
                            <span className="pv-timeline-label">{phase.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              <div className="pv-timeline-axis">
                {TIMELINE_AXIS_LABELS.map((item, idx) => (
                  <span key={idx} className="pv-timeline-month" style={{ left: `${item.positionPct}%` }}>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PROJECT OUTCOMES */}
      {outcomes.length > 0 && (
        <section className="pv-outcomes-section" aria-label="Project Outcomes">
          <SectionTitle primary="Project" accent="Outcomes" />

          <div className="pv-outcomes-grid">
            {outcomes.map((item, idx) => {
              const iconKey =
                item.icon || outcomeIconOrder[idx % outcomeIconOrder.length];

              return (
                <article key={idx} className="pv-outcome-card">
                  <div className="pv-outcome-icon-box">
                    <OutcomeIcon type={iconKey} />
                  </div>
                  <div className="pv-outcome-title-bar">
                    {item.labelEn}
                  </div>
                  {item.descEn && (
                    <div className="pv-outcome-body">
                      {item.descEn}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <ReadyToStart />
    </div>
  );
}

export default ProjectView;