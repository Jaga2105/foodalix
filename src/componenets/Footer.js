
import React from "react";
import { useSelector } from "react-redux";

 const Footer = () => {
  const user = useSelector((state) => state.auth.user);
  let name;
  if(user){ 
    if(user.displayName != null) {
      name = user.displayName;
    } else {
      name = user.email;
    }
  }

  return (
    <div className="flex mob:flex-col justify-around w-full shadow h-14 bg-yellow text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40">
      <span className="text-left mob:text-xs mob:text-center">Hey  user....  Thanks for using Food Alix <span className="text-red">&#x2764;</span> </span>
      <span className="text-center mob:text-xs">Developed with <span className="text-red">&#x2764;</span> by Jagannath</span>
    </div>
  )
};
export default Footer