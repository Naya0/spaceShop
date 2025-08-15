import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { useAppSelector } from "~/features/hooks";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const cart = useAppSelector((state) => state.cart);

  if (cart) {
    console.log(cart) 
 }

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
      className="h-[60px] w-full flex items-center justify-center z-50 fixed  border-b border-white"
      style={{
        backgroundColor: hasScrolled || !isHomePage ? "white" : "transparent",
      }}
    >
      <div className="w-5/6 flex justify-between items-center max-w-[1600px] m-auto">
        <nav
          className="text-xs hover:text-gray-600 flex-1"
          style={{ color: hasScrolled || !isHomePage ? "#1c1c1c" : "white" }}
        >
          <NavLink to="/" end>
            Home
          </NavLink>
        </nav>
        <div
          className="text-xl uppercase flex justify-center flex-1"
          style={{ color: hasScrolled || !isHomePage ? "#1c1c1c" : "white" }}
        >
          <NavLink to="/" end>
            Stellar Dreams
          </NavLink>
        </div>
        <div
          className="flex justify-end items-center gap-6 flex-1"
          style={{ color: hasScrolled || !isHomePage ? "#1c1c1c" : "white" }}
        >
          <Link to={"cart"}>
          <div className="text-xs hover:text-gray-600 flex items-center gap-1">
            <img
              src="/images/cart.png"
              alt="корзина пользователя"
              className="h-7"
              style={{
                filter: hasScrolled || !isHomePage ? "invert(0)" : "invert(1)",
              }}
            />
            <span className="text-lg"
            style={{ color: hasScrolled || !isHomePage ? "#1c1c1c" : "white" }}>{
              !cart ? '0' : cart.items.length
              }</span>
          </div>
          </Link>
          
            <div className="text-xs hover:text-gray-600 flex items-center gap-1">
              <img
                src="/images/heart.png"
                alt="понравившиеся товары"
                className="h-5"
                style={{
                  filter:
                    hasScrolled || !isHomePage ? "invert(0)" : "invert(1)",
                }}
              />
              <span className="text-lg"
              style={{ color: hasScrolled || !isHomePage ? "#1c1c1c" : "white" }}>0</span>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
