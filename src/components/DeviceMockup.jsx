import React from 'react';

export function DeviceMockup({
  device: _device,
  image,
  alt = 'Project Screen',
  variant = 'frame',
  onImageLoad,
  className = '',
}) {
  const singleImg = Array.isArray(image) ? image[0] : image;

  if (variant === 'showcase') {
    return (
      <div className={`projects-showcase-mockup ${className}`}>
        <img
          src={singleImg}
          alt={alt}
          draggable="false"
          onLoad={onImageLoad}
          className="projects-showcase-image"
        />
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-[550px] mx-auto ${className}`}>
      {/* iMac Frame (Same for all project cards) */}
      <img
        src="/images/projects/iMac.svg"
        alt="iMac Frame"
        className="relative z-0 w-full h-auto pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      />
      
      {/* iMac Screen Content */}
      <div className="absolute left-[4.2%] top-[4.2%] w-[91.6%] h-[63%] rounded-t-sm overflow-hidden z-10 bg-black flex items-center justify-center">
        <img
          src={singleImg}
          alt={alt}
          onLoad={onImageLoad}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default DeviceMockup;