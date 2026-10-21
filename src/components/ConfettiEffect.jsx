import React, { useEffect, useState } from 'react';

export function ConfettiEffect({ active = true }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!active) return;

    // Colors matching FikraTech's exact classes
    const colors = [
      'bg-yellow-400',
      'bg-red-400',
      'bg-blue-400',
      'bg-green-400',
      'bg-pink-400',
      'bg-purple-400',
    ];

    const shapes = ['w-1 h-3', 'w-2 h-4', 'w-2 h-3 rounded-full', 'w-8 h-1'];

    const items = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${(Math.random() * 95).toFixed(2)}%`,
      duration: `${(1.5 + Math.random() * 1.5).toFixed(2)}s`,
      delay: `${(Math.random() * 2).toFixed(2)}s`,
      rotation: `${Math.floor(Math.random() * 360)}deg`,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    setParticles(items);
  }, [active]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute animate-fall ${p.color} ${p.shape} opacity-80`}
          style={{
            left: p.left,
            top: '-10px',
            animationDuration: p.duration,
            animationDelay: p.delay,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            transform: `rotate(${p.rotation})`,
          }}
        />
      ))}
    </div>
  );
}

export default ConfettiEffect;
