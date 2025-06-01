import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import idris_pic from "../Assets/images/idris.png";
import precious_pic from "../Assets/images/precious.png";
import melodia_pic from "../Assets/images/melodia.png";
import gabriel_pic from "../Assets/images/gabrieludohanie.png";

const ReviewCarousel = () => {
  const reviews = [
    {
      name: "Mr Idris",
      location: "Lagos, Nigeria",
      image:  idris_pic,
      comment:
        "It's been a pleasure collaborating with you. You created a beautiful landing page for me, capturing the essence perfectly.",
      rating: 5,
    },
    {
      name: "Miss Precious",
      location: "London, UK",
      image: precious_pic,
      comment:
        "I couldn't be happier with the website you developed for my small business. Your expertise in front-end design and user experience made my site stand out.",
      rating: 5,
    },
    {
      name: "Melodia",
      location: "Lagos, Nigeria",
      image: melodia_pic,
      comment:
        "Working with you was a fantastic experience! Your dedication to details and commitment to delivering a functional website truly impressed us.",
      rating: 5,
    },
    {
      name: "Mr Gabriel",
      location: "Lagos, Nigeria",
      image: gabriel_pic,
      comment:
        "Highly recommend you for your dedication to accessibility. You took the time to make our website inclusive for all users.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="reviews" className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl  lg:text-4xl font-bold text-gray-800">Client Reviews</h2>
        <p className="text-gray-600  text-lg lg:text-xl ">What our clients say about us</p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-full px-6 py-8 bg-gray-100 shadow-sm rounded-lg text-center"
              >
                <div className="mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 mx-auto rounded-full w-33 h-33 lg:w-35 lg:h-35"
                  />
                </div>
                <h3 className=" text-2xl font-semibold text-gray-800">
                  {review.name}
                </h3>
                <p className=" location text-gray-500 text-2xl">{review.location}</p>
                <div className="flex justify-center my-4 text-yellow-500 text-2xl">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                </div>
                <p className=" comment text-gray-600  text-2xl italic">{`"${review.comment}"`}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex justify-between items-center">
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? reviews.length - 1 : currentIndex - 1
              )
            }
            className="text-gray-800 bg-white shadow-md hover:bg-gray-200 rounded-full p-3"
          >
            &#8592;
          </button>
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === reviews.length - 1 ? 0 : currentIndex + 1
              )
            }
            className="text-gray-800 bg-white shadow-md hover:bg-gray-200 rounded-full p-3"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
