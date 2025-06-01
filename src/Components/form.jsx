import { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formMessage, setFormMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setFormMessage("Sending...");
    setMessageColor("#333");

    emailjs
      .sendForm( 
        "service_8r9s3la",         
        "template_59h4tff",        
        e.target,
        "azBj95q6huApClb-A"       
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageColor("green");
          setFormMessage("Your message has been sent successfully. We'll get back to you shortly.");
        },
        (error) => {
          console.log(error.text);
          setMessageColor("red");
          setFormMessage("Failed to send the message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <div className="form-section">
        <div className="form bg-formlightBackground p-6 rounded-md shadow-xl max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Get in Touch</h2>
          <form className="space-y-4 text-lg" onSubmit={sendEmail}>
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your full name"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-lg font-medium">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="purpose" className="text-lg font-medium">
                Purpose of Contact
              </label>
              <select
                name="purpose"
                id="purpose"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="My Services (Basic)">My Services (Basic)</option>
                <option value="My Services (Premium)">My Services (Premium)</option>
                <option value="My Services (Elite)">My Services (Elite)</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Sponsorship">Sponsorship</option>
                <option value="Promotion">Promotion</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-lg font-medium">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Enter your message"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>

          <div style={{ marginTop: "10px", fontWeight: "bold", color: messageColor }}>
        {formMessage}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
