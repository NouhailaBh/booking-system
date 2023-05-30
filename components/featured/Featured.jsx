import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels");

  const chunkSize = 3; // Taille de chaque groupe

  // Fonction pour diviser les données en groupes de la taille spécifiée
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const hotelGroups = chunkArray(data, chunkSize); // Divise les données des hôtels en groupes

  return (
    <div>
      {loading ? (
        "Loading, please wait..."
      ) : (
        <>
          {hotelGroups.map((group, groupIndex) => (
            <div className="featured" key={groupIndex}>
              {group.map((hotel, hotelIndex) => (
                <div className="featuredItem" key={hotelIndex}>
                  <Link to={`/rooms/?id=${hotel._id}`}>
                    <img
                      src={hotel.photos} // Assurez-vous que l'objet hotel contient une propriété 'photos' avec l'URL de l'image
                      alt={hotel.name}
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3 style={{ color: "white" }}>{hotel.name}</h3>
                      <h4 style={{ color: "white" }}>{hotel.city}</h4>
                      <p style={{ color: "white" }}>{hotel.description}</p>
                      {/* Ajoutez d'autres informations d'hôtel si nécessaire */}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Featured;
