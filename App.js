import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} height="100px" width="100px" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

const resData= {
  "id": "78518",
  "name": "Dawat Pure Veg Restaurant",
  "cloudinaryImageId": "go8rnunfj2mekkszrtrm",
  "locality": "Manjalpur",
  "areaName": "Manjalpur",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "South Indian",
  "Chinese",
  "Continental",
 
  ],
  "avgRating": 4.4,
  "veg": true,
  "parentId": "7085",
  "avgRatingString": "4.4",
  "totalRatingsString": "7.2K+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 3,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "3.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-10-05 22:45:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "10% OFF",
  "subHeader": "UPTO ₹40"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "3.9",
  "ratingCount": "2.7K+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  }
console.log(resData.name);
  

const Cards = ({data}) => {
  return (
    <div className="card-items">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wclqueaetbptmdakbxxx"
        alt="card logo"
        height="100px"
        width="100px"
      />
      <h3>{data.name}</h3>
     <h4>{data.cuisines.join(",")}</h4>
     <h4>rating {data.avgRating}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h3>Search</h3>
        <input type="text" />
      </div>
      <div className="cards">
        <Cards data={resData}/>
        <Cards data={resData}/>
        <Cards data={resData}/>
        <Cards data={resData}/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
