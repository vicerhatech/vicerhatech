import React, { useState, useEffect } from "react";

const ReviewCarousel = () => {
  const reviews = [
    {
      name: "Tom Leakar",
      location: "London, UK",
      image: "assets/images/clients/c1.png",
      comment:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      name: "Monirul Islam",
      location: "London, UK",
      image: "assets/images/clients/c2.png",
      comment:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      name: "Shohrab Hossain",
      location: "London, UK",
      image: "assets/images/clients/c3.png",
      comment:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
    {
      name: "John Doe",
      location: "London, UK",
      image: "assets/images/clients/c4.png",
      comment:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="reviews" className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Client Reviews</h2>
        <p className="text-gray-600">What our clients say about us</p>
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
                    className="w-20 h-20 mx-auto rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {review.name}
                </h3>
                <p className="text-gray-500">{review.location}</p>
                <div className="flex justify-center my-4 text-yellow-500">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-600 italic">{`"${review.comment}"`}</p>
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
