import {resData} from "../../utils/Data"
import Cards from "./Cards";
import React,{useState} from "react";

const Body = () => {
  const [data , setData] = useState(resData);
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

  export default Body;