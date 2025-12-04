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
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
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
    features,
    materials,
    dimensions,
    weight,
    ageRecommendation,
    badges,
    safetyInfo,
    manufacturingInfo,
    shippingInfo,
    reviews,
    stockStatus,
  } = singleProduct;

  const handleSubscribe = (e) => {
    e.preventDefault();
    const name = e.target.name.value || "User";
    const email = e.target.email.value;

    if (email) {
      Swal.fire({
        title: "Booked!",
        text: `Thank you ${name} for booking with ${email}`,
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

      {/* MAIN PRODUCT SECTION */}
      <div
        className="max-w-6xl w-full mt-20 flex flex-col md:flex-row gap-10"
        data-aos="fade-up"
      >
        {/* IMAGE */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* PRODUCT DETAILS */}
        <div className="w-full md:w-1/2 space-y-4" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800">{toyName}</h2>

          {/* BADGES */}
          <div className="flex flex-wrap gap-3">
            {badges?.map((badge, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium"
              >
                {badge}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
              Rating: {rating}
            </span>
          </div>

          {/* SELLER INFO */}
          <p className="text-gray-600 font-medium flex items-center gap-2">
            <BiUser className="text-purple-500 w-6 h-6" /> Seller:
            <span className="font-semibold">{sellerName}</span>
          </p>
          <p className="text-gray-600 font-medium flex items-center gap-2">
            <MdEmail className="text-purple-500 w-6 h-6" /> Email:
            <span className="font-semibold">{sellerEmail}</span>
          </p>

          {/* BASIC INFO */}
          <p className="text-gray-700 font-medium">
            Available Quantity:{" "}
            <span className="font-semibold">{availableQuantity}</span>
          </p>
          <p className="text-gray-500 font-medium">{description}</p>
          <p className="text-xl font-semibold text-purple-700 mt-2">
            Price: ${price}
          </p>

          {/* EXTRA INFO */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            {ageRecommendation && (
              <p>
                <b>Age:</b> {ageRecommendation}
              </p>
            )}
            {materials && (
              <p>
                <b>Materials:</b> {materials.join(", ")}
              </p>
            )}
            {features && (
              <p>
                <b>Features:</b> {features.join(", ")}
              </p>
            )}
            {dimensions && (
              <p>
                <b>Dimensions:</b> {dimensions}
              </p>
            )}
            {weight && (
              <p>
                <b>Weight:</b> {weight}
              </p>
            )}
            {manufacturingInfo?.brand && (
              <p>
                <b>Brand:</b> {manufacturingInfo.brand}
              </p>
            )}
            {manufacturingInfo?.madeIn && (
              <p>
                <b>Made In:</b> {manufacturingInfo.madeIn}
              </p>
            )}
            {manufacturingInfo?.warranty && (
              <p>
                <b>Warranty:</b> {manufacturingInfo.warranty}
              </p>
            )}
            {safetyInfo && (
              <p>
                <b>Safety Info:</b> {safetyInfo}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SHIPPING */}
      {shippingInfo && (
        <div className="max-w-4xl w-full bg-white shadow-md p-6 rounded-lg mt-6">
          <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
          <p>
            <b>Free Shipping:</b> {shippingInfo.freeShipping ? "Yes" : "No"}
          </p>
          <p>
            <b>Estimated Delivery:</b> {shippingInfo.estimatedDelivery}
          </p>
        </div>
      )}

      {/* REVIEWS */}
      {reviews && (
        <div className="max-w-4xl w-full bg-white shadow-md p-6 rounded-lg mt-6">
          <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
          {reviews.map((r, index) => (
            <div key={index} className="border-b border-gray-300 py-3">
              <p>
                <b>{r.username}</b> ⭐ {r.rating}
              </p>
              <p className="text-gray-600">{r.comment}</p>
            </div>
          ))}
        </div>
      )}

      {/* BOOKING FORM */}
      <form
        onSubmit={handleSubscribe}
        className="w-full max-w-xl bg-white shadow-lg p-8 rounded-lg flex flex-col gap-5 mt-10"
        data-aos="zoom-in"
      >
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button className="bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700">
          Try Now
        </button>
      </form>
    </div>
  );
};

export default SingleToys;
