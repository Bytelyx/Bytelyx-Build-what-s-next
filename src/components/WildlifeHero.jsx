import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Grid, Globe, 
  MapPin, ArrowDown, Menu 
} from 'lucide-react';
import { WILDLIFE_ARCHIVE, INTRO_FILM_URL, PHOTOGRAPHER_INFO } from '../data/wildlifeArchive';

const N = 21;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5)); // ~2.399963 rad

export default function WildlifeHero({ onExploreStudio }) {
  // Splash and Intro Video State
  const [splashVisible, setSplashVisible] = useState(true);
  const [splashProgress, setSplashProgress] = useState(0);
  const [introPlaying, setIntroPlaying] = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(false);

  // 3D Sphere Interaction State
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default', 'drag', 'view'
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  // View Modes: 3D Sphere vs Flat Archive Grid
  const [viewMode, setViewMode] = useState('sphere'); // 'sphere' | 'grid'
  
  // Lightbox State
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);
  const [currentLightboxSrc, setCurrentLightboxSrc] = useState('');
  const lightboxReqIdRef = useRef(0);

  // Full-screen Menu State
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Dolly Progress (first 16vh)
  const [dollyProgress, setDollyProgress] = useState(0);

  // Responsive Sphere Radius & Headline Width
  const [dimensions, setDimensions] = useState({ radius: 480, hw: 620 });

  // Refs
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const dragRef = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    vx: 0,
    vy: 0,
    isTouch: false,
    horizontalLocked: false
  });
  const [decodedThumbs, setDecodedThumbs] = useState({});
  const decodedThumbsRef = useRef({});

  const revealHero = useCallback(() => {
    setIntroPlaying(false);
    setHeroRevealed(true);
  }, []);

  // 1. Calculate Fibonacci Sphere Geometry for 21 Cards
  const cards = useMemo(() => {
    return WILDLIFE_ARCHIVE.map((photo, i) => {
      const y = 1 - (i / (N - 1)) * 2; // from 1 to -1
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const phi = i * GOLDEN_ANGLE;
      const x = Math.cos(phi) * radiusAtY;
      const z = Math.sin(phi) * radiusAtY;

      // Surface normal orientation facing outwards
      const polar = Math.acos(Math.max(-1, Math.min(1, y)));
      const rotY = (phi * 180 / Math.PI) + 90;
      const rotX = -(polar - Math.PI / 2) * (180 / Math.PI);

      return {
        ...photo,
        sphereIndex: i,
        x,
        y,
        z,
        rotX,
        rotY,
        isTall: photo.title === 'Left Behind' // ONLY Left Behind is tall portrait!
      };
    });
  }, []);

  // 2. Responsive Breakpoints Calculation
  const updateDimensions = useCallback(() => {
    if (typeof window === 'undefined') return;
    const w = window.innerWidth;
    const h = window.innerHeight;

    let r = 480;
    let hw = 620;

    if (h <= 520 && w > h) {
      // Landscape mobile/tablet max-height: 520px
      r = 210;
      hw = 320;
    } else if (w <= 380) {
      r = 250;
      hw = 300;
    } else if (w <= 390) {
      r = 260;
      hw = 320;
    } else if (w <= 640) {
      r = 300;
      hw = 350;
    } else if (w <= 768) {
      r = 340;
      hw = 410;
    } else if (w <= 900) {
      r = 380;
      hw = 480;
    }

    setDimensions({ radius: r, hw });
    document.documentElement.style.setProperty('--R', `${r}px`);
    document.documentElement.style.setProperty('--hw', `${hw}px`);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // 3. Preloading Thumbnails & Intro Film with Min/Max Timeouts
  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = WILDLIFE_ARCHIVE.length + 1; // 21 stills + 1 film
    const startTime = Date.now();
    const MIN_SPLASH_MS = 1400;
    const MAX_TIMEOUT_MS = 3800;

    const completeSplash = () => {
      setSplashProgress(100);
      setTimeout(() => {
        setSplashVisible(false);
        setIntroPlaying(true);
        // Play video at 2x speed
        if (videoRef.current) {
          videoRef.current.playbackRate = 2.0;
          videoRef.current.play().catch(() => {
            // Autoplay recovery
            revealHero();
          });
        }
      }, 300);
    };

    const onItemLoaded = () => {
      loadedCount++;
      const currentPct = Math.min(95, Math.round((loadedCount / totalAssets) * 100));
      setSplashProgress(currentPct);

      if (loadedCount >= totalAssets) {
        const elapsed = Date.now() - startTime;
        const delay = Math.max(0, MIN_SPLASH_MS - elapsed);
        setTimeout(completeSplash, delay);
      }
    };

    // Preload & Decode Images once
    WILDLIFE_ARCHIVE.forEach((photo) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = photo.cdnThumb;

      img.onload = () => {
        let thumbUrl = photo.cdnThumb;
        try {
          // Offscreen canvas downscale / decode
          const canvas = document.createElement('canvas');
          canvas.width = photo.isTall ? 120 : 180;
          canvas.height = photo.isTall ? 180 : 120;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            thumbUrl = canvas.toDataURL('image/webp', 0.85);
          }
        } catch {
          // Cross-origin fallback
          thumbUrl = photo.fallbackThumb || photo.cdnThumb;
        }
        decodedThumbsRef.current[photo.id] = thumbUrl;
        setDecodedThumbs((prev) => ({ ...prev, [photo.id]: thumbUrl }));
        onItemLoaded();
      };

      img.onerror = () => {
        // Fallback to high-res wildlife photography
        const thumbUrl = photo.fallbackThumb;
        decodedThumbsRef.current[photo.id] = thumbUrl;
        setDecodedThumbs((prev) => ({ ...prev, [photo.id]: thumbUrl }));
        onItemLoaded();
      };
    });

    // Preload Intro Video
    const video = document.createElement('video');
    video.src = INTRO_FILM_URL;
    video.preload = 'auto';
    video.onloadeddata = onItemLoaded;
    video.onerror = onItemLoaded;

    // Safety Timeout backstop
    const safetyTimer = setTimeout(completeSplash, MAX_TIMEOUT_MS);

    return () => clearTimeout(safetyTimer);
  }, [revealHero]);

  // 4. Momentum Physics & Drag Rotation Loop
  useEffect(() => {
    let currentYaw = yaw;
    let currentPitch = pitch;

    let animId;
    const tick = () => {
      const drag = dragRef.current;
      if (!isDragging) {
        // Apply momentum friction decay
        if (Math.abs(drag.vx) > 0.005 || Math.abs(drag.vy) > 0.005) {
          currentYaw += drag.vx;
          currentPitch += drag.vy;
          currentPitch = Math.max(-55, Math.min(55, currentPitch));
          drag.vx *= 0.94;
          drag.vy *= 0.94;
          setYaw(currentYaw);
          setPitch(currentPitch);
        } else {
          // Idle ambient rotation
          currentYaw += 0.035;
          setYaw(currentYaw);
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isDragging, yaw, pitch]);

  // 5. Scroll-Driven Forward Dolly (First 16vh)
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      const scrollThreshold = window.innerHeight * 0.16;
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollThreshold));
      setDollyProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 6. Pointer & Touch Drag Handlers
  const handlePointerDown = (e) => {
    if (viewMode !== 'sphere') return;
    setIsDragging(true);
    setCursorState('drag');
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      lastX: e.clientX,
      lastY: e.clientY,
      vx: 0,
      vy: 0,
      isTouch: e.pointerType === 'touch',
      horizontalLocked: false
    };
  };

  const handlePointerMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });

    if (!isDragging) return;
    const drag = dragRef.current;
    const dx = e.clientX - drag.lastX;
    const dy = e.clientY - drag.lastY;

    // Distinguish horizontal rotation from vertical scrolling on touch
    if (drag.isTouch && !drag.horizontalLocked) {
      if (Math.abs(dx) > Math.abs(dy) + 4) {
        drag.horizontalLocked = true;
      }
    }

    const sensitivity = drag.isTouch ? 0.35 : 0.28;
    setYaw((prev) => prev + dx * sensitivity);
    setPitch((prev) => Math.max(-55, Math.min(55, prev - dy * sensitivity)));

    drag.vx = dx * sensitivity * 0.45;
    drag.vy = -dy * sensitivity * 0.45;
    drag.lastX = e.clientX;
    drag.lastY = e.clientY;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setCursorState('default');
  };

  // Lightbox Navigation
  const openLightbox = useCallback((photo, index) => {
    setSelectedPhoto(photo);
    setLightboxIndex(index);
    setLightboxLoaded(false);
  }, []);

  const handleNextPhoto = useCallback(() => {
    setLightboxIndex((prevIdx) => {
      const nextIdx = (prevIdx + 1) % WILDLIFE_ARCHIVE.length;
      setSelectedPhoto(WILDLIFE_ARCHIVE[nextIdx]);
      setLightboxLoaded(false);
      return nextIdx;
    });
  }, []);

  const handlePrevPhoto = useCallback(() => {
    setLightboxIndex((prevIdx) => {
      const prev = (prevIdx - 1 + WILDLIFE_ARCHIVE.length) % WILDLIFE_ARCHIVE.length;
      setSelectedPhoto(WILDLIFE_ARCHIVE[prev]);
      setLightboxLoaded(false);
      return prev;
    });
  }, []);

  // 7. Escape Key Hierarchy
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedPhoto) {
          setSelectedPhoto(null);
        } else if (menuOpen) {
          setMenuOpen(false);
        } else if (viewMode === 'grid') {
          setViewMode('sphere');
        }
      } else if (selectedPhoto) {
        if (e.key === 'ArrowRight') handleNextPhoto();
        if (e.key === 'ArrowLeft') handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, menuOpen, viewMode, handleNextPhoto, handlePrevPhoto]);

  // Preload Lightbox Image while ignoring stale asynchronous loads
  useEffect(() => {
    if (!selectedPhoto) {
      setCurrentLightboxSrc('');
      return;
    }
    const reqId = ++lightboxReqIdRef.current;
    // Show thumbnail preview immediately while full still loads
    const initialSrc = decodedThumbs[selectedPhoto.id] || selectedPhoto.fallbackThumb || selectedPhoto.cdnThumb;
    setCurrentLightboxSrc(initialSrc);
    setLightboxLoaded(false);

    // Asynchronously preload full resolution still
    const fullImg = new Image();
    fullImg.src = selectedPhoto.cdnFull;
    fullImg.onload = () => {
      // Discard stale asynchronous loads if user navigated away
      if (reqId === lightboxReqIdRef.current) {
        setCurrentLightboxSrc(selectedPhoto.cdnFull);
        setLightboxLoaded(true);
      }
    };
    fullImg.onerror = () => {
      if (reqId === lightboxReqIdRef.current) {
        setCurrentLightboxSrc(selectedPhoto.fallbackFull);
        setLightboxLoaded(true);
      }
    };
  }, [selectedPhoto, decodedThumbs]);

  // Custom Cursor Mouse Listener
  useEffect(() => {
    document.body.classList.add('has-custom-cursor');
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor, { passive: true });
    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden select-none">
      
      {/* ========================================================
          1. FULLSCREEN BLACK SPLASH SCREEN
          ======================================================== */}
      {splashVisible && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-[#f4f2ef] transition-opacity duration-700 px-6"
          style={{ opacity: splashProgress === 100 ? 0 : 1, pointerEvents: splashVisible ? 'auto' : 'none' }}
        >
          <div className="text-center max-w-md w-full">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#8c8783] block mb-3">
              Pure Optical Documentation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-[#f4f2ef] mb-3">
              {PHOTOGRAPHER_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm font-sans text-[#8c8783] tracking-widest uppercase mb-10">
              {PHOTOGRAPHER_INFO.edition}
            </p>

            {/* Minimal Animated Loading Line */}
            <div className="w-full h-[1.5px] bg-neutral-900 overflow-hidden relative rounded-full">
              <div 
                className="h-full bg-[#f4f2ef] transition-all duration-300 ease-out"
                style={{ width: `${splashProgress}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-[#595552] mt-3">
              <span>INITIALIZING 3D SPHERE</span>
              <span>{splashProgress}%</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          2. INTRO FILM WITH AUTOPLAY, MUTED, 2X SPEED, SKIP BUTTON
          ======================================================== */}
      {introPlaying && (
        <div className="fixed inset-0 z-40 bg-black flex items-center justify-center transition-opacity duration-1000">
          <video
            ref={videoRef}
            src={INTRO_FILM_URL}
            autoPlay
            muted
            playsInline
            onEnded={revealHero}
            className="w-full h-full object-cover filter brightness-95"
          />

          {/* Film Skip Button */}
          <button
            onClick={revealHero}
            className="absolute bottom-8 right-8 z-50 px-5 py-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-[#f4f2ef] text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Skip Intro Film"
          >
            Skip Intro →
          </button>

          <div className="absolute bottom-8 left-8 z-50 text-[11px] font-mono text-white/50 tracking-wider">
            {PHOTOGRAPHER_INFO.name} · {PHOTOGRAPHER_INFO.edition} · PLAYBACK 2.0X
          </div>
        </div>
      )}

      {/* Cinematic Reveal Black Veil */}
      <div 
        id="veil"
        className={`fixed inset-0 z-30 bg-black pointer-events-none transition-opacity duration-1000 ${
          heroRevealed ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* ========================================================
          3. MAIN HERO STAGE: 3D FIBONACCI SPHERE & HEADLINE
          ======================================================== */}
      <section 
        id="hero"
        className="relative w-full h-screen overflow-hidden"
      >
        <div
          id="stage"
          ref={stageRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{
            cursor: viewMode === 'sphere' ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }}
        >
          {/* Subtle Cinematic Vignette */}
          <div className="cinematic-vignette" />

          {/* Top Editorial Floating Bar */}
          <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 py-6 pointer-events-auto">
            {/* Photographer Signature Card */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-neutral-900 shrink-0">
                <img 
                  src={WILDLIFE_ARCHIVE[20].cdnThumb}
                  onError={(e) => { e.currentTarget.src = WILDLIFE_ARCHIVE[20].fallbackThumb; }}
                  alt={PHOTOGRAPHER_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-[#f4f2ef] tracking-wide">
                  {PHOTOGRAPHER_INFO.name}
                </span>
                <span className="text-[10px] font-mono text-[#8c8783] tracking-widest uppercase">
                  {PHOTOGRAPHER_INFO.edition}
                </span>
              </div>
            </div>

            {/* Mode Controls & Fullscreen Menu */}
            <div className="flex items-center gap-3">
              {/* Grid / Sphere View Toggle */}
              <button
                onClick={() => setViewMode(viewMode === 'sphere' ? 'grid' : 'sphere')}
                className="px-4 py-2 rounded-full border border-white/15 bg-black/60 backdrop-blur-md text-[#f4f2ef] text-xs font-mono uppercase tracking-wider hover:border-white/40 hover:bg-white hover:text-black transition-all flex items-center gap-2"
                aria-label="Toggle Flat Archive Grid"
              >
                {viewMode === 'sphere' ? <Grid className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
                <span>{viewMode === 'sphere' ? 'Archive Grid' : '3D Sphere'}</span>
              </button>

              {/* Full-Screen Menu Trigger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2.5 rounded-full border border-white/15 bg-black/60 backdrop-blur-md text-[#f4f2ef] hover:border-white/40 hover:bg-white hover:text-black transition-all"
                aria-label="Open Archive Menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3D World Container (Controlled via Scroll Dolly & Drag Rotation) */}
          {viewMode === 'sphere' && (
            <div
              id="world"
              style={{
                transform: `scale(${1 + dollyProgress * 0.45}) translateZ(${dollyProgress * 300}px)`,
                opacity: Math.max(0, 1 - dollyProgress * 1.4)
              }}
            >
              {/* 3D Orb containing all 21 wildlife cards */}
              <div
                id="orb"
                style={{
                  transform: `rotateX(${pitch}deg) rotateY(${yaw}deg)`
                }}
              >
                {cards.map((card, idx) => {
                  const cardR = dimensions.radius;
                  const posX = card.x * cardR;
                  const posY = -card.y * cardR;
                  const posZ = card.z * cardR;

                  // Card sizing: Left Behind is THE ONLY tall portrait card
                  const cardW = card.isTall ? (dimensions.hw * 0.22) : (dimensions.hw * 0.28);
                  const cardH = card.isTall ? (dimensions.hw * 0.33) : (dimensions.hw * 0.19);

                  // Depth shading calculation based on card.z
                  const depthFactor = (card.z + 1) / 2; // 0 to 1
                  const opacity = 0.45 + depthFactor * 0.55;
                  const brightness = 0.65 + depthFactor * 0.35;

                  return (
                    <div
                      key={card.id}
                      className="sphere-card rounded border border-white/10 group select-none overflow-hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(card, idx);
                      }}
                      onMouseEnter={() => setCursorState('view')}
                      onMouseLeave={() => setCursorState('default')}
                      style={{
                        width: `${cardW}px`,
                        height: `${cardH}px`,
                        marginLeft: `${-cardW / 2}px`,
                        marginTop: `${-cardH / 2}px`,
                        transform: `translate3d(${posX}px, ${posY}px, ${posZ}px) rotateY(${card.rotY}deg) rotateX(${card.rotX}deg)`,
                        opacity,
                        filter: `brightness(${brightness})`,
                        backgroundColor: '#0a0a0a'
                      }}
                    >
                      <img
                        src={decodedThumbs[card.id] || card.cdnThumb}
                        onError={(e) => { e.currentTarget.src = card.fallbackThumb; }}
                        alt={card.title}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Subtle hover title badge */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 text-left">
                        <span className="text-[10px] font-serif text-[#f4f2ef] leading-tight font-medium">
                          {card.title}
                        </span>
                        <span className="text-[8px] font-mono text-[#8c8783] truncate">
                          {card.location.split('·')[0]}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Exact Headline Centering as a Sibling of #orb:
                  - Same origin at top: 50%; left: 50%
                  - width: var(--hw); margin-left: calc(var(--hw) / -2)
                  - .inner has transform: translateY(-50%)
                  - Five words in individual inline-block spans
                  - Counter-rotation & translateZ(R * 0.62)
              */}
              <div
                id="headline"
                style={{
                  transform: `translateZ(calc(var(--R) * 0.62)) rotateX(${-pitch}deg) rotateY(${-yaw}deg)`
                }}
              >
                <div className="inner">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl select-none leading-none">
                    <span>I</span>
                    <span>See</span>
                    <span>Through</span>
                    <span>the</span>
                    <span>Wild</span>
                  </h2>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              4. FLAT RESPONSIVE ARCHIVE GRID VIEW
              ======================================================== */}
          {viewMode === 'grid' && (
            <div className="absolute inset-0 z-20 pt-28 pb-16 px-6 sm:px-12 overflow-y-auto bg-black/95 backdrop-blur-xl">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-10">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8c8783] block mb-2">
                      Complete Permanent Archive
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-[#f4f2ef] font-light">
                      Field Notes 2026 Collection
                    </h2>
                  </div>
                  <div className="mt-4 sm:mt-0 text-xs font-mono text-[#8c8783]">
                    {WILDLIFE_ARCHIVE.length} MEDIUM-FORMAT STILLS
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {cards.map((card, idx) => (
                    <div
                      key={card.id}
                      onClick={() => openLightbox(card, idx)}
                      className={`group cursor-pointer rounded overflow-hidden border border-white/10 bg-[#080808] hover:border-white/30 transition-all ${
                        card.isTall ? 'sm:row-span-2' : ''
                      }`}
                    >
                      <div className={`overflow-hidden relative ${card.isTall ? 'aspect-[2/3]' : 'aspect-[16/10]'}`}>
                        <img
                          src={decodedThumbs[card.id] || card.cdnThumb}
                          onError={(e) => { e.currentTarget.src = card.fallbackThumb; }}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono text-[#8c8783]">
                          {card.number}
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="text-base font-serif text-[#f4f2ef] group-hover:text-white transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-xs font-sans text-[#8c8783] mt-1 line-clamp-1">
                          {card.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Floating Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-between px-6 sm:px-10 py-6 pointer-events-auto">
            {/* Archive Caption */}
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[11px] font-mono text-[#8c8783] tracking-widest uppercase">
                {PHOTOGRAPHER_INFO.locations}
              </span>
              <span className="text-xs text-[#595552] font-sans">
                Drag to rotate sphere · Click any card to inspect field notes
              </span>
            </div>

            {/* Scroll Cue to Enter Bytelx Studio */}
            <div className="flex flex-col items-center mx-auto sm:mx-0">
              <a
                href="#stack"
                onClick={(e) => {
                  e.preventDefault();
                  if (onExploreStudio) onExploreStudio();
                  const target = document.querySelector('#stack') || document.querySelector('#services');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex flex-col items-center gap-2 text-[#8c8783] hover:text-[#f4f2ef] transition-colors"
                aria-label="Scroll to Enter Studio"
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.25em]">
                  Scroll to Enter Studio
                </span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. IMAGE LIGHTBOX WITH FLIP ANIMATION & FULL-RES IMAGE
          ======================================================== */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full border border-white/20 bg-neutral-900/80 text-[#f4f2ef] hover:bg-white hover:text-black transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrevPhoto(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full border border-white/15 bg-neutral-900/70 text-[#f4f2ef] hover:bg-white hover:text-black transition-all"
            aria-label="Previous Photograph"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNextPhoto(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full border border-white/15 bg-neutral-900/70 text-[#f4f2ef] hover:bg-white hover:text-black transition-all"
            aria-label="Next Photograph"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Modal Content Card */}
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#080808] border border-white/15 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* High-Resolution Photograph Column */}
            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
              <img
                src={currentLightboxSrc || selectedPhoto.cdnFull}
                onError={(e) => { e.currentTarget.src = selectedPhoto.fallbackFull; }}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain max-h-[80vh] transition-opacity duration-300"
              />
            </div>

            {/* Editorial Metadata Column */}
            <div className="w-full md:w-[380px] p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-[#080808]">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8c8783] mb-3">
                  <span>PLATE NO. {selectedPhoto.number} / {WILDLIFE_ARCHIVE.length}</span>
                  <span className="uppercase">{selectedPhoto.date}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#f4f2ef] font-light tracking-tight mb-2">
                  {selectedPhoto.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-mono text-[#8c8783] mb-6">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{selectedPhoto.location}</span>
                </div>

                <div className="border-t border-white/10 pt-4 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8c8783] block mb-2">
                    Field Journal Note
                  </span>
                  <p className="text-sm font-sans text-[#f4f2ef]/90 leading-relaxed italic">
                    "{selectedPhoto.fieldNote}"
                  </p>
                </div>

                {/* Camera Technical Metadata */}
                {selectedPhoto.meta && (
                  <div className="border-t border-white/10 pt-4 space-y-1.5 text-[11px] font-mono text-[#8c8783]">
                    <div className="flex justify-between">
                      <span>Body:</span>
                      <span className="text-[#f4f2ef]">{selectedPhoto.meta.camera}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Optics:</span>
                      <span className="text-[#f4f2ef]">{selectedPhoto.meta.lens}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Settings:</span>
                      <span className="text-[#f4f2ef]">
                        {selectedPhoto.meta.aperture} · {selectedPhoto.meta.shutter} · {selectedPhoto.meta.iso}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-[11px] font-mono text-[#595552]">
                <span>ETHAN VALE ARCHIVE</span>
                <span>BYTELX STUDIO</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          6. FULL-SCREEN NAVIGATION MENU WITH EXACT STRINGS
          ======================================================== */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-8 sm:p-14 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8c8783]">
              Navigation & Directory
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-3 rounded-full border border-white/20 bg-neutral-900/80 text-[#f4f2ef] hover:bg-white hover:text-black transition-all"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 sm:gap-6 my-auto" aria-label="Archive Menu">
            <a
              href="#archive"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                setViewMode('grid');
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#f4f2ef] hover:text-[#8c8783] hover:translate-x-3 transition-all"
            >
              The Archive
            </a>

            <a
              href="#field-notes"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                setViewMode('sphere');
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#f4f2ef] hover:text-[#8c8783] hover:translate-x-3 transition-all"
            >
              Field Notes
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                const el = document.querySelector('#services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#f4f2ef] hover:text-[#8c8783] hover:translate-x-3 transition-all"
            >
              Studio
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#f4f2ef] hover:text-[#8c8783] hover:translate-x-3 transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Exact Menu Address and Email */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-white/10 pt-6 gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8c8783] block mb-1">
                Expedition Headquarters
              </span>
              <p className="text-sm font-sans text-[#f4f2ef]">
                {PHOTOGRAPHER_INFO.locations}
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8c8783] block mb-1">
                Direct Dispatch Line
              </span>
              <a
                href={`mailto:${PHOTOGRAPHER_INFO.contactEmail}`}
                className="text-sm font-mono text-[#f4f2ef] hover:underline"
              >
                {PHOTOGRAPHER_INFO.contactEmail}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          7. CUSTOM FINE-POINTER CURSOR
          ======================================================== */}
      <div 
        className="custom-cursor-dot hidden md:block"
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`
        }}
      />
      <div 
        className={`custom-cursor-ring hidden md:block ${
          cursorState === 'drag' ? 'cursor-drag' : cursorState === 'view' ? 'cursor-view' : ''
        }`}
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`
        }}
      />
    </div>
  );
}
