import "../pages/newHotel/newhotel.scss";
import Sidebar from "./sidebar/Sidebar";
import Navbar2 from "./navbar/Navbar2";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { hotelInputs } from "../formSource";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ModifiedHotel = ({ hotels, adminId ,hotelId}) => {
  const location = useLocation();
  const [files, setFiles] = useState("");
  const [hotel, setHotel] = useState({});
  const navigate = useNavigate();
  const path = location.pathname;
  const [error, setError] = useState(null);

  useEffect(() => {
   
    if (hotels && hotels.length > 0) {
      setHotel(hotels[0]);
    }
  }, [hotels]);

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFiles(e.target.files);
      const fileURL = URL.createObjectURL(e.target.files[0]); // Crée une URL d'objet à partir du fichier
      setHotel((prevHotel) => ({
        ...prevHotel,
        photos: fileURL, // Met à jour l'état de l'image avec l'URL d'objet
      }));
    } else {
      setHotel((prevHotel) => ({
        ...prevHotel,
        [e.target.name]: e.target.value,
      }));
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
  
      await axios.put(`http://localhost:4001/api/hotels/${hotelId}`, hotel);
      console.log(hotel);
      navigate(`/hostels`);
      // Redirigez ou effectuez toute autre action après la modification réussie de l'hôtel
    } catch (error) {
      setError(error);
    }
  };
  

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar2 />
        <div className="top">
          <h1>Modify Hotel</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="">
            <form>
              
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    name={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={hotel[input.id] || ""}
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Featured</label>
                <select
                  id="featured"
                  name="featured"
                  onChange={handleChange}
                  value={hotel.featured || false}
                >
                  <option value={false}> No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <button  onClick={handleSubmit}>Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifiedHotel;
