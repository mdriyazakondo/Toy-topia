import React, { useContext, useEffect, useState } from "react";
import SinglePruduct from "../SingleProducts/SinglePruduct";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

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
        setProducts(data);
      });
  }, []);

  const sliceProducts = products.filter(
    (product) => product.popularity === "popular"
  );

  return (
    <div className="mt-20">
      <h1
        className="text-4xl font-bold text-center text-purple-700 mb-6"
        data-aos="fade-down"
      >
        Popular Kids Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {sliceProducts.slice(10, 16).map((product, i) => (
          <div key={product.toyId} data-aos="zoom-in" data-aos-delay={i * 100}>
            <SinglePruduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
