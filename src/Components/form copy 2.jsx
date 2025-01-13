import React, { useState } from 'react';

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://usebasin.com/f/60acbb2940b6', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="form-section">
        <div className="form bg-formlightBackground p-6 rounded-md shadow-xl max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Get in Touch
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
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
                name="email"
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
                name="phone"
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
                name="purpose"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="services-basic">My Services (Basic)</option>
                <option value="services-premium">My Services (Premium)</option>
                <option value="services-elite">My Services (Elite)</option>
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
                name="subject"
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
                name="message"
                rows="4"
                placeholder="Enter your message"
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitSuccess && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {submitError && (
              <p className="text-red-500 text-center">There was an error. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
