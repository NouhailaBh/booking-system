import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContextHost } from "../context/AuthContextHost";
import { useNavigate } from "react-router-dom";

const HotelList = ({ hotels,adminId}) => {
   const navigate = useNavigate();

   const location = useLocation();
   const {host,dispatch} =useContext(AuthContextHost);
   const [loggedIn, setLoggedIn] = useState(true); 
   const handleLogOut = () => {
      dispatch({ type: "LOGOUT" });
      sessionStorage.removeItem("adminId");
      setLoggedIn(false); // Mettre à jour l'état à false après la déconnexion
      navigate("/loginHost");
    };
   const path = location.pathname;
   const [list, setList] = useState([]);
   const { data, loading, error } = useFetch(path);
   useEffect(() => {
      const adminId = sessionStorage.getItem("adminId");
      if (!adminId) {
        setLoggedIn(false); // Si l'adminId n'est pas présent, mettre à jour l'état à false
        navigate("/loginHost");
      }
    }, []);
  return (
  
<div>
   {loggedIn ? ( 
      <div>
   <head>
     
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
   
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
     
      <title>hotels</title>
      <meta name="keywords" content=""/>
      <meta name="description" content=""/>
      <meta name="author" content=""/>
     
      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
      
      <link rel="stylesheet" type="text/css" href="css/style.css"/>
     
      <link rel="stylesheet" href="css/responsive.css"/>
     
      <link rel="icon" href="images/fevicon.png" type="image/gif" />
  
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet"/>
   
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css"/>
      
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"/>
   </head>
   <body>
      <div className="header_section">
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand"href="">Hotels</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                     
                     </li>
                     <li className="nav-item">
                     
                     </li>
                     <li className="nav-item">
                     
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="login_bt">
                       <button className="btn btn-logout " onClick={handleLogOut} >Log out </button>
                         
                           
                     </div>
                  </form>
               </div>
            </nav>
         </div>
      
         <div className="banner_section layout_padding">
            <div className="container">
               <div id="banner_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_img"></div>
                           </div>
                          
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_img"><img src="images/banner-img.png"/></div>
                           </div>
                           <div className="col-md-6">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">coffee</h1>
                                 <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                                 <p className="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                                 <div className="btn_main">
                                    <div className="about_bt"><a href="#">About Us</a></div>
                                    <div className="callnow_bt active"><a href="#">Call Now</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                    
                  </div>
                  <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                  <i className="fa fa-arrow-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                  <i className="fa fa-arrow-right"></i>
                  </a>
               </div>
            </div>
         </div>
     
      </div>
     
      <div className="coffee_section layout_padding">
         <div className="container">
            <div className="row">
           
               <h1 className="coffee_taital">les hotels</h1> <div className="readmore_btn">
               <Link to={`${location.pathname}/new`} className="link">
         <h2>nouveau Hotel</h2>
        </Link></div>
              
               <div className="bulit_icon"><img src="images/bulit-icon.png"/> </div>
              
            </div>
         </div>
         <div className="coffee_section_2">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container-fluid">
                        <div className="row">
                        {hotels && hotels.length > 0 ? (
        hotels.map((hotel) => (
          <div className="col-lg-3 col-md-6" key={hotel._id}>
            
           
            {hotel.photos && hotel.photos.length > 0 ? (
              <div className="coffee_img"><img src={hotel.photos[0]}  />
            
              </div>
            ) : (
              <p>No images available for this hotel.</p>
            )}
            
                             
                              <h3 className="looking_text">{hotel.name}</h3>
                              <h3 className="looking_text">{hotel.title}</h3>
                              <p className="looking_text"> ville:{hotel.city}</p>
                              <p className="looking_text">localisation{hotel.address}</p>
                              <p className="looking_text">description :{hotel.desc}</p>
                              <p className="looking_text">loin de :{hotel.distance} m de centre ville</p>
                              <p className="looking_text">prix inférieur :{hotel.cheapestPrice}</p>
                              <div className="read_bt">  
                              <Link to={`/view-rooms/?id=${hotel._id}`}>View Room</Link>
                              <Link to={`/view-reservations/?id=${hotel._id}`}>View Reservations</Link>
                         
                          <Link to={`/delete-hotel/?id=${hotel._id}`}>Delete Hotel</Link>
                          <Link to={`/modify-hotel/?id=${hotel._id}`}>Modifier Hotel</Link>
                          </div>
                          
           
          </div>
        ))
      ) : (
        <p>No hotels found.</p>
      )}
                           
                           
                           
                        </div>
                     </div>
                  </div>
                 



               </div>
               <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
               <i className="fa fa-arrow-left"></i>
               </a>
               <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
               <i className="fa fa-arrow-right"></i>
               </a>
            </div>
         </div>
      </div>
   
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="contact_taital"></h1>
                  <div className="bulit_icon"></div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="contact_section_2">
               <div className="row">
                  <div className="col-md-12">
                     
                  </div>
                  <div className="map_main">
                     <div className="map-responsive">
                       
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   
      <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="address_text">Booking App</h1>
                  <p className="footer_text">utiliser notre Application pour Réserver des chambres et poster vos poste en ligne </p>
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="#">
                           <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_10">Booking App</span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                           <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left_10">BookingApp@gmail.com</span>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="form-group">
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
    
      <div className="copyright_section">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-sm-12">
                  <p className="copyright_text">2020 All Rights Reserved. Design by BOUROUAH NOUHAILA</p>
               </div>
               <div className="col-lg-6 col-sm-12">
                  <div className="footer_social_icon">
                     <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
     
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/plugin.js"></script>
     
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>
   </body>
</div>
     ) : (
    navigate( "/loginHost")
    )}
  </div>
);
};

export default HotelList;


