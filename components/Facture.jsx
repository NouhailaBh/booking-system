import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Facture = () => {
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [reservation, setReservation] = useState(null);
  const userId = sessionStorage.getItem('userId');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get('room');
  const reservationId = searchParams.get('reservation');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:4001/api/users/${userId}`);
        setUser(userResponse.data);

        const roomResponse = await axios.get(`http://localhost:4001/api/rooms/${roomId}`);
        setRoom(roomResponse.data);

        const hotelResponse = await axios.get(`http://localhost:4001/api/hotels/find/${roomResponse.data.hotel}`);
        setHotel(hotelResponse.data);

        const reservationResponse = await axios.get(`http://localhost:4001/api/reservations/${reservationId}`);
        setReservation(reservationResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [userId, roomId, reservationId]);

  return (
    <div>
      <h1>Facture</h1>

      {user && (
        <div>
          <h2>Informations de l'utilisateur</h2>
          <p>Nom: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Afficher d'autres informations de l'utilisateur si nécessaire */}
        </div>
      )}

      {room && (
        <div>
       
        <p>Numéro chambre: {room.numeroRoom}</p>
<p>Nom de chambre: {room.title}</p>
<p>Date début réservation: {new Date(room.startDate).toLocaleDateString()}</p>
<p>Date fin réservation: {new Date(room.endDate).toLocaleDateString()}</p>
<p>Nombre de jours: {Math.ceil((new Date(room.endDate) - new Date(room.startDate)) / (1000 * 60 * 60 * 24))}</p>
<p>Prix total: {room.price * Math.ceil((new Date(room.endDate) - new Date(room.startDate)) / (1000 * 60 * 60 * 24))}$</p>

        </div>
      )}

      {hotel && (
        <div>
          
          <p>Nom Hotel: {hotel.name}</p>
          <p>Adresse: {hotel.address}</p>
          {/* Afficher d'autres informations de l'hôtel si nécessaire */}
        </div>
      )}
{reservation && (
        <div>
          
          <p>statut: {reservation.statut}</p>
        
          {/* Afficher d'autres informations de l'hôtel si nécessaire */}
        </div>
      )}
      {/* Autres éléments de la page de facture */}
    </div>
  );
};

export default Facture;
