import React from "react";

const Form = () => {
    return (
        <div>
            <div className="form-section">
        <div className=" form bg-formlightBackground p-6 rounded-md shadow-xl max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Get in Touch
          </h2>
          <form
            action="https://formspree.io/f/your_form_id" // Replace with your Formspree endpoint
            method="POST"className="space-y-4">
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
                <option value="services">My Services (Basic)</option>
                <option value="services">My Services (Premium)</option>
                <option value="services">My Services (Elite)</option>
                <option value="collaboration">Collaboration</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="promotion">Promotion</option>
                <option value="other">Other</option>
              </select>
            </div>

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

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
        </div>
    )
}

export default Form