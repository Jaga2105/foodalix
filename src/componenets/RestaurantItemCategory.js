import { useState } from "react";
import MenuItem from "./MenuItem.js";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantItemCategory = ({ itemCategory,index }) => {
//   const [isVisible, setIsVisible] = useState(true);
  const [openedAccordionIndex, setOpenedAccordionIndex] = useState(0);

  const toggleView = (idx) => {
    setOpenedAccordionIndex((prevIndex) => (prevIndex === idx ? -1 : idx));
    // setIsVisible(!isVisible);
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg cursor-pointer" onClick={()=>toggleView(index)}>
          {itemCategory.title} ({itemCategory.itemCards.length})
        </h3>
        {(openedAccordionIndex ===index) ? (
          <SlArrowUp onClick={()=>toggleView(-1)} className="cursor-pointer"/>
        ) : (
          <SlArrowDown onClick={()=>toggleView(index)} className="cursor-pointer" />
        )}
      </div>
      {openedAccordionIndex ===index && (
        <div className="flex flex-col justify-evenly">
          {itemCategory.itemCards.map((item) => (
            <MenuItem key={item.id} item={item.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCategory