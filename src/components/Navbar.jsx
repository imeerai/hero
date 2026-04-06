import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menu, close } from "../assets";
import { portfolioData } from "@/data/portfolio-data";

const Navbar = () => {
  const navLinks = portfolioData.navItems.map((item) => ({
    id: item.href.replace("#", ""),
    title: item.name,
    href: item.href,
  }));
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-slate-950/80 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="flex items-center shrink-0 pr-6 gap-3 group transition-all duration-300 ease-in-out"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/logo.png"
            alt="Imeer.ai logo"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
            loading="lazy"
          />
          <div className="hidden xs:flex flex-col leading-none">
            <span className="p-0 text-base sm:text-lg font-extrabold tracking-[0.16em] text-slate-100 drop-shadow-[0_0_8px_rgba(180,210,255,0.25)] transition-colors duration-300 group-hover:text-[#9059fd]">
              IMEER.AI
            </span>
            <span className="p-0 text-[10px] uppercase tracking-[0.50em] text-slate-300 transition-colors duration-300 group-hover:text-[#9059fd]">
              Portfolio
            </span>
          </div>
        </Link>

        <ul className="list-none hidden sm:flex flex-1 justify-end flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-slate-400 hover:text-slate-100 text-[18px] font-medium cursor-pointer transition-all duration-300 ease-in-out rounded-md px-2 py-1 hover:bg-slate-800/40 focus:bg-slate-800/60 focus:outline-none"
              tabIndex={0}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${toggle ? "flex" : "hidden"} flex-col p-6 absolute top-16 right-4 w-[80vw] max-w-xs z-30 rounded-xl border border-slate-700/70 bg-slate-950/95 backdrop-blur transition-all duration-300 ease-in-out shadow-2xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-medium cursor-pointer text-[16px] text-slate-300 transition-colors duration-300 hover:text-white focus:text-white focus:outline-none"
                  onClick={() => {
                    setToggle(false);
                  }}
                  tabIndex={0}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
