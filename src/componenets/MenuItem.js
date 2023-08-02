import { AiFillStar } from "react-icons/ai";
import { ITEM_IMG_CDN } from "../config";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  const { id, name, description, price, imageId, ratings } = item;

  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);
  const itemIds = useSelector((state) => state.cart.items);

  const buttonStyle = {
    backgroundColor:
      ratings.aggregatedRating.rating == "--"
        ? "#fff"
        : parseFloat(ratings.aggregatedRating.rating) < 4.0
        ? "#db7c38"
        : "#48c479",
    color: isNaN(ratings.aggregatedRating.rating) ? "#535665" : "#fff",
  };

  

  return (
    <div
      className="flex justify-between basis-[848px] max-h-[180px] p-5 border-b border-gray"
      key={id}
    >
      <div className="flex flex-col basis-[400px]">
        <h3 className="font-bold text-lg w-3/5">{name}</h3>
        <div className="flex items-center">
          <p className="mt-1 text-base font-normal">
            {price > 0 ? "₹ " + item.price / 100 : " "}{" "}
          </p>
          <div className="mx-6">|</div>
          <div
            className="flex justify-center items-center h-5 w-11 gap-1 py-2 px-1 text-base mt-1 rounded-sm"
            style={buttonStyle}
          >
            <AiFillStar />
            <span>{ratings.aggregatedRating.rating}</span>
          </div>
        </div>
        <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-evenly items-center w-[118px] h-[150px]">
        {imageId && (
          <img
            className="w-[118px] h-[96px]"
            src={ITEM_IMG_CDN + imageId}
            alt={item?.name}
          />
        )}
        {itemIds.hasOwnProperty(item.id) ? (
          <Link to={"/cart"}>
            <button
              className="bg-green text-gray py-1 px-2 w-[118px] rounded-sm"
            >
              Go to Cart
            </button>
          </Link>
        ) : (
          <button
            className="bg-yellow text-gray py-1 px-2 w-[118px] rounded-sm"
            onClick={() => dispatch(addItem(item))}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
