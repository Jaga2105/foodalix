import React, { useEffect, useState } from 'react'
import logo from "../assets/images/FoodAlix.jpeg"
import {AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai"

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
    //   <Link to="/">
        // {" "}
        <img className="logo ml-2.5 w-[70px]" alt={"logo"} src={logo} />
    //   {/* </Link> */}
    );
  };
  export const Intro = () => {
    // const { user } = UserAuth();
    // let name;
    // if (user) {
    //   if (user.displayName != null) {
    //     name = user.displayName;
    //   } else {
    //     name = user.email;
    //   }
    // }
  
    return (
      <div className="flex justify-center items-center">
        <span className="py-2.5 px-1 mt-2.5 mr-1 font-bold text-green">
          {" "}
          {/* {user ? `Hello ${name} ` : "Please Login"} !!! */}
          Hello Jagannath
        </span>
      </div>
    );
  };

  // export const NavComponent = () => {
    // const { user, logOut } = UserAuth();
    // const navigate = useNavigate();
    // console.log(user);
    // const isOnline = useOnline();
    // const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
    // console.log("Header:", totalItemsCount);
    // const [menuActive, setMenuActive] = useState(false);
  
    // const closeMenu = () => {
    //   const menu = document.querySelector(".menu-content-container");
    //   menu.classList.remove("active");
    //   menu.classList.add("false");
      // setMenuActive(!menuActive);
    // };/
  
    // const handleSignOut = async () => {
    //   try {
    //     await logOut();
    //     navigate("/");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  
    // const handleSignIn = () => {
    //   navigate("/signin");
    // };
  
  //   return (
  //     <div className="flex items-center justify-between">
  //       <div
  //         className={`menu-content-container flex items-center pr-7  ${
  //           menuActive && "active"
  //         }`}
  //       >
  //         <ul
  //           className={`h-full lg:flex xl:flex md:flex items-center pr-5 ${
  //             !menuActive && "hidden"
  //           }  ${menuActive && "flex flex-col flex-start"}`}
  //         >
  //           {navLinks.map((link, index) => (
  //             <li key={index} className="p-2.5">
  //               {/* <Link to={link.path}> */}
  //                 <button className="nav--btn">{link.title}</button>
  //               {/* </Link> */}
  //             </li>
  //           ))}
  //           <li className="p-2.5">
  //             {/* <Link to="/cart"> */}
  //               {" "}
  //               <button className="nav--btn">
  //                 {" "}
  //                 Cart{" "}
  //                 <span className="text-orange font-bold pl-1">
  //                   {/* {totalItemsCount} */}
  //                   1
  //                 </span>{" "}
  //               </button>{" "}
  //             {/* </Link> */}
  //           </li>
  
            // <li className="p-2.5">
            //   <button
            //     className="nav--btn"
            //     // onClick={() => {
            //     //   user ? handleSignOut() : handleSignIn();
            //     // }}
            //   >
            //     {" "}
            //     {/* {user ? "Logout  " : "Login  "} */}
            //     {/* <span className={isOnline ? "text-green" : "text-red"}>●</span> */}
            //     Login
            //   </button>
            // </li>
  //         </ul>
  //       </div>
  //       <AiOutlineMenu
  //         className="lg:hidden xl:hidden md:hidden flex w-[65px] text-base text-blue-dark cursor-pointer "
  //         onClick={() => {
  //           console.log("icon");
  //           closeMenu();
  //           setMenuActive(!menuActive);
  //         }}
  //       />
  //     </div>
  //   );
  // };

  export const NavComponent = () =>{
    const [showMenu, setShowMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    useEffect(() => {
      const handleResize = () => {
        setShowMenu(window.innerWidth <= 767);
      };
    
      handleResize();
      setShowSidebar(false) 
    
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [showMenu]);
    return (
      <div className='flex items-center justify-between'>
      
        {!showMenu && (
          // <div>
          <ul className='flex mt-30'>
          {navLinks
          .map((link)=>(
            <li key={link.title} className='text-black pr-7'>
              <button className="nav--btn">{link.title}</button>
              </li>
          ))}
          <li className='relative  mr-7'>
          <AiOutlineShoppingCart size={"1.5rem"} className='cursor-pointer text-yellow mt-1'/>
          <span className='absolute -top-2 -right-2 bg-orange-300 px-[5px] py-[2px] text-center text-xs  rounded-full text-black hover:bg-orange-400'>10</span>
          </li>
          <li className='mr-7'>
              <button
                className="nav--btn"
                // onClick={() => {
                //   user ? handleSignOut() : handleSignIn();
                // }}
              >
                {/* {" "} */}
                {/* {user ? "Logout  " : "Login  "} */}
                {/* <span className={isOnline ? "text-green" : "text-red"}>●</span> */}
                Login
              </button>
            </li>
          </ul>)
        }
      {showMenu &&
        <AiOutlineMenu className='w-[65px] cursor-pointer' onClick={()=>setShowSidebar(!showSidebar)}/>}
      {showSidebar && (
        <ul className='left-0 w-[300px] h-[calc(100%-65px)] bg-white fixed top-[70px] flex-col justify-between py-0 pl-[30px] mt-6'>
        {navLinks
        .map((link)=>(
          <li key={link.title} className='text-black pr-7 mb-6'>
            <button className="nav--btn">{link.title}</button>
            </li>
        ))}
        <li className='relative pl-5  mr-7 mb-6'>
        <AiOutlineShoppingCart size={"1.5rem"} className='cursor-pointer text-yellow mt-1'/>
        <span className='absolute -top-2 left-8 bg-orange-300 px-[5px] py-[2px] text-center text-xs  rounded-full text-black hover:bg-orange-400'>10</span>
        </li>
        <li className='mr-7'>
            <button
              className="nav--btn"
              // onClick={() => {
              //   user ? handleSignOut() : handleSignIn();
              // }}
            >
              {/* {" "} */}
              {/* {user ? "Logout  " : "Login  "} */}
              {/* <span className={isOnline ? "text-green" : "text-red"}>●</span> */}
              Login
            </button>
          </li>
        </ul>)
      }
      </div>
    );
    }
const Header = () => {
  // const [showMenu, setShowMenu] = useState(false);
  // const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex justify-between bg-white shadow fixed top-0 left-0 w-full h-[70px] z-50">
      <Title />
      <Intro />
      <NavComponent 
      // showMenu={showMenu} setShowMenu={setShowMenu} showSidebar={showSidebar} setShowSidebar={setShowSidebar}
      />
    </div>
  )
}

export default Header