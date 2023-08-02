import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateItem } from "../utils/cartSlice";

const ItemQuantity = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleIncreaseQuantity = (item) => {
    // Create a copy of the item object to avoid modifying the original object directly
    let newItem = { ...cartItems[item.id] };
    
    // Update the quantity property in the newItem
    newItem = { ...newItem, quantity: item.quantity + 1 };
    
    // Update the cartItems object with the new item
    const updatedCartItems = { ...cartItems, [item.id]: newItem };
    
    // Dispatch the action with the updated cartItems object
    dispatch(updateItem(updatedCartItems));
  };
  

  const handleDecreaseQuantity = (item) => {
    // Create a copy of the item object to avoid modifying the original object directly
    let updatedCartItem= {...cartItems}

    if(item.quantity>1){
        // Update the quantity property in the newItem
        let newItem = { ...updatedCartItem[item.id] };
        newItem = { ...newItem, quantity: item.quantity - 1 };
        updatedCartItem ={...updatedCartItem, [item.id]:newItem};
    }
    else{
        // Remove the item from cart if quantity is 1
        delete updatedCartItem[item.id];
    }
    
    // Dispatch the action with the updated cartItems object
    dispatch(updateItem(updatedCartItem));
  };

  return (
    <div className="flex border border-gray w-16 justify-around items-center">
      <button
        onClick={() => {
            handleDecreaseQuantity(item);
        }}
        className="text-xl"
      >
        -
      </button>
      <p className="text-green text-sm">{item.quantity}</p>
      <button
        className="hover:scale-110 delay-100 transition-all "
        onClick={() => {
            handleIncreaseQuantity(item);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantity;