
import Cards from "./Cards";
import React,{useState,useEffect} from "react";
import Shimmer from "./Shimmer"

const Body = () => {

  //for changing the state
  const [data , setData] = useState([]);


  //load-function call whenever component render
  useEffect(()=>{
    fetchData();
  },[]);

  //fetching realtime data
  async function  fetchData()
  {
    const call=await 
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const result=await call.json();
    const arr=result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setData(arr);

  }
  //conditional rendering
  if(data.length===0)
  {
    return <Shimmer/>
  }
  //Actual component
      return (
      <div className="body">
        <div className="search">
          <h3>Search</h3>
          <input type="text" />
          <button onClick={()=>{
          const res=data.filter((res)=>{
             return res.info.avgRating > 4.4;
            })
              setData(res);
          }}>Top rated Restarunt</button>
        </div>
        <div className="cards">
          {data.map((res)=><Cards  data={res} key={res.info.id} />)}
        </div>
      </div>
    );
  };

  //export the component
  export default Body;