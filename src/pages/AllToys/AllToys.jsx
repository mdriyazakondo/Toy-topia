import React, { useContext, useEffect, useState } from "react";
import SinglePruduct from "../../components/SingleProducts/SinglePruduct";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../context/AuthContext";
import Aos from "aos";
import "aos/dist/aos.css";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);

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

  return (
    <div className=" px-6 md:px-16 lg:px-24 xl:px-32   mt-24 mb-12">
      <title>Toy-Topia | All Toys</title>
      <h2
        className="text-2xl font-semibold text-center mb-8"
        data-aos="fade-down"
      >
        All Toys
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {products.map((product, i) => (
          <div key={product.toyId} data-aos="zoom-in" data-aos-delay={i * 100}>
            <SinglePruduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
