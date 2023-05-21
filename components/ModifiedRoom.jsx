import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Sidebar from "./sidebar/Sidebar";
import Navbar2 from "./navbar/Navbar2";

const ModifiedRoom = ({ rooms, adminId, roomId ,hotelId}) => {
  const location = useLocation();
  const [files, setFiles] = useState([]);
  const [room, setRoom] = useState({});
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (rooms && rooms.length > 0) {
      setRoom(rooms[0]);
    }
  }, [rooms]);

  const handleChange = (e) => {
  
      setRoom((prevRoom) => ({
        ...prevRoom,
        [e.target.name]: e.target.value,
      }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
    

      await axios.put(`http://localhost:4001/api/rooms/${roomId}`, room);
      console.log(room);
      //console.log(hotelId);
     navigate(`/view-rooms?id=${hotelId}`);
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
          <h1>Modify Room</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files.length > 0
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
                  name="image"
                  multiple
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="title">Title:</label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={room.title || ""}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="price">Price:</label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={room.price || ""}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="maxPeople">Max People:</label>
                <input
                  id="maxPeople"
                  type="number"
                  name="maxPeople"
                  onChange={handleChange}
                  value={room.maxPeople || ""}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="desc">Description:</label>
                <textarea
                  id="desc"
                  name="desc"
                  onChange={handleChange}
                  value={room.desc || ""}
                  required
                ></textarea>
              </div>
              <button onClick={handleSubmit}>Modify</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifiedRoom;
