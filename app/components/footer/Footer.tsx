import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="h-16 bg-gray-100 w-full mt-10">
      <div className="w-5/6 m-auto flex justify-between py-4">
        <Link to="/">Stellar Dreams</Link>
        <div>
          <Link to="/catalog">Catalog</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
