import { useState } from "react";
import logo from "../Assets/images/Vicerhatech-Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="text-white shadow-md"
      style={{ backgroundColor: "#070b7d" }}
    >
      <nav className="container flex items-center justify-between px-2 py-2 mx-auto">
        <a href="/"> <img src={logo} alt="" style={{ width: "180px", height: "60px" }} /> </a>

        <ul className="hidden space-x-8 text-lg font-medium lg:flex">
          <li>
            <a href="/" className="hover:text-indigo-300 ">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-indigo-300">
              About Me
            </a>
          </li>
          <li>
          <a href="/services" className="hover:text-indigo-300">
              Services
            </a>
          </li>
          <li>
          <a href="/myportfolio/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-indigo-300">
              Contact
            </a>
          </li>
        </ul>

        <button
          className="text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"
            />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#070b7d]">
          <ul className="flex flex-col items-center py-4 space-y-4 md:text-2xl">
            <li>
              <a href="/" className="navs-links hover:text-indigo-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="navs-links hover:text-indigo-300">
                About Me
              </a>
            </li>
            <li>
              <a href="/services" className="navs-links hover:text-indigo-300">
                Services
              </a>
            </li>
            <li>
            <a href="/myportfolio/index.html" target="_blank" rel="noopener noreferrer" className="navs-links hover:text-indigo-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="navs-links hover:text-indigo-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
