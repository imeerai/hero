"use client";
import React from "react";

const Timeline = ({ data }) => {
  return (
    <div className="relative w-full bg-transparent dark:bg-transparent font-sans md:px-10">
      <div className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-36 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-6 absolute left-5 md:left-5 w-6 rounded-full bg-[#9059fd]/30 border border-[#9059fd]/65 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-[#9059fd] p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-slate-100">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-slate-100">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div className="absolute md:left-8 left-8 top-0 bottom-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#9059fd]/45 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="absolute inset-x-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#9059fd]/85 via-[#55389f]/75 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
};

export { Timeline };
