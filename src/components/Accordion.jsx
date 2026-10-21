import React, { useState } from 'react';

export function Accordion({ items, allowMultiple = false }) {
  const [openIndices, setOpenIndices] = useState([]);

  const toggle = (idx) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(idx) ? [] : [idx]));
    }
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className="border-b border-white/10 pb-4 transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between py-3 text-left rtl:text-right group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span
                className={`text-base md:text-lg font-medium transition duration-200 ${
                  isOpen
                    ? 'text-primary'
                    : 'text-foreground/90 group-hover:text-primary'
                }`}
              >
                {item.question}
              </span>
              <span
                className={`text-2xl font-light ms-4 transition-transform duration-300 text-foreground/70 group-hover:text-primary ${
                  isOpen ? 'rotate-45 text-primary' : 'rotate-0'
                }`}
              >
                +
              </span>
            </button>

            {/* Answer Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100 pt-2 pb-1'
                  : 'grid-rows-[0fr] opacity-0 overflow-hidden'
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed font-light">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
