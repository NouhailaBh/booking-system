import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../newHotel/newhotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar2 from "../../components/navbar/Navbar2";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useLocation } from "react-router-dom";
const NewRoom = () => {
  const [files, setFiles] = useState("");
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotelId = searchParams.get("id");
  const adminId = sessionStorage.getItem('adminId');

  const handleChange = (e) => {
    if (e.target.id === 'image') {
      setImage(e.target.files[0]);
    } else {
      setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!hotelId) {
      console.log("ID de l'hôtel manquant");
      return;
    }
    try {
      const list =await Promise.all(
        Object.values(files).map(async (file)=>{
         const data = new FormData();
         data.append("file",file);
         data.append("upload_preset","upload");
         const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dcfe1dwkh/image/upload"
         ,data);
         const {url} =uploadRes.data;
         return url;
       }));

      const newRoom = {
        ...info,
        hotel: hotelId,
        photos: list,
      };

      await axios.post("/rooms", newRoom);
      navigate(`/view-rooms?id=${hotelId}`);
   
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar2 />
        <div className="top">
          <h1>Add New Room</h1>
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
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="image">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="image"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="title">Title:</label>
                <input
                  id="title"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="price">Price:</label>
                <input
                  id="price"
                  type="number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="maxPeople">Max People:</label>
                <input
                  id="maxPeople"
                  type="number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="maxPeople">Numéro de chambre</label>
                <input
                  id="numeroRoom"
                  type="number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="desc">Description:</label>
                <textarea
                  id="desc"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button onClick={handleClick}>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
