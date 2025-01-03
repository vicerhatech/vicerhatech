import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../Assets/images/Vicerhatech-Logo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 flex flex-wrap justify-between">
        {/* About Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold border-b-2 border-gray-700 pb-2 mb-4">
            About Us
          </h3>
          <img src={logo} alt="VicerhaTech Logo" className="h-12 mb-4" />
          <p>
            At VicerhaTech, we merge innovation with simplicity to deliver
            tech-driven solutions, empowering individuals and businesses
            worldwide. Through insightful blogs, cutting-edge tools, and expert
            guidance, we inspire our audience to thrive in the digital era.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold border-b-2 border-gray-700 pb-2 mb-4">
            Quick Links
          </h3>
          <ul>
            <li className="mb-2">
              <a
                href="/"
                className="text-white hover:text-green-400 transition"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/about"
                className="text-white hover:text-green-400 transition"
              >
                About Me
              </a>
            </li>
            <li className="mb-2">
            <a
                href="/services"
                className="text-white hover:text-green-400 transition"
              >
                Services
              </a>
            </li>
            <li className="mb-2">
            <a
                href="/myportfolio/index.html"
                className="text-white hover:text-green-400 transition"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:text-green-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold border-b-2 border-gray-700 pb-2 mb-4">
            Contact Us
          </h3>
          <ul>
            <li className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <a
                href="https://api.whatsapp.com/send?phone=2348068119486&text=Hi%20VicerhaTech%20...."
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400"
              >
                +234 806 811 9486
              </a>
            </li>
            <li className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:support@vicerhatech.com"
                className="hover:text-green-400"
              >
                support@vicerhatech.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold border-b-2 border-gray-700 pb-2 mb-4">
            Newsletter
          </h3>
          <p className="mb-4">
            Subscribe to our newsletter for the latest updates, tips, and
            exclusive offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-700 focus:outline-none focus:ring focus:ring-green-400 flex-grow"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 text-center">
        <p className="mb-4">Follow us on:</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/vicerhatech"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/vicerhatech"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/vicerhatech"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@vicerhatech"
            target="_blank"
            rel="noreferrer"
            className="text-black text-2xl"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.youtube.com/@vicerhatech"
            target="_blank"
            rel="noreferrer"
            className="text-red-500 text-2xl"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p>&copy; {currentYear} VicerhaTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
