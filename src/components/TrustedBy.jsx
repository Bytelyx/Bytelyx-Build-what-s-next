import React from 'react';

const clientLogos = [
  { name: 'Partner 1', src: '/images/home/trustedBy/image1-2.svg' },
  { name: 'Partner 2', src: '/images/home/trustedBy/image6.svg' },
  { name: 'Partner 3', src: '/images/home/trustedBy/image3-2.svg' },
  { name: 'Partner 4', src: '/images/home/trustedBy/image4-2.svg' },
  { name: 'Partner 5', src: '/images/home/trustedBy/image5-2.svg' },
  { name: 'Decca', src: '/images/home/trustedBy/decca.avif' },
  { name: 'Hawelli', src: '/images/home/trustedBy/hawelli.avif' },
  { name: 'Zamzam', src: '/images/home/trustedBy/zamzam.avif' },
  { name: 'Cham', src: '/images/home/trustedBy/cham.avif' },
];

export function TrustedBy() {
  return (
    <section className="my-8 w-full overflow-hidden xl:my-14 xl:space-y-10" aria-label="Trusted by Innovators and Industry Leaders">
      <h3 className="m-auto text-center text-sm md:text-2xl font-normal">
        <span className="bg-gradient-to-b from-foreground-from to-foreground-to bg-clip-text py-2 text-transparent">
          Trusted by Innovators and Industry Leaders
        </span>
      </h3>

      <div className="relative select-none overflow-hidden py-4" dir="ltr">
        {/* Left & Right Gradient Shadows */}
        <span className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#030E18] to-transparent lg:w-40" />
        <span className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#030E18] to-transparent lg:w-40" />

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 lg:gap-6">
          {/* Double the array for seamless infinite marquee loop */}
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group min-w-0 shrink-0 grow-0 p-1 md:p-2"
            >
              <div className="flex h-16 w-32 items-center justify-center rounded-xl border border-primary/10 bg-[#0A141E]/60 p-2 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-[#0A141E] group-hover:shadow-[0_0_20px_rgba(5,195,222,0.12)] md:h-20 md:w-44 lg:h-24 lg:w-52 lg:p-4">
                <img
                  src={client.src}
                  alt={client.name}
                  className="m-auto max-h-10 max-w-[80%] object-contain contrast-0 grayscale transition-all duration-300 group-hover:contrast-100 group-hover:grayscale-0 md:max-h-12 lg:max-h-14"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marqueeScroll 28s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}

export default TrustedBy;
