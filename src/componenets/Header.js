import React, { useEffect, useState } from "react";
import logo from "../assets/images/FoodAlix.jpeg";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthState, logOut } from "../utils/authSlice";
import useOnline from "../utils/useOnline";



const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Help",
    path: "/help",
  },
];

export const Title = () => {
  return (
      <Link to="/">
    {" "}
    <img className="logo ml-2.5 w-[70px] h-12 my-auto" alt={"logo"} src={logo} />
       </Link>
  );
};
export const Intro = () => {
  const user = useSelector((state) => state.auth.user);
  let name;
  if (user) {
    if (user.displayName != null) {
      name = user.displayName;
    } else {
      name = user.email;
    }
  }

  return (
    <div className="flex justify-center items-center">
      <span className="py-2.5 px-1 mt-2.5 mr-1 font-bold text-green">
        {" "}
        {user ? `Hello ${name} ` : "Please Login"} !!!
      </span>
    </div>
  );
};


export const NavComponent = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const isOnline = useOnline();
  const totalCartItems = useSelector((state) => state.cart.totalItemsCount);
  const user = useSelector((state) => state.auth.user);

  const handleSignOut = async () => {
  try {
    await dispatch(logOut());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

const handleSignIn = () => {
  navigate("/signin");
};

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth <= 767);
    };

    handleResize();
    setShowSidebar(false);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showMenu]);
  return (
    <div className="flex items-center justify-between">
      {!showMenu && (
        // <div>
        <ul className="flex mt-30">
          {navLinks.map((link) => (
            <li key={link.title} className="text-black pr-7">
              <Link to={link.path}>
                <button className="nav--btn">{link.title}</button>
              </Link>
            </li>
          ))}
          <li className="relative  mr-7">
            <Link to={"/cart"}>
              <AiOutlineShoppingCart
                size={"1.5rem"}
                className="cursor-pointer text-yellow mt-1"
              />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-400 px-[5px] py-[2px] text-center text-xs  rounded-full text-white hover:bg-rose-600">
                  {totalCartItems}
                </span>
              )}
            </Link>
          </li>
          <li className="mr-7">
            <button
              className="nav--btn"
              onClick={() => {
                user ? handleSignOut() : handleSignIn();
              }}
            >
               {" "} 
               {user ? "Logout  " : "Login  "} 
               <span className={isOnline ? "text-green" : "text-red"}>●</span> 
            </button>
          </li>
        </ul>
      )}
      {showMenu && (
        <AiOutlineMenu
          className="w-[65px] cursor-pointer"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      )}
      {showSidebar && (
        <ul className="left-0 w-[300px] h-[calc(100%-65px)] bg-white fixed top-[70px] flex-col justify-between py-0 pl-[30px]">
          {navLinks.map((link) => (
            <li key={link.title} className="text-black pr-7 mb-6">
              <Link to={link.path}>
                <button className="nav--btn">{link.title}</button>
              </Link>
            </li>
          ))}
          <li className="relative pl-5  mr-7 mb-6">
            <Link to={"/cart"}>
              <AiOutlineShoppingCart
                size={"1.5rem"}
                className="cursor-pointer text-yellow mt-1"
              />
              {totalCartItems > 0 && (
              <span className="absolute -top-2 left-8 bg-orange-300 px-[5px] py-[2px] text-center text-xs  rounded-full text-black hover:bg-orange-400">
                {totalCartItems}
              </span>)}
            </Link>
          </li>
          <li className="mr-7">
            <button
              className="nav--btn"
              onClick={() => {
                user ? handleSignOut() : handleSignIn();
              }}
            >
               {" "} 
               {user ? "Logout  " : "Login  "} 
               <span className={isOnline ? "text-green" : "text-red"}>●</span> 
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  
  return (
    <div className="flex justify-between bg-white shadow fixed top-0 left-0 w-full h-[70px] z-50">
      <Title />
      <Intro />
      <NavComponent
      />
    </div>
  );
};

export default Header;
