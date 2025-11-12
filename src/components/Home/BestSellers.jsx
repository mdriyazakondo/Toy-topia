import React, { useEffect, useState } from "react";
import BestSeller from "./BestSeller";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSellers = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const bestData = data.filter((toy) => toy.price > 70);
        setBestSeller(bestData);
      });
  }, []);

  return (
    <div className="my-12 ">
      <h2
        className="text-4xl font-bold text-center text-purple-700 mb-6"
        data-aos="fade-up"
      >
        Top Rate Toys
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 ">
        {bestSeller.slice(0, 3).map((toy, i) => (
          <div key={toy.toyId} data-aos="zoom-in" data-aos-delay={i * 100}>
            <BestSeller seller={toy} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
