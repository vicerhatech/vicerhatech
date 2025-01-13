import React, { useState, useEffect} from "react";
import Form from "../Components/form2";



const Service = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleSelectedService = (Service) => {
    setSelectedService(Service);
    
  };

   useEffect(() => {
      document.title = "Professional Web Development, Responsive Design, & SEO Services | Empowering Brands Online | VicerhaTech";
    }, []); 

  return (
    <div>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            My Services
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Tailored solutions to meet your digital needs with expertise and
            precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Web Development
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Custom websites using React, WordPress, and more.</li>
                <li>Responsive and SEO-optimized designs.</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Content Creation
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>YouTube content strategy and planning.</li>
                <li>Social media management and graphic design.</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Digital Curation
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Curated resource libraries for tech startups.</li>
                <li>In-depth research and presentation creation.</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Consultations
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>1:1 coaching for personal or project success.</li>
                <li>Detailed project consultations tailored to your needs.</li>
              </ul>
            </div>
          </div>

          <section className="mt-12">
            <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">
              Service Tiers
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="bg-white rounded-lg shadow-lg w-full md:w-1/3">
                <div className="bg-deepBlue text-white text-center py-4 rounded-t-lg">
                  <h4 className="text-xl font-semibold">Basic</h4>
                </div>
                <div className="p-6">
                  <ul className="list-disc list-inside text-gray-700 mb-6 text-lg">
                    <li>Basic website setup</li>
                    <li>Responsive design</li>
                    <li>SEO optimization</li>
                  </ul>
                  <div className="text-center">
                    <button
                      className="bg-deepBlue text-white px-4 py-2 rounded hover:bg-purple-700"
                      onClick={() =>
                        handleSelectedService("My Services (Basic)")
                      }
                    >
                      Choose Basic
                    </button>
                    <h3 className="pt-3 md:hidden lg:hidden xl:hidden">Please click and scroll down to complete the form.</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg w-full md:w-1/3">
                <div className="bg-deepBlue text-white text-center py-4 rounded-t-lg">
                  <h4 className="text-xl font-semibold">Premium</h4>
                </div>
                <div className="p-6">
                  <ul className="list-disc list-inside text-gray-700 mb-6 text-lg">
                    <li>Custom website development</li>
                    <li>Advanced SEO strategies</li>
                    <li>Content creation and management</li>
                    <li>Social media integration</li>
                  </ul>
                  <div className="text-center">
                    <button
                      className="bg-deepBlue text-white px-4 py-2 rounded hover:bg-purple-700"
                      onClick={() =>
                        handleSelectedService("My Services (Premium)")
                      }
                    >
                      Choose Premium
                    </button>
                    <h3 className="pt-3 md:hidden lg:hidden xl:hidden">Please click and scroll down to complete the form.</h3>
                    </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg w-full md:w-1/3">
                <div className="bg-deepBlue text-white text-center py-4 rounded-t-lg">
                  <h4 className="text-xl font-semibold">Elite</h4>
                </div>
                <div className="p-6">
                  <ul className="list-disc list-inside text-gray-700 mb-6 text-lg">
                    <li>Comprehensive web development</li>
                    <li>Full-scale SEO and marketing</li>
                    <li>Dedicated content strategy</li>
                    <li>1:1 coaching and consultations</li>
                    <li>Ongoing support and maintenance</li>
                  </ul>
                  <div className="text-center">
                    <button
                      className="bg-deepBlue text-white px-4 py-2 rounded hover:bg-purple-700"
                      onClick={() =>
                        handleSelectedService("My Services (Elite)")
                      }
                    >
                      Choose Elite
                    </button>
                    <h3 className="pt-3 md:hidden lg:hidden xl:hidden">Please click and scroll down to complete the form.</h3>
                    </div>
                </div>
              </div>
            </div>
          </section>

          {selectedService && (
            <div className="mt-12">
              <Form selectedService={selectedService} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
