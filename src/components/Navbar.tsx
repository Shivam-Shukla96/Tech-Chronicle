"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navlinks } from "@/utils/data/navLinks";
import Image from "next/image";
import hamburger from "../../public/navbar/hamburger.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-white  drop-shadow-2xl sticky md:static top-0 z-10">
      <div className=" mx-auto flex items-center justify-between px-4 py-3  ">
        <Link href="/" className="text-2xl font-bold">
          Tech Chronicle
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navlinks.map((link, index) => (
            <Link href="" key={index} className="hover:text-secondary">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90">
            Sign In
          </button>
          <button className="bg-accent text-white py-2 px-4 rounded hover:bg-opacity-90">
            Subscribe
          </button>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <Image src={hamburger} alt="menu" width={30} height={30} />
        </button>
      </div>

      {isMenuOpen && (
        <div key={1} className="md:hidden bg-primary bg-opacity-40 text-white flex flex-col  space-y-4 px-4 py-3">
          {navlinks.map((link, index) => (
            <div className="flex justify-center ">

            <Link href="" key={index} className="hover:text-secondary ">
              {link.name}
            </Link>
            </div>
          ))}
          <div className="space-y-2">
            <button className="w-full bg-secondary text-white py-2 rounded hover:bg-opacity-90">
              Sign In
            </button>
            <button className="w-full bg-accent text-white py-2 rounded hover:bg-opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
