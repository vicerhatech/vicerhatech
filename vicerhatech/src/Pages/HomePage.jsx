import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import ReviewCarousel from "../Components/reviews";
import { Helmet } from "react-helmet";
import "../Assets/css/home.css";
import webdev from "../Assets/images/web development image.png";
import contentcreator from "../Assets/images/video editing image.jpeg";
import digitalcurator from "../Assets/images/digital curator image.png";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          Best Natural & Organic Beauty Products | Nigerian Skincare Solutions -
          Sapphire Skincare
        </title>
      </Helmet>

      <Navbar />

      <div className="intro-section">
        <p className="home-title">Welcome to my Digital Space</p>
        <p className="home-text">
          In a world driven by technology and creativity, I thrive on solving
          problems,
        </p>
        <p className="home-text2">telling stories, and building connections.</p>
        <p className="home-text3">Hi 🙂!!!</p>
        <p className="home-text4">
          Welcome to Vicerha <span style={{ color: "blue" }}>Tech</span>
        </p>
      </div>

      <div className="body-section">
        <h1 className="wid">WHAT I DO</h1>
        <div className="sub-wid">
          <p className="font-roboto italic">
            I offer services that enhance your online presence, boost
            engagement, and drive business growth.
          </p>
        </div>
        <div className="wid-cards">
          <div className="card1 shadow-lg">
            <img
              src={webdev}
              alt="web-development"
              style={{
                width: "350px",
                height: "300px",
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
              }}
            />
            <div className="card-text">Web Design & Development</div>
          </div>

          <div className="card1 shadow-lg">
            <img
              src={contentcreator}
              alt="content-creator"
              style={{
                width: "350px",
                height: "300px",
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
              }}
            />
            <div className="card-text">Content Creation</div>
          </div>

          <div className="card1 shadow-lg">
            <img
              src={digitalcurator}
              alt="digital-curator"
              style={{
                width: "350px",
                height: "300px",
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
              }}
            />
            <div className="card-text">Digital Curation</div>
          </div>
        </div>
        
      <ReviewCarousel />

        <div className="note">
          <p className="note-text">
            For inquiries regarding my services, collaborations, promotions, or
            sponsorships, please feel free to reach out via my social media
            channels listed on the <span>
            <a style={{ textDecoration: "underline" }} href="/contact">
               Contact Page
            </a> </span>
            , or complete the form below. I will respond promptly.
          </p>
        </div>
      </div>

      <div className="form-section">
        <div className=" form bg-formlightBackground p-6 rounded-md shadow-xl max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Get in Touch
          </h2>
          <form className="space-y-4">
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone Number (Optional) */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Purpose Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="purpose" className="text-sm font-medium">
                Purpose of Contact
              </label>
              <select
                id="purpose"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="services">My Services</option>
                <option value="collaboration">Collaboration</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="promotion">Promotion</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter your subject"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Enter your message"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
