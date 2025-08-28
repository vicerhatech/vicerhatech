import { useEffect } from "react";
import Form from "../Components/form";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    document.title =
      "Contact | VicerhaTech | Professional Web Development | Boost Online Visibility | SEO-Friendly Web Solutions";
  }, []);

  return (
    <div>
      <div className="contact-container bg-formlightBackground">
        <div className="contact-title text-center font-bold text-4xl pt-6 pb-3">
          <h1>Contact Me</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-col w-full lg:w-1/2">
            <div className="flex justify-left space-x-6 pt-7 pb-4">
              <a
                href="https://www.facebook.com/vicerhatech1"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 text-7xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/vicerhatech"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 text-7xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/vicerhatech_"
                target="_blank"
                rel="noreferrer"
                className="text-pink-500 text-7xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@vicerhatech"
                target="_blank"
                rel="noreferrer"
                className="text-black text-7xl"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.youtube.com/@vicerhatech?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
                className="text-red-500 text-7xl"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="p-6 text-2xl">
              <p className="font-medium pb-1">
                Email:
                <span className="font-bold px-16">
                  <a href="mailto:vicerhatech@gmail.com">vicerhatech@gmail.com</a>
                </span>
              </p>
              <p className="font-medium pb-1">
                Email:
                <span className="font-bold px-16">
                  <a href="mailto:victorchideibere@gmail.com">victorchideibere@gmail.com</a>
                </span>
              </p>
              <p className="font-medium pb-1">
                Phone Number:
                <span className="font-bold px-13"> +44 744 147 7620 , +234 806 811 9486</span>
              </p>
              <p className="font-medium">
                WhatsApp:
                <span className="font-bold px-16">
                  <a
                    href="https://api.whatsapp.com/send?phone=2348068119486&text=Hi%20VicerhaTech%20...."
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-20">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
