import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

import Icon from "../Icon/Icon";
import { totalQuantity } from "~/utils/common";

import { useAppSelector } from "~/features/hooks";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const currentUser = useAppSelector((state) => state.user.currentUser);

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

  const cart = useAppSelector((state) => state.cart);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <header
        className="h-[60px] w-full flex items-center justify-center z-50 fixed border-b border-white"
        style={{
          backgroundColor: hasScrolled || !isHomePage ? "white" : "transparent",
        }}
      >
        <div className="w-5/6 flex justify-between items-center max-w-[1600px] m-auto">
          <nav
            className="text-xs hover:text-gray-600 flex-1"
            style={{ color: hasScrolled || !isHomePage ? "#1c1c1c" : "white" }}
          >
            <NavLink to="/catalog" end>
              Catalog
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
            <Link to="cart">
              <div className="text-xs hover:text-gray-600 flex items-center gap-1">
                <Icon
                  name="cart"
                  fill={hasScrolled || !isHomePage ? "#1d1d1d" : "white"}
                />
                <span
                  className="text-lg"
                  style={{
                    color: hasScrolled || !isHomePage ? "#1c1c1c" : "white",
                  }}
                >
                  {totalQuantity(cart.items.map((item) => item.quantity))}
                </span>
              </div>
            </Link>

            <div className="text-xs hover:text-gray-600 flex items-center gap-1">
              <Icon
                name="heart"
                fill={hasScrolled || !isHomePage ? "#1d1d1d" : "white"}
              />
              <span
                className="text-lg"
                style={{
                  color: hasScrolled || !isHomePage ? "#1c1c1c" : "white",
                }}
              >
                0
              </span>
            </div>

            <Link to="signup" className="text-xs hover:text-gray-600">
              SignUp
            </Link>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header
        className="h-[60px] w-full flex items-center justify-center z-50 fixed border-b border-white"
        style={{
          backgroundColor: hasScrolled || !isHomePage ? "white" : "transparent",
        }}
      >
        <div className="w-5/6 flex justify-between items-center max-w-[1600px] m-auto">
          <nav
            className="text-xs hover:text-gray-600 flex-1"
            style={{ color: hasScrolled || !isHomePage ? "#1c1c1c" : "white" }}
          >
            <NavLink to="/catalog" end>
              Catalog
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
            <Link to="cart">
              <div className="text-xs hover:text-gray-600 flex items-center gap-1">
                <Icon
                  name="cart"
                  fill={hasScrolled || !isHomePage ? "#1d1d1d" : "white"}
                />
                <span
                  className="text-lg"
                  style={{
                    color: hasScrolled || !isHomePage ? "#1c1c1c" : "white",
                  }}
                >
                  {totalQuantity(cart.items.map((item) => item.quantity))}
                </span>
              </div>
            </Link>

            <div className="text-xs hover:text-gray-600 flex items-center gap-1">
              <Icon
                name="heart"
                fill={hasScrolled || !isHomePage ? "#1d1d1d" : "white"}
              />
              <span
                className="text-lg"
                style={{
                  color: hasScrolled || !isHomePage ? "#1c1c1c" : "white",
                }}
              >
                0
              </span>
            </div>

            {currentUser ? (
              <div className="flex gap-2 items-center">
                <span
                  style={{
                    color: hasScrolled || !isHomePage ? "#1c1c1c" : "white",
                  }}
                >
                  {currentUser?.name || currentUser.name || "User"}
                </span>
                <img
                  className="w-[40px] h-[40px] object-cover rounded-full"
                  src={
                    currentUser?.avatar ||
                    currentUser.avatar ||
                    "/images/default-avatar.png"
                  }
                  alt="User avatar"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/default-avatar.png";
                  }}
                />
              </div>
            ) : (
              <Link to="signup" className="text-xs hover:text-gray-600">
                SignUp
              </Link>
            )}
          </div>
        </div>
      </header>
    );
  }
};
export default Header;
