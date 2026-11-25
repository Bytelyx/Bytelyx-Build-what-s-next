import React from 'react';

export function DeviceMockup({ device, image, className = '' }) {
  if (device === 'mobile' && Array.isArray(image)) {
    return (
      <div className={`relative flex scale-100 md:scale-110 lg:scale-125 items-end justify-center gap-2 md:gap-4 ${className}`}>
        {/* Left Phone */}
        <div className="relative w-36 md:w-52 translate-x-8 rtl:-translate-x-8 opacity-90 transition duration-500 hover:z-20 hover:scale-105">
          <img src="/images/projects/mobile.svg" alt="Phone Frame" className="w-full relative z-10 pointer-events-none" />
          <div className="absolute left-[7.5%] top-[2.5%] h-[95%] w-[85%] rounded-[1.5rem] md:rounded-[2.2rem] overflow-hidden z-0">
            <img
              src={image[0]}
              alt="App Screen 1"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* Center Phone */}
        <div className="relative w-44 md:w-60 z-10 transition duration-500 hover:scale-105">
          <img src="/images/projects/mobile.svg" alt="Phone Frame" className="w-full relative z-10 pointer-events-none" />
          <div className="absolute left-[7.5%] top-[2.5%] h-[95%] w-[85%] rounded-[1.8rem] md:rounded-[2.5rem] overflow-hidden z-0">
            <img
              src={image[1] || image[0]}
              alt="App Screen 2"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Phone */}
        <div className="relative w-36 md:w-52 -translate-x-8 rtl:translate-x-8 opacity-90 transition duration-500 hover:z-20 hover:scale-105">
          <img src="/images/projects/mobile.svg" alt="Phone Frame" className="w-full relative z-10 pointer-events-none" />
          <div className="absolute left-[7.5%] top-[2.5%] h-[95%] w-[85%] rounded-[1.5rem] md:rounded-[2.2rem] overflow-hidden z-0">
            <img
              src={image[2] || image[0]}
              alt="App Screen 3"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    );
  }

  if (device === 'imac') {
    const singleImg = Array.isArray(image) ? image[0] : image;
    return (
      <div className={`relative w-full max-w-[550px] mx-auto ${className}`}>
        {/* iMac Frame */}
        <img
          src="/images/projects/iMac.svg"
          alt="iMac Frame"
          className="relative z-0 w-full h-auto pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        />
        {/* iMac Screen Content */}
        <div className="absolute left-[4.2%] top-[4.2%] w-[91.6%] h-[63%] rounded-t-sm overflow-hidden z-10 bg-black">
          <img
            src={singleImg}
            alt="iMac Screen"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    );
  }

  // Unified CSS Laptop Frame for all laptop cards
  const singleImg = Array.isArray(image) ? image[0] : image;
  return (
    <div className={`relative w-full max-w-[560px] mx-auto flex flex-col items-center select-none ${className}`}>
      {/* Laptop Lid / Bezel */}
      <div className="relative w-[84%] rounded-t-2xl border-[6px] sm:border-[8px] border-[#1e242d] bg-[#090c12] shadow-2xl overflow-hidden">
        {/* Top Camera Dot */}
        <div className="mx-auto my-1.5 h-1.5 w-1.5 rounded-full bg-zinc-700" />

        {/* Screen Viewport (strictly clipped inside the laptop screen) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#06090f] flex items-center justify-center">
          <img
            src={singleImg}
            alt="Laptop Screen"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>

      {/* Laptop Base / Bottom Lip */}
      <div className="relative w-full h-3 sm:h-3.5 rounded-b-xl bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800 border-t border-zinc-500/40 shadow-lg">
        <div className="mx-auto h-1 w-20 rounded-b-md bg-zinc-900/60" />
      </div>
    </div>
  );
}

export default DeviceMockup;