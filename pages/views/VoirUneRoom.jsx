import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./VoirUneRoom.css";
const VoirUneRoom = () => {
  const [room, setRoom] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get('room');

  useEffect(() => {
    // Effectuez une requête pour obtenir les détails de la chambre avec l'ID correspondant à "roomId"
    axios.get(`http://localhost:4001/api/rooms/${roomId}`)
      .then(response => {
        setRoom(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [roomId]);

  const renderArrowPrev = (onClickHandler, hasPrev, label) => (
    <button
      type="button"
      className="carousel-arrow carousel-arrow-prev"
      onClick={onClickHandler}
      disabled={!hasPrev}
      aria-label={label}
      >précédent</button>
  );

  const renderArrowNext = (onClickHandler, hasNext, label) => (
    <button
      type="button"
      className="carousel-arrow carousel-arrow-next"
      onClick={onClickHandler}
      disabled={!hasNext}
      aria-label={label}
    >suivant</button>
  );

  return (
    <div className="blog_section_2">
      {room ? (
        <div className="row">
          <div className="col-md-6" key={room._id}>
            <div className="blog_box">
              {room.photos && room.photos.length > 0 ? (
                <div>
                  <Carousel
                    showThumbs={false}
                    showArrows={true}
                    renderArrowPrev={renderArrowPrev}
                    renderArrowNext={renderArrowNext}
                  >
                    {room.photos.map((photo, index) => (
                      <div key={index}>
                        <img src={photo} alt={`Room photo ${index}`} />
                      </div>
                    ))}
                  </Carousel>
                </div>
              ) : (
                <p>No images available for this room.</p>
              )}

              {/* Reste du contenu */}
              <h4 className="prep_text">{room.title}</h4>
              <p className="lorem_text">{room.desc}</p>
              <p className="lorem_text">
                Max de personnes : {room.maxPeople}
              </p>
              <p className="lorem_text">${room.price}</p>
              <p className="lorem_text">
                Numéro de chambre : {room.numeroRoom}
              </p>

              <div className="read_bt">
                {/* Ajoutez ici le contenu du bouton */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading room...</p>
      )}

      <div className="read_bt">
       
      </div>
    </div>
  );
};

export default VoirUneRoom;
