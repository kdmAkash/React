

import Cards from "./Cards";
import React,{useState,useEffect} from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

const Body = () => {

  //for changing the state
  const [data , setData] = useState([]);
  const [searchText,setSearchText]=useState("");
  const [filrerData,setFilterData]=useState([]);


  //load-function call whenever component render
  useEffect(()=>{
    fetchData();
  },[]);

  //fetching realtime data
  async function  fetchData()
  {
    const call=await 
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result=await call.json();
    const arr=result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setData(arr);
    setFilterData(arr);
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
          <button onClick={()=>{
           const searchdata= data.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilterData(searchdata);
          }}>Search</button>
          <input type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          
          }}/>


          <button onClick={()=>{
          const res=data.filter((res)=>{
             return res.info.avgRating > 4.4;
            })
              setFilterData(res);
          }}>Top rated Restarunt</button>
        </div>   
        <div className="cards">
          {filrerData.map((res)=>{
          return <Link to={"/restaurant/"+res.info.id}  key={res.info.id} style={{textDecoration:"none"}}>
            <Cards  data={res} />
            </Link>
})}
        </div>
      </div>
    );
  };

  //export the component
  export default Body;
