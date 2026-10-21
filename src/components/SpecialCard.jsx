import React, { useRef, useState } from 'react';

export function SpecialCard({ children, className = '', onClick }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A141E] backdrop-blur-xl transition-all duration-300 ${className}`}
    >
      {/* Interactive mouse spotlight */}
      <div
        className="pointer-events-none absolute -z-10 h-32 w-32 rounded-full bg-[radial-gradient(at_center,_#20375699,_#05c5de00)] blur-xl transition-opacity duration-300"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          opacity: isHovered ? 1 : 0,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Gradient border mask */}
      <div
        className="pointer-events-none absolute inset-0 rounded-inherit border-transparent bg-clip-border bg-origin-border border-t border-b bg-gradient-foreground bg-[radial-gradient(ellipse_at_center,_#6366f1,_#05c5de00)] opacity-80"
        style={{
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      />

      {/* Ambient background glow */}
      <span className="pointer-events-none absolute -left-20 -top-24 -z-20 h-40 w-full bg-[radial-gradient(ellipse_at_center,_#203756,_#05c5de00)] blur-3xl" />

      {/* Card Content */}
      {children}
    </div>
  );
}

export default SpecialCard;
