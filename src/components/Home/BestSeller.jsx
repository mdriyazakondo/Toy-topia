import { BiStar } from "react-icons/bi";
import { Link } from "react-router";

const BestSeller = ({ seller }) => {
  const {
    sellerName,
    price,
    rating,
    availableQuantity,
    pictureURL,
    subCategory,
    popularity,
  } = seller;
  return (
    <div className="shadow p-4 rounded-md text-center group">
      <div className="flex items-center justify-center px-6 pb-2">
        <img
          className="h-[200px] w-[200px] rounded-full border p-2 border-purple-600 overflow-hidden group-hover:scale-105 transition-all duration-300"
          src={pictureURL}
          alt=""
        />
      </div>
      <div className="mt-3">
        <h4 className="text-xl font-semibold text-purple-700">{sellerName}</h4>
        <div className="flex items-center gap-2 justify-center mt-3">
          <p className="bg-purple-100 rounded-full text-purple-600 py-1 px-4">
            {subCategory}
          </p>
          <p className="bg-purple-100 rounded-full text-purple-600 py-1 px-4">
            {popularity}
          </p>
          <p className="bg-purple-100 rounded-full text-purple-600 py-1 px-4 flex items-center gap-1">
            <BiStar />
            {rating}
          </p>
        </div>
        <div className="mt-3 flex items-center justify-center gap-6">
          <p className=" font-semibold text-purple-600  ">Price: ${price}</p>
          <p className=" font-semibold text-purple-600  ">
            Abailabe : {availableQuantity}
          </p>
        </div>
        <div className="mt-5 ">
          <Link
            to={`/products/${seller.toyId}`}
            className="text-white bg-linear-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 rounded-md py-2 wuful
         cursor-pointer px-8 "
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
