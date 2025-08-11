import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setHasScrolled(scrollTop > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className=" h-[60px] w-full flex items-center justify-center z-50 fixed  border-b border-white"
      style={{ backgroundColor: hasScrolled ? "white" : "transparent"}}
    >
      <div className="w-5/6 flex justify-between items-center">
        <nav className="text-xs hover:text-gray-600 flex-1" style={{ color: hasScrolled ? "#1c1c1c" : "white"}}>
          <NavLink to="/" end>
            Home
          </NavLink>
          {/* <NavLink to="/trending" end>
          Trending Concerts
        </NavLink> */}
        </nav>
        <div className="text-xl uppercase flex justify-center flex-1" style={{ color: hasScrolled ? "#1c1c1c" : "white"}}>
          <NavLink to="/" end>
            Stellar Dreams
          </NavLink>
        </div>
        <div className="flex justify-end items-center gap-8 flex-1" style={{ color: hasScrolled ? "#1c1c1c" : "white"}}>
          <div className="text-xs hover:text-gray-600">Корзина</div>
          <div className="text-xs hover:text-gray-600">Понравившееся</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
