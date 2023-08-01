import React, { useState } from 'react'

const Body = () => {
    const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className= "container">
      <div className="flex justify-start mob:flex-col">
        <div className="flex justify-evenly min-w-[500px] mob:min-w-[375px] h-[100px] mob:h-[50px] items-center m-auto"> 
          <input type="text" placeholder=" Search for restaurant"
        //    value={searchText}
            className="outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray" key="input-text"
            //  onChange = {(e) => setSearchText(e.target.value)}
             />
          <button className="btn btn--primary basis-[60px] mob:basis-[50px] mob:text-xs" 
            // onClick={searchData(searchText, allRestaurants)}
            > Search </button>
        </div>
        <div className="flex justify-end h-[100px] items-center m-auto mob:h-[50px]">
            <button className={isFavourite? "btn btn--primary px-[5px] mob:basis-[50px] mob:text-xs": "btn btn--secondary px-[5px] mob:basis-[50px] mob:text-xs" } 
            // onClick={()=> {showFavouriteRestaurants()}}
            >Favourites </button>
        </div>
      </div>
    {/* { errorMsg && 
      <div className="h-14 m-auto text-center" id="error">
        <span className="error-text w-14 h-8 " id="error-msg">{errorMsg}</span>
      </div> 
    } */}
    
    {/* { allRestaurants?.length === 0 ? (<Shimmer />) :  */}
    <div className="flex flex-wrap gap-5 justify-center">
      {filteredRestaurants.map((restaurant) => {
        return (
        //      <Link
        //   className="basis-[250px] p-2.5 mb-2.5 mob:basis-[150px]"
        //    to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
          <RestaurantCard props={restaurant.info} key={restaurant.info.id} setRestaurants={addFavourite} />
        // </Link>
        )
      })}
    </div>
    {/* } */}
    
  </div>
  )
}

export default Body