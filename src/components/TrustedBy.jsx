import React from 'react';

const technologies = [
  {
    name: 'MongoDB',
    src: 'https://cdn.simpleicons.org/mongodb/47A248',
  },
  {
    name: 'Express.js',
    src: 'https://cdn.simpleicons.org/express/FFFFFF',
  },
  {
    name: 'React.js',
    src: 'https://cdn.simpleicons.org/react/61DAFB',
  },
  {
    name: 'Node.js',
    src: 'https://cdn.simpleicons.org/nodedotjs/339933',
  },
  {
    name: 'JavaScript',
    src: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  },
  {
    name: 'HTML5',
    src: 'https://cdn.simpleicons.org/html5/E34F26',
  },
  {
    name: 'CSS3',
    src: 'https://cdn.simpleicons.org/css/1572B6',
  },
  {
    name: 'Tailwind CSS',
    src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  },
  {
    name: 'GSAP',
    src: 'https://cdn.simpleicons.org/greensock/88CE02',
  },
  {
    name: 'Three.js',
    src: 'https://cdn.simpleicons.org/threedotjs/FFFFFF',
  },
  {
    name: 'Framer Motion',
    src: 'https://cdn.simpleicons.org/framer/0055FF',
  },
  {
    name: 'Flutter',
    src: 'https://cdn.simpleicons.org/flutter/02569B',
  },
  {
    name: 'Dart',
    src: 'https://cdn.simpleicons.org/dart/0175C2',
  },
  {
    name: 'Firebase',
    src: 'https://cdn.simpleicons.org/firebase/FFCA28',
  },
  {
    name: 'Android',
    src: 'https://cdn.simpleicons.org/android/3DDC84',
  },
  {
    name: 'Git',
    src: 'https://cdn.simpleicons.org/git/F05032',
  },
  {
    name: 'GitHub',
    src: 'https://cdn.simpleicons.org/github/FFFFFF',
  },
  {
    name: 'Postman',
    src: 'https://cdn.simpleicons.org/postman/FF6C37',
  },
];

function TechnologyCard({ technology }) {
  return (
    <div
      className="
        group flex h-[68px] w-[172px] shrink-0 items-center gap-3
        rounded-xl border border-white/[0.08]
        bg-[#0A141E]/90 px-3.5
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-cyan-400/30
        hover:bg-[#101F2C]
        hover:shadow-[0_8px_30px_rgba(6,182,212,0.10)]
        sm:h-[72px] sm:w-[184px]
        md:h-[76px] md:w-[196px]
      "
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] transition-colors duration-300 group-hover:bg-white/[0.08]">
        <img
          src={technology.src}
          alt={`${technology.name} logo`}
          loading="lazy"
          draggable="false"
          className="technology-logo h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <span className="whitespace-nowrap text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-[15px]">
        {technology.name}
      </span>
    </div>
  );
}

export default function TrustedBy() {
  // Repeating the list makes the marquee loop smoothly.
  const marqueeTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#030E18] py-16 sm:py-20"
      aria-label="Technologies we use"
    >
      <div className="mx-auto mb-9 max-w-7xl px-5 text-center sm:mb-12 sm:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
          Our Tech Stack
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          Technologies We Use
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          Powering our digital solutions with modern, reliable technologies.
        </p>
      </div>

      <div className="marquee-wrapper relative">
        {/* Side fade effects */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#030E18] to-transparent sm:w-24" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#030E18] to-transparent sm:w-24" />

        <div className="marquee-track flex w-max items-center gap-4 py-4 sm:gap-5">
          {marqueeTechnologies.map((technology, index) => (
            <TechnologyCard
              key={`${technology.name}-${index}`}
              technology={technology}
            />
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marqueeScroll 35s linear infinite;
          will-change: transform;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333333%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation-duration: 100s;
          }

          .technology-logo {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
