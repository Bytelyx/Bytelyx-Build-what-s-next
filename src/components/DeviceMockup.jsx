import React from 'react';

export function DeviceMockup({ device, image, className = '' }) {
  if (device === 'mobile' && Array.isArray(image)) {
    return (
      <div className={`relative flex scale-100 md:scale-110 lg:scale-125 items-end justify-center gap-2 md:gap-4 ${className}`}>
        {/* Left Phone */}
        <div className="relative w-36 md:w-52 translate-x-8 rtl:-translate-x-8 opacity-90 transition duration-500 hover:z-20 hover:scale-105">
          <img src="/images/projects/mobile.svg" alt="Phone Frame" className="w-full relative z-10 pointer-events-none" />
          <img
            src={image[0]}
            alt="App Screen 1"
            className="absolute left-[7.5%] top-[2.5%] h-[95%] w-[85%] rounded-[1.5rem] md:rounded-[2.2rem] object-cover object-top z-0"
          />
        </div>

        {/* Center Phone */}
        <div className="relative w-44 md:w-60 z-10 transition duration-500 hover:scale-105">
          <img src="/images/projects/mobile.svg" alt="Phone Frame" className="w-full relative z-10 pointer-events-none" />
          <img
            src={image[1] || image[0]}
            alt="App Screen 2"
            className="absolute left-[7.5%] top-[2.5%] h-[95%] w-[85%] rounded-[1.8rem] md:rounded-[2.5rem] object-cover object-top z-0"
          />
        </div>

        {/* Right Phone */}
        <div className="relative w-36 md:w-52 -translate-x-8 rtl:translate-x-8 opacity-90 transition duration-500 hover:z-20 hover:scale-105">
          <img src="/images/projects/mobile.svg" alt="Phone Frame" className="w-full relative z-10 pointer-events-none" />
          <img
            src={image[2] || image[0]}
            alt="App Screen 3"
            className="absolute left-[7.5%] top-[2.5%] h-[95%] w-[85%] rounded-[1.5rem] md:rounded-[2.2rem] object-cover object-top z-0"
          />
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
        {/* iMac Screen Content on top */}
        <img
          src={singleImg}
          alt="iMac Screen"
          className="absolute left-[4.2%] top-[4.2%] w-[91.6%] h-[63%] rounded-t-sm object-cover object-top z-10"
        />
      </div>
    );
  }

  // Macbook Pro (default)
  const singleImg = Array.isArray(image) ? image[0] : image;
  return (
    <div className={`relative w-full max-w-[620px] mx-auto ${className}`}>
      {/* Laptop Frame */}
      <img
        src="/images/projects/MacbookPro.svg"
        alt="Macbook Pro Frame"
        className="relative z-0 w-full h-auto pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      />
      {/* Laptop Screen Content on top of bezel */}
      <img
        src={singleImg}
        alt="Laptop Screen"
        className="absolute left-[10.5%] top-[1.5%] w-[79%] h-[84.5%] rounded-t-sm object-cover object-left-top z-10"
      />
    </div>
  );
}

export default DeviceMockup;
