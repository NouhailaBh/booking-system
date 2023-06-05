import "./newhotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar2 from "../../components/navbar/Navbar2";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ArrowLeftSquare } from 'react-bootstrap-icons';


const NewHotel = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const location = useLocation();
  
  const adminId = sessionStorage.getItem('adminId');
  const handleChange =(e) =>{
    setInfo((prev) =>({ ...prev, [e.target.id] :e.target.value}));
  };

  const handleNavigate = async (e) => {
    e.preventDefault();
    try {
      navigate(`/hostels`);
    } catch (error) {
      setError(error);
    }
  };
  console.log(files);
  const handleClick =async (e)  =>{
    e.preventDefault()
    try{
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
    //console.log(list);

      const newHotel ={
        ...info,
        adminId: adminId,
        photos :list,
      }
console.log(info)
      await axios.post("/hotels",newHotel);
          navigate(`/hostels`); 

    }catch(err){
    console.log(err);
    }
  }

  return (
    <html>
    <head>
      <meta charset="utf-8"/>
      <title>Nouveau Hotel</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      
      <link rel="stylesheet" href="../../fonts3/material-design-iconic-font/css/material-design-iconic-font.min.css"/>
      <link rel="stylesheet" href="../../css3/style.css"/>
    </head>
  
    <body>
  
    <div className="wrapper" style={{backgroundImage: "url('../../images/i666.jpg')"}}>
<div className="inner">
  <div className="image-holder" style={{marginTop: "80px"}}>
  <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />  <label htmlFor="file">
            Image: <DriveFolderUploadOutlinedIcon className="icon" />
          </label>
          <input
            type="file"
            id="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            style={{ display: "none" }}
          />
    <div className="button-container">
     
      <button onClick={handleNavigate}><ArrowLeftSquare/></button>
    </div>
  </div>
  <form action="">
    <h2>Modifier Hotel</h2>
    <div className="form-wrapper">
      {hotelInputs.map((input) => (
        <div className="" key={input.id}>
        
          <input className="form-control"
           id={input.id} 
           onChange={handleChange} 
           type={input.type}
            placeholder={input.placeholder} 
          />
        </div>
      ))}

    </div>
    <button onClick={handleClick}>Créer</button>
 
    
  </form>
</div>
</div>

      
    </body>
  </html>
  );
};

export default NewHotel;
