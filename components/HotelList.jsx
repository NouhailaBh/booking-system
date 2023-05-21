import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const HotelList = ({ hotels,adminId}) => {
   const location = useLocation();

   const path = location.pathname;
   const [list, setList] = useState([]);
   const { data, loading, error } = useFetch(path);
   
  return (

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
               <a className="navbar-brand"href="index.html"><img src="images/logo.png"/></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home</a>
                     </li>
                     <li className="nav-item">
                     
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="login_bt">
                        <ul>
                           <li><a href="#"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Login</a></li>
                           <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        </ul>
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
                              <div className="banner_img"><img src="images/i1.jpg"/></div>
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
               <Link to={`${location.pathname}/new?id=${adminId}`} className="link">
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
                              <Link to={`/view-rooms/?id=${hotel._id}&adminId=${adminId}`}>View Room</Link>
                         
                          <Link to={`/delete-hotel/?id=${hotel._id}&adminId=${adminId}`}>Delete Hotel</Link>
                          <Link to={`/modify-hotel/?id=${hotel._id}&adminId=${adminId}`}>Modifier Hotel</Link>
                          </div>
                          
           
          </div>
        ))
      ) : (
        <p>No hotels found.</p>
      )}
                           
                           
                           
                        </div>
                     </div>
                  </div>
                 



                  <div className="carousel-item">
                     <div className="container-fluid">
                        <div className="row">
                           <div className="col-lg-3 col-md-6">
                              <div className="coffee_img"><img src="images/img-1.png"/></div>
                              <h3 className="types_text">TYPES OF COFFEE</h3>
                              <p className="looking_text">looking at its layout. The point of</p>
                              <div className="read_bt"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-lg-3 col-md-6">
                              <div className="coffee_img"><img src="images/img-2.png"/></div>
                              <h3 className="types_text">BEAN VARIETIES</h3>
                              <p className="looking_text">looking at its layout. The point of</p>
                              <div className="read_bt"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-lg-3 col-md-6">
                              <div className="coffee_img"><img src="images/img-3.png"/></div>
                              <h3 className="types_text">COFFEE & PASTRY</h3>
                              <p className="looking_text">looking at its layout. The point of</p>
                              <div className="read_bt"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-lg-3 col-md-6">
                              <div className="coffee_img"><img src="images/img-4.png"/></div>
                              <h3 className="types_text">COFFEE TO GO</h3>
                              <p className="looking_text">looking at its layout. The point of</p>
                              <div className="read_bt"><a href="#">Read More</a></div>
                           </div>
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
   
      <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="about_taital">About Booking</h1>
                  <div className="bulit_icon"><img src="images/bulit-icon.png"/></div>
               </div>
            </div>
            <div className="about_section_2 layout_padding">
               <div className="image_iman"><img src="images/i1.jpg" className="about_img"/></div>
               <div className="about_taital_box">
                  <h1 className="about_taital_1">Booking hotels</h1>
                  <p className=" about_text">La réservation d'hôtels offre de nombreux avantages aux voyageurs. Elle permet aux clients de trouver facilement des options d'hébergement qui répondent à leurs besoins spécifiques en termes de localisation, de prix, de commodités et de disponibilité. Les sites de réservation d'hôtels en ligne offrent souvent une grande variété d'options, allant des hôtels économiques aux hôtels de luxe, ce qui permet aux clients de trouver l'établissement qui correspond le mieux à leurs préférences et à leur budget.</p>
                  <div className="readmore_btn"><a href="#">Read More</a></div>
               </div>
            </div>
         </div>
      </div>
   
      <div className="client_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="about_taital">What syas customers</h1>
                  <div className="bulit_icon"><img src="images/bulit-icon.png"/></div>
               </div>
            </div>
            <div className="client_section_2">
               <div className="client_taital_main">
                  <div className="client_left">
                     <div className="client_img"><img src="images/client-img1.png"/></div>
                  </div>
                  <div className="client_right">
                     <h3 className="moark_text">Joy Moark</h3>
                     <p className="client_text">now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
                  </div>
               </div>
               <div className="client_taital_main">
                  <div className="client_left">
                     <div className="client_img"><img src="images/client-img2.png"/></div>
                  </div>
                  <div className="client_right">
                     <h3 className="moark_text">Mihacal</h3>
                     <p className="client_text">now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
                  </div>
               </div>
               <div className="client_taital_main">
                  <div className="client_left">
                     <div className="client_img"><img src="images/client-img3.png"/></div>
                  </div>
                  <div className="client_right">
                     <h3 className="moark_text">Uliya den</h3>
                     <p className="client_text">now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="blog_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="about_taital">Our Blog</h1>
                  <div className="bulit_icon"><img src="images/bulit-icon.png"/></div>
               </div>
            </div>
            <div className="blog_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <div className="blog_box">
                        <div className="blog_img"><img src="images/i33.jpg"/></div>
                        <h4 className="date_text">Meilleur Offre</h4>
                        <h4 className="prep_text">PREP TECHNIQUES Coffee</h4>
                        <p className="lorem_text">distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more</p>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
                  <div className="col-md-6">
                     <div className="blog_box">
                        <div className="blog_img"><img src="images/i22.jpg"/></div>
                        <h4 className="date_text">Offre spéciale</h4>
                        <h4 className="prep_text">PREP TECHNIQUES Coffee</h4>
                        <p className="lorem_text">distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more</p>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="contact_taital">Get In Touch</h1>
                  <div className="bulit_icon"><img src="images/bulit-icon.png"/></div>
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
                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="250" height="500" frameborder="0"  allowfullscreen=""></iframe>
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
 
  );
};

export default HotelList;



