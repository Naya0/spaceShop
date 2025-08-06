import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="w-5/6 h-[60px] m-auto flex justify-between items-center bg-white">
      <nav className="text-xs hover:text-gray-600 flex-1">
        <NavLink to="/" end>
          Home
        </NavLink>
        {/* <NavLink to="/trending" end>
          Trending Concerts
        </NavLink> */}
      </nav>
      <div className="text-xl uppercase text-gray-800 flex justify-center flex-1">
        <NavLink to="/" end>
          Stellar Dreams
        </NavLink>
      </div>
      <div className="flex justify-end items-center gap-8 flex-1">
        <div className="text-xs hover:text-gray-600">Корзина</div>
        <div className="text-xs hover:text-gray-600">Понравившееся</div>
      </div>
    </header>
  );
};

export default Header;
