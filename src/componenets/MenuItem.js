import { AiFillStar } from "react-icons/ai";
import { ITEM_IMG_CDN } from "../config";
// import { addItem, removeItem } from "../utils/cartSlice";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const MenuItem = ({ item }) => {
  const { id, name, description, price, imageId, ratings } = item;

  //   const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);

  const buttonStyle = {
    backgroundColor: ratings.aggregatedRating.rating == "--" ? "#fff" : parseFloat(ratings.aggregatedRating.rating) < 4.0 ? "#db7c38":"#48c479",
    color : isNaN(ratings.aggregatedRating.rating)? "#535665" : "#fff"
  }

  //   const handleAddItem = (item) => {
  //     dispatch(addItem(item)); // redux send action object to store {payload : item}
  //     setItemCount(itemCount + 1);
  //   };

  //   const handleRemoveItem = (id) => {
  //     let updatedCount;
  //     dispatch(removeItem(id));
  //     updatedCount = itemCount > 0 ? itemCount - 1 : 0;
  //     setItemCount(updatedCount);
  //   };

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
          <div className="flex justify-center items-center h-5 w-11 gap-1 py-2 px-1 text-base mt-1 rounded-sm" style={buttonStyle}>
            <AiFillStar /><span>{ratings.aggregatedRating.rating}</span>
          </div>
        </div>
        <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
        {imageId && (
          <img
            className="w-[118px] h-[96px]"
            src={ITEM_IMG_CDN + imageId}
            alt={item?.name}
          />
        )}
        <div className=" flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ">
          <button
            className="text-xl text-gray-count font-semibold"
            // onClick={() => handleRemoveItem(id)}
          >
            {" "}
            -{" "}
          </button>
          <span className="text-base text-green"> {itemCount} </span>
          <button
            className="text-green text-xl"
            // onClick={() => handleAddItem(item)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
