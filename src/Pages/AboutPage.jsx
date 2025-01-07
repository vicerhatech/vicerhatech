import React from "react";
import profilepic from "../Assets/images/profilepic.png";

const About = () => {
  return (
    <div className="bg-formlightBackground py-10 px-5">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-10">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          About Me
        </h1>

        <section>
          <img src={profilepic} alt="" width={"350px"} className="py-4" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-deepBlue mb-4">My Journey</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            My name is Victor Chidiebere Erhabor, and I’m a passionate
            <strong> Digital Curator, Web Developer, </strong>
            and <strong>Content Creator</strong>. I started my journey with a
            deep interest in technology, design, and storytelling. Over the
            years, I have transformed this passion into a fulfilling career,
            helping businesses and individuals bring their visions to life
            through exceptional websites, curated content, and innovative
            digital solutions. From coding dynamic applications to crafting
            engaging YouTube videos, I have developed a versatile skill set that
            allows me to adapt to any creative or technical challenge. In a
            world driven by technology and creativity, I thrive on solving
            problems, telling stories, and building meaningful connections. I am
            dedicated to bringing ideas to life through creativity, innovation,
            and precision. Whether it’s crafting stunning websites, curating
            impactful digital resources, or creating engaging content, my goal
            is to deliver exceptional experiences that inspire and empower.
            Let’s embark on this journey together, explore my portfolio,
            discover unique insights, and let’s create something extraordinary!
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-deepBlue mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg">
            <li className="text-gray-700">
              <strong>Web Development:</strong> Html, Css, Bootstrap, Javascript, WordPress, React,
              Tailwind CSS, Express.js, MongoDB, Node js, Git and GitHub, Shopify, PHP, Postman (API testing), Magento.
            </li>
            <li className="text-gray-700">
              <strong>Content Creation:</strong> Video editing, Scriptwriting,
              Digital strategy
            </li>
            <li className="text-gray-700">
              <strong>Digital Curation:</strong> Research, tool collection, and
              presentation design
            </li>
            <li className="text-gray-700">
              <strong>Specialization:</strong> Crafting user-centric websites and applications
              and digital content that combine functionality with aesthetic
              appeal, ensuring a seamless experience for users.
            </li>

            <li className="text-gray-700">
              <strong>Soft Skills:</strong> Creativity, Problem-solving,
              Teamwork
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-deepBlue mb-4">Core Values</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            I am committed to innovation, creativity, and delivering
            high-quality results. I believe in continuous learning,
            collaboration, and making a positive impact through my work. My
            approach is driven by curiosity, determination, and a desire to
            empower others through technology and storytelling.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-deepBlue mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Outside of work, I enjoy singing, recording music and staying updated
            with the latest tech trends. I’m also passionate about creating
            meaningful content that inspires and informs others.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
