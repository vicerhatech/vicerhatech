import React, { useEffect } from "react";
import ReviewCarousel from "../Components/reviews";
import Form from "../Components/form";
import "../Assets/css/home.css";
import webdev from "../Assets/images/web development image.png";
import contentcreator from "../Assets/images/video editing image.jpeg";
import digitalcurator from "../Assets/images/digital curator image.png";

const Home = () => {
  useEffect(() => {
    document.title = "Top-Rated Web Development & Design Services | Custom Websites & Digital Solutions | VicerhaTech";
  }, []);

    return (
    <div>
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
        <h1 className="wid text-3xl  lg:text-4xl font-bold text-gray-800">WHAT I DO</h1>
        <div className="sub-wid">
          <p className="font-roboto italic text-lg lg:text-xl font-bold text-gray-800">
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
      
      <Form />
    </div>
  );
};

export default Home;
