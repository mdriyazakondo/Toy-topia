import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SinglePruduct = ({ product }) => {
  const {
    toyId,
    toyName,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
    popularity,
  } = product;

  return (
    <div
      className="shadow-md rounded-lg p-4 bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="150"
    >
      <div className="overflow-hidden border rounded-md border-gray-200 cursor-pointer group">
        <img
          className="w-full h-[300px] object-cover rounded-md group-hover:scale-110 transition-all duration-700"
          src={pictureURL}
          alt={toyName}
        />
      </div>

      <div className="space-y-2 mt-5">
        <div className="flex items-center justify-start gap-2">
          <p className="text-sm font-semibold text-purple-500 bg-purple-100 rounded-full py-1 px-4 text-center">
            {subCategory}
          </p>
          <p className="text-sm font-semibold text-purple-500 bg-purple-100 rounded-full py-1 px-4 text-center">
            {popularity}
          </p>
        </div>

        <h4 className="text-lg font-semibold text-gray-700">{toyName}</h4>
        <p className="text-gray-500 text-sm">{description.slice(0, 85)}...</p>
        <p className="text-gray-600 font-semibold text-[15px]">
          Available Quantity: {availableQuantity}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Price: ${price}</p>
          <p className="flex items-center gap-1 bg-purple-100 rounded-full py-1 px-2 text-purple-600">
            <FaStar className="text-purple-500" />
            {rating}
          </p>
        </div>

        <Link to={`/products/${toyId}`}>
          <button className="bg-linear-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white cursor-pointer w-full py-2 rounded-md mt-3 transition-all duration-300 ">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePruduct;
