import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const SingleToys = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  const products = useLoaderData();

  useEffect(() => {
    const product = products.find((p) => p.toyId === Number(id));
    setSingleProduct(product || {});
  }, [id, products]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
    popularity,
  } = singleProduct;

  const handleSubscribe = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    if (email) {
      Swal.fire({
        title: "Booked!",
        text: `Thank you ${name || "user"} for booked with ${email}`,
        icon: "success",
        confirmButtonColor: "#6b21a8",
      });
      e.target.reset();
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Please enter a valid email",
        icon: "error",
        confirmButtonColor: "#6b21a8",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-20 w-full mx-auto py-10">
      <title>Toy-Topia | Toy Details</title>
      <div
        className="max-w-6xl w-full my-20 flex flex-col md:flex-row items-center gap-10 "
        data-aos="fade-up"
      >
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800">{toyName}</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
              {subCategory}
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
              {popularity}
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
              Rating: {rating}
            </span>
          </div>
          <p className="text-gray-600 font-medium gap-2  flex items-center">
            <BiUser className="text-purple-500 w-6 h-6" />
            Seller: <span className="font-semibold ">{sellerName}</span>
          </p>
          <p className="text-gray-600 font-medium  gap-2 flex items-center">
            <MdEmail className="text-purple-500 w-6 h-6" /> Email:{" "}
            <span className="font-semibold">{sellerEmail}</span>
          </p>
          <p className="text-gray-700 font-medium">
            Available Quantity:{" "}
            <span className="font-semibold text-[16px]">
              {" "}
              {availableQuantity}
            </span>
          </p>

          <p className="text-gray-500 font-medium">{description}</p>
          <p className="text-xl font-semibold text-purple-700 mt-2">
            Price: ${price}
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubscribe}
        className="w-full max-w-xl bg-white shadow-lg p-8 rounded-lg flex flex-col gap-5"
        data-aos="zoom-in"
      >
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition cursor-pointer"
        >
          Try Now
        </button>
      </form>
    </div>
  );
};

export default SingleToys;
