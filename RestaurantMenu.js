import { useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = ()=>
{
    const { Id }=useParams();
    console.log(Id);
    const[menu,setMenu]=useState(null);

    const data= async ()=>{
         const res=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.30080&lng=73.20430&restaurantId="+Id+"&catalog_qa=undefined&submitAction=ENTER");
         const json=await res.json();
         setMenu(json);
         console.log(json);
        }
     useEffect(()=>{
            data();
        },[]);
        if(menu===null)
        {
            return <Shimmer/>
        }
        const {avgRating,costForTwoMessage,cuisines,name,totalRatingString,resid}=menu?.data?.cards[2]?.card?.card?.info;
        const slaString=menu?.data?.cards[2]?.card?.card?.info?.sla?.slaString;


        //const itemcards=menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info?.variantsV2?.variantGroups[0]?.variations;

    return(
        <div className="resmenu">
       <h1>{name}</h1>
        <h3>Rating  {avgRating} {totalRatingString}</h3>
        <h4>{costForTwoMessage}</h4>
        <h3>{cuisines.join(",")}</h3>
        <h4>{slaString} {resid}</h4>
       
        </div>
    )
}


export default RestaurantMenu;