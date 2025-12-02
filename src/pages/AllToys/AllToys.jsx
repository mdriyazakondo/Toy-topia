import React, { useContext, useEffect, useState } from "react";
import SinglePruduct from "../../components/SingleProducts/SinglePruduct";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../context/AuthContext";
import Aos from "aos";
import "aos/dist/aos.css";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const { loading, setLoading } = useContext(AuthContext);
  console.log(sortValue);
  useEffect(() => {
    Aos.init({
      duration: 400,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [setLoading]);

  if (loading) {
    return <Loading />;
  }

  const priceSort = [...products].sort((a, b) => {
    if (sortValue === "normal") {
      return products;
    }
    if (sortValue === "low-high") {
      return a.price - b.price;
    }
    if (sortValue === "high-low") {
      return b.price - a.price;
    }
  });

  return (
    <div className=" px-6 md:px-16 lg:px-24 xl:px-32   mt-24 mb-12">
      <title>Toy-Topia | All Toys</title>
      <h2
        className="text-2xl font-semibold text-center mb-8 text-purple-600"
        data-aos="fade-down"
      >
        All Toys ({products.length})
      </h2>
      <div className="w-40 mb-6">
        <select
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 
               text-gray-700 shadow-sm cursor-pointer 
               focus:outline-none focus:ring-2 focus:ring-purple-400 
               focus:border-purple-400 transition-all"
        >
          <option value="" disabled>
            Price Sorting
          </option>
          <option value="normal">Normal </option>
          <option value="low-high">Low → High </option>
          <option value="high-low">High → Low </option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {priceSort.map((product, i) => (
          <div key={product.toyId} data-aos="zoom-in" data-aos-delay={i * 100}>
            <SinglePruduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
