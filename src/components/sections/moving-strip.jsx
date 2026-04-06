"use client";

import { portfolioData } from "@/data/portfolio-data";

function MovingStripSection() {
  const items = portfolioData.movingStrip.items.map((item) =>
    item.toUpperCase(),
  );

  return (
    <section className="relative overflow-hidden bg-[#55389f] py-3 border-y border-[#9059fd]/60 will-change-contents">
      <div
        className="marquee-track whitespace-nowrap"
        aria-label="Moving highlights"
      >
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="marquee-group"
            aria-hidden={groupIndex === 1}
          >
            {items.map((item, index) => (
              <span
                key={`${item}-${groupIndex}-${index}`}
                className="strip-item mx-5 md:mx-6 inline-flex items-center text-base md:text-2xl font-semibold uppercase text-white/95"
              >
                <span className="strip-star mr-3 md:mr-4 text-white/95">✦</span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovingStripSection;
