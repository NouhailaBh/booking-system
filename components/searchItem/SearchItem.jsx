import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">à {item.distance} m de centre ville</span>
        
        <span className="siFeatures">
        {item.desc}</span>
        
        
      </div>
      <div className="siDetails">
       { item.rating &&<div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">le min prix des chambres  ${item.cheapestPrice}</span>
        
          
          <Link to={`/rooms/?id=${item._id}`}>
          <button className="siCheckButton">Voir Les room</button>
          
      </Link>  
      </div>
      </div>
    </div>
  );
};

export default SearchItem;
