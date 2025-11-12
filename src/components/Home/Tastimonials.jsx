import React, { useState, useRef } from "react";

const Testimonials = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });

  const cardRefs = useRef([]);

  const testimonials = [
    {
      name: "Mia Johnson",
      title: "Parent of Lily (Age 5)",
      message:
        "My daughter absolutely loves her new teddy bear! The colors are so cute, and it feels  soft. She sleeps with it every night!",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "David Carter",
      title: "Father of Noah (Age 7)",
      message:
        "These toy cars are amazing! My son  hours playing and creating his own  racetrack. Great quality and safe materials!",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      name: "Sophia Brown",
      title: "Mom of Emma (Age 4)",
      message:
        "The wooden puzzle set was perfect for learning shapes and colors. It’s fun and educational — we love ToyTopia toys!",
      image:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const handleMouseMove = (e, index) => {
    const bounds = cardRefs.current[index].getBoundingClientRect();
    setTooltip({
      visible: true,
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
      text: testimonials[index].name,
    });
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="w-full   mt-16">
      <h1 className="text-center text-4xl font-extrabold text-purple-600 mb-2 drop-shadow-sm">
        What Parents Say 
      </h1>
      <p className="text-center text-purple-600 max-w-2xl mx-auto mb-10 text-lg">
        Happy families around the world love our fun and safe toy collections!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            className="relative border-4 border-white/40 rounded-2xl overflow-hidden  bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {tooltip.visible && tooltip.text === testimonial.name && (
              <span
                className="absolute px-3 py-1 text-sm rounded-full bg-sky-500 text-white pointer-events-none transition-all duration-300 shadow-md"
                style={{
                  top: tooltip.y + 10,
                  left: tooltip.x + 10,
                }}
              >
                {tooltip.text}
              </span>
            )}

            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-indigo-600">
                  “Lovely Experience!”
                </h3>
                <p className="my-4 text-sm text-gray-700 italic leading-relaxed">
                  {testimonial.message}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="rounded-full w-12 h-12 object-cover ring-4 ring-purple-200"
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                />
                <div className="ml-3 text-left">
                  <p className="font-bold text-purple-700">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
