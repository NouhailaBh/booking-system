import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ViewReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotelId = searchParams.get("id");

  useEffect(() => {
    fetchReservations();
    fetchRooms();
    fetchUsers();
  }, [hotelId]);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/api/reservations?hotelId=${hotelId}`);
      const reservationsData = response.data;
      setReservations(reservationsData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:4001/api/rooms");
      const roomsData = response.data;
      setRooms(roomsData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4001/api/users");
      const usersData = response.data;
      setUsers(usersData);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredRooms = rooms.filter((room) => room.hotel === hotelId);

  const getLastReservationUser = (roomId) => {
    const lastReservation = reservations
      .filter((reservation) => reservation.roomId === roomId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 1);

    if (lastReservation.length > 0) {
      const user = users.find((user) => user._id === lastReservation[0].userId);
      return user ? user.username : "Utilisateur inconnu";
    }

    return "Aucune réservation";
  };

  return (
    <div>
      <h2>Chambres :</h2>
      {filteredRooms.map((room) => (
        <div key={room._id}>
          <h3>{room.title}</h3>
          <p>{room.price}</p>
          <p>Date de début : {room.startDate}</p>
          <p>Date de fin : {room.endDate}</p>

          <div>
            <h4>Réservation :</h4>
            <p>Utilisateur : {getLastReservationUser(room._id)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewReservations;
