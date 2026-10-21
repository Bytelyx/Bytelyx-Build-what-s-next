import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ReadyToStart() {
  const navigate = useNavigate();
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(true);
    setTimeout(() => {
      navigate('/contact');
    }, 450);
  };

  return (
    <section className="relative my-20 w-full overflow-hidden text-center md:my-32" aria-label="Ready to Start">
      {/* Container */}
      <div className="3xl:container 2.5xl:px-32 3xl:px-48 mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-10 lg:gap-6 lg:px-8 xl:gap-8 xl:px-14 2xl:px-24">
        {/* Badge */}
        <div className="bottomBorder flex items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
          <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
          <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
            idea to project
          </span>
        </div>

        {/* Heading */}
        <h2 className="bg-gradient-to-b from-foreground-from via-white to-foreground-to bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-5xl xl:text-6xl">
          Ready to Start
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl text-[0.85rem] font-light leading-relaxed text-[#818B95] md:text-lg lg:text-sm xl:text-base">
          Take the first step toward innovation. <br className="hidden sm:inline" />
          Say Yes, and let’s build something extraordinary together.
        </p>

        {/* Interactive YES Toggle Capsule Switch */}
        <div
          role="button"
          tabIndex={0}
          onClick={handleToggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleToggle();
            }
          }}
          className="group relative z-10 my-4 flex h-[5.5rem] w-[13rem] cursor-pointer items-center justify-between rounded-full bg-gradient-to-r from-[#307FE2] to-[#05C3DE] p-2 shadow-2xl shadow-cyan-500/25 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#05c5de]"
          aria-label="Click Yes to get in touch"
        >
          {/* YES Text */}
          <span className="ps-6 text-3xl font-black tracking-wider text-white select-none">
            YES
          </span>

          {/* Toggle Circular Knob */}
          <div
            className={`flex size-18 items-center justify-center rounded-full bg-[#FBFBFB] shadow-xl shadow-black/40 transition-transform duration-500 ${
              toggled ? 'translate-x-2' : 'group-hover:translate-x-1'
            }`}
          >
            <div className="size-14 rounded-full bg-[#ECEFF6] shadow-inner shadow-black/30 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="size-6 text-[#307FE2] transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spotlight Beam */}
      <div className="relative -mt-20 flex h-[14rem] flex-col overflow-hidden border-b border-white/10 lg:-mt-24 xl:-mt-28">
        <div className="pointer-events-none absolute -bottom-5 left-1/2 -z-10 h-16 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_#81a1f9_0%,_#6ac8ff_44%,_#6ee2fc_54%,_#245bf1_100%)] opacity-75 blur-[4rem] lg:-bottom-20 lg:h-32 lg:w-72 lg:blur-[6rem] xl:h-40 xl:w-96 xl:blur-[7rem]" />
      </div>
    </section>
  );
}

export default ReadyToStart;
