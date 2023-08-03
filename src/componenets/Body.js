import { RestaurantCard } from "./RestaurantCard"; /* Import using Named Import */
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"; /* Shimmer component to display before page load */
import { GET_RESTAURANTS_LIST } from "../config"; /* url to get Restaurant data */
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useLocalStorage from "../utils/useLocalStorage";
import { restaurantList } from "../config"; /* Mock Data for testing in mobile*/
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { clearOrderItems } from "../utils/cartSlice";

const Body = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const isOnline = useOnline(); /* Custom Hook */
  const [isFavourite, setIsFavourite] = useState(false);
  const [favRestaurants, setFavRestaurants] = useLocalStorage("fav"); /* Custom Hook */
  const orders = useSelector(state=>state.cart.orderItems)
  useEffect(() => {
    getRestaurants();
  }, []);
  useEffect(()=>{
    dispatch(clearOrderItems());
  },[dispatch])
  console.log(orders)

  const getRestaurants = async () => {
    try {
      /* Live Data */
      const response = await fetch(GET_RESTAURANTS_LIST);
      const res_data = await response.json();

      /* Mock Data */
      //const res_data = restaurantList;
      console.log(res_data);
      setAllRestaurants(
        res_data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        res_data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
    console.log(allRestaurants)
  };

  const searchData = (searchText, restaurants) => () => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMsg("");
      if (data.length === 0) {
        setErrorMsg("No matches found ");
      }
    } else {
      if (errorMsg) setErrorMsg("");
      setAllRestaurants(allRestaurants);
    }
  };

  if (!isOnline) {
    return (
      <div className="container">
        <h1 className="font-bold text-red text-3xl text-center">
          Offline, please check your internet connection{" "}
        </h1>
      </div>
    );
  }

  const addFavourite = (props) => {
     // If restaurant is not marked fav, then add to local storage
   if (!favRestaurants.find(restaurant => restaurant?.info?.id === props.info.id)) {
      setFavRestaurants([...favRestaurants, props]);
  } else { //If restaurant is already in local storage, then remove from it.
      const modifiedFavRestaurants = favRestaurants.filter((restaurant) => restaurant.info.id !== props.info.id);
      setFavRestaurants(modifiedFavRestaurants);
  }
  }

  const showFavouriteRestaurants = () => {
    if(isFavourite) {
      if(errorMsg) setErrorMsg('');
      setFilteredRestaurants(allRestaurants);
    } else {
      if(favRestaurants.length === 0) {
        setErrorMsg('No favourites');
        setFilteredRestaurants([]);
      } else {
        setFilteredRestaurants(favRestaurants);
      }
    }
    setIsFavourite(!isFavourite);
    
  }

  // Don't render component (Early return)
  if (!allRestaurants) {
    return null;
  }
  return (
    <div className="container">
      <div className="flex justify-start mob:flex-col">
      <div className="flex min-w-[500px] mob:min-w-[375px] h-[100px] mob:h-[50px] items-center m-auto"> 
          <input type="text" placeholder=" Search for restaurant" value={searchText}
            className="outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-l-md ring-1 ring-gray bg-gray" key="input-text" onChange = {(e) => setSearchText(e.target.value)}/>
            <button className="h-[30px] w-[60px] bg-yellow rounded-r-md ring-1 ring-yellow">
            <AiOutlineSearch size={"1.5rem"} className="mx-auto text-white"
            onClick={searchData(searchText, allRestaurants)}/>
            </button>
        </div>
        <div className="flex justify-end h-[100px] items-center m-auto mob:h-[50px]">
            <button className={isFavourite? "btn btn--primary px-[5px] mob:basis-[50px] mob:text-xs": "btn btn--secondary px-[5px] mob:basis-[50px] mob:text-xs" } 
            onClick={()=> {showFavouriteRestaurants()}}>Favourites </button>
        </div>
      </div>
      {errorMsg && (
        <div className="h-14 m-auto text-center" id="error">
          <span className="error-text w-14 h-8 " id="error-msg">
            {errorMsg}
          </span>
        </div>
      )}

      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div
          className="flex flex-wrap gap-5 justify-center xl:max-w-7xl xl:mx-auto"
          // className="mx-auto max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center "
        >
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                className="basis-[250px] p-2.5 mb-2.5 mob:basis-[150px]"
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard
                  props={restaurant}
                  key={restaurant.info.id}
                  setRestaurants={addFavourite}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
