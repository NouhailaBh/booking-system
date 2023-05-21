// RoomList.jsx
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RoomList = ({ rooms, adminId, hotelId, setRooms }) => {
  const handleDeletePhoto = async (roomId, photoIndex) => {
    try {
      await axios.delete(
        `http://localhost:4001/api/rooms/${roomId}/photos/${photoIndex}`
      );

      // Mettez à jour l'état des pièces pour refléter la suppression de la photo
      const updatedRooms = rooms.map((room) => {
        if (room._id === roomId) {
          const updatedPhotos = room.photos.filter(
            (photo, index) => index !== photoIndex
          );
          return { ...room, photos: updatedPhotos };
        }
        return room;
      });

      setRooms(updatedRooms);
    } catch (error) {
      console.error(error);
      // Gérez les erreurs de suppression de photo ici (affichage d'un message d'erreur, etc.)
    }
  };

  return (
    <div>
      {rooms && rooms.length > 0 ? (
        rooms.map((room) => (
          <div className="col-lg-3 col-md-6" key={room._id}>
            {room.photos && room.photos.length > 0 ? (
              room.photos.map((photo, index) => (
                <div className="coffee_img" key={index}>
                  <img src={photo} alt={`Room photo ${index}`} />
                  <button
                    onClick={() => handleDeletePhoto(room._id, index)}
                  >
                    Supprimer
                  </button>
                </div>
              ))
            ) : (
              <p>No images available for this room.</p>
            )}
            <h3 className="looking_text">{room.title}</h3>
            <p className="looking_text">${room.price}</p>
            <p className="looking_text">max de personne: {room.maxPeople}</p>
            <p className="looking_text">description: {room.desc}</p>
            <Link
              to={`/delete-room/?roomId=${room._id}&adminId=${adminId}&id=${hotelId}`}
            >
              Delete Room
            </Link>
            <Link
              to={`/modify-room/?roomId=${room._id}&adminId=${adminId}&id=${hotelId}`}
            >
              Modify Room
            </Link>
          </div>
        ))
      ) : (
        <p>No rooms found.</p>
      )}
      <div className="read_bt">
        <Link to={`/create-room/?id=${hotelId}&adminId=${adminId}`}>
          Create Room
        </Link>
      </div>
      <div className="read_bt">
        <Link to={`/hostels?id=${adminId}`}>Les hotels</Link>
      </div>
    </div>
  );
};

export default RoomList;
