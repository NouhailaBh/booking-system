import "../newHotel/newhotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar2 from "../../components/navbar/Navbar2";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { hotelInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ModifiedHotel from "../../components/ModifiedHotel";

const ModifyHotel = () => {
 
  const [hotels, setHotels] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotelId = searchParams.get('id');
  const adminId = sessionStorage.getItem('adminId');



  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get("http://localhost:4001/api/hotels");
      setHotels(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredHotels = hotels.filter((hotel) => hotel._id === hotelId);

  return (
    <div>
  <ModifiedHotel hotels={filteredHotels} adminId={adminId} hotelId={hotelId} />
  </div>
  );
};

export default ModifyHotel;
