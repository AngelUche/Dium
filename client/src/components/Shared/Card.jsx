import { BsFillBagFill } from "react-icons/bs";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import ProductModal from "./ProductModal";
import { useState } from "react";

const Card = ({ name, price, image, stock, favorite }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-600">${price}</span>
          <span className="text-sm text-gray-500">{stock} items in stock</span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded">
            Add to Cart <BsFillBagFill className="inline-block ml-1" />
          </button>
          {favorite ? (
            <BsFillHeartFill className="text-red-500 text-2xl mt-5xx" />
          ) : (
            <BsFillHeartbreakFill className="text-gray-500 text-2xl mt-5" />
          )}
        </div>
      </div>

      <NavLink to="#" onClick={() => setModalOpen(true)}>
        <div className="bg-gray-500 p-4 mt-2">
          <h4 className="text-xl text-center font-semibold text-white">View</h4>
        </div>
      </NavLink>

      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={{ name, price, image, stock, favorite }}
      />
    </div>
  );
};

export default Card;
