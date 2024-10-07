const Cards = ({data}) => {
  const {name,cuisines,avgRating}=data?.info;
    return (
      <div className="card-items">
        <img
             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + data.info.cloudinaryImageId}
          alt="card logo"
          height="100px"
          width="100px"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>rating {avgRating}</h4>
      </div>
    );
  };


  export default Cards;