import React from "react";

const HomeBanner = () => {
  const slides = [
    {
      img: "https://ik.imagekit.io/2o23yla4n/assignment-9/creative-play-2.webp?updatedAt=1761152236332",
      title: "Spark Your Child's Creativity",
      subtitle: "Fun and educational toys for endless imagination!",
    },
    {
      img: "https://ik.imagekit.io/2o23yla4n/assignment-9/premium_photo-1702498664869-47f37ff07088.jpeg?updatedAt=1761152236611",
      title: "Play, Learn, and Grow",
      subtitle: "Interactive toys that make learning exciting.",
    },
    {
      img: "https://ik.imagekit.io/2o23yla4n/assignment-9/happy-kids-playing-22334823.webp?updatedAt=1761152236286",
      title: "Happy Moments Every Day",
      subtitle: "Create joyful memories with our fun toys.",
    },
    {
      img: "https://ik.imagekit.io/2o23yla4n/assignment-9/premium_photo-1661558951515-47f7706fd9c6.jpeg?updatedAt=1761152236739",
      title: "Adventure Awaits!",
      subtitle: "Discover toys that spark imagination and fun.",
    },
  ];

  return (
    <div className="carousel w-full  ">
      {slides.map((slide, index) => (
        <div
          id={`slide${index + 1}`}
          key={index}
          className="carousel-item relative w-full h-[600px]"
        >
          <img src={slide.img} className="w-full h-full object-cover" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b  from-black/30 to-black/30 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg ">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-white drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle bg-purple-600 hover:bg-purple-700 text-white border-none"
            >
              ❮
            </a>
            <a
              href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
              className="btn btn-circle bg-purple-600 hover:bg-purple-700 text-white border-none"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBanner;
