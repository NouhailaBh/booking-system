import React, { useState, useEffect } from "react";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeUser = () => {
    return (
      
        
<html>
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Sogo Hotel by Colorlib.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />


    <link rel="stylesheet" href="css2/bootstrap.min.css"/>
    <link rel="stylesheet" href="css2/animate.css"/>
    <link rel="stylesheet" href="css2/owl.carousel.min.css"/>
    <link rel="stylesheet" href="css2/aos.css"/>
    <link rel="stylesheet" href="css2/bootstrap-datepicker.css"/>
    <link rel="stylesheet" href="css2/jquery.timepicker.css"/>
    <link rel="stylesheet" href="css2/fancybox.min.css"/>
    
    <link rel="stylesheet" href="fonts/ionicons/css/ionicons.min.css"/>
    <link rel="stylesheet" href="fonts/fontawesome/css/font-awesome.min.css"/>

    <link rel="stylesheet" href="css2/style.css"/>
  </head>
  <body>
    
    <header className="site-header js-site-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-lg-4 site-logo" data-aos="fade"><a href="index.html">Sogo Hotel</a></div>
          <div className="col-6 col-lg-8">


            <div className="site-menu-toggle js-site-menu-toggle"  data-aos="fade">
              <span></span>
              <span></span>
              <span></span>
            </div>
   

            <div className="site-navbar js-site-navbar">
              <nav role="navigation">
                <div className="container">
                  <div className="row full-height align-items-center">
                    <div className="col-md-6 mx-auto">
                      <ul className="list-unstyled menu">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="rooms.html">Rooms</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="reservation.html">Reservation</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="site-hero overlay" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row site-hero-inner justify-content-center align-items-center">
          <div className="col-md-10 text-center" data-aos="fade-up">
            <span className="custom-caption text-uppercase text-white d-block  mb-3">Welcome To 5 <span className="fa fa-star text-primary"></span>   Hotel</span>
            <h1 className="heading">A Best Place To Stay</h1>
          </div>
        </div>
      </div>

      <a className="mouse smoothscroll" href="#next">
        <div className="mouse-icon">
          <span className="mouse-wheel"></span>
        </div>
      </a>
    </section>
    

    <section className="section bg-light pb-0"  >
      <div className="container">
       
        <div className="row check-availabilty" id="next">
          <div className="block-32" data-aos="fade-up" data-aos-offset="-200">

            <form action="#">
              <div className="row">
                <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                  <label for="checkin_date" className="font-weight-bold text-black">Check In</label>
                  <div className="field-icon-wrap">
                    <div className="icon"><span className="icon-calendar"></span></div>
                    <input type="text" id="checkin_date" className="form-control"/>
                  </div>
                </div>
                <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                  <label for="checkout_date" className="font-weight-bold text-black">Check Out</label>
                  <div className="field-icon-wrap">
                    <div className="icon"><span className="icon-calendar"></span></div>
                    <input type="text" id="checkout_date" className="form-control"/>
                  </div>
                </div>
                <div className="col-md-6 mb-3 mb-md-0 col-lg-3">
                  <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label for="adults" className="font-weight-bold text-black">Adults</label>
                      <div className="field-icon-wrap">
                        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                        <select name="" id="adults" className="form-control">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4+</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label for="children" className="font-weight-bold text-black">Children</label>
                      <div className="field-icon-wrap">
                        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                        <select name="" id="children" className="form-control">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 align-self-end">
                  <button className="btn btn-primary btn-block text-white">Check Availabilty</button>
                </div>
              </div>
            </form>
          </div>


        </div>
      </div>
    </section>

    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
            <figure className="img-absolute">
              <img src="images2/food-1.jpg" alt="Image" className="img-fluid"/>
            </figure>
            <img src="images2/img_1.jpg" alt="Image" className="img-fluid rounded"/>
          </div>
          <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
            <h2 className="heading">Welcome!</h2>
            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#" className="btn btn-primary text-white py-2 mr-3">Learn More</a> <span className="mr-3 font-family-serif"><em>or</em></span> <a href="https://vimeo.com/channels/staffpicks/93951774"  data-fancybox className="text-uppercase letter-spacing-1">See video</a></p>
          </div>
          
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading" data-aos="fade-up">Rooms &amp; Suites</h2>
            <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src="images2/img_1.jpg" alt="Free website template" className="img-fluid mb-3"/>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Single Room</h2>
                <span className="text-uppercase letter-spacing-1">90$ / per night</span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src="images2/img_2.jpg" alt="Free website template" className="img-fluid mb-3"/>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Family Room</h2>
                <span className="text-uppercase letter-spacing-1">120$ / per night</span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <a href="#" className="room">
              <figure className="img-wrap">
                <img src="images2/img_3.jpg" alt="Free website template" className="img-fluid mb-3"/>
              </figure>
              <div className="p-3 text-center room-info">
                <h2>Presidential Room</h2>
                <span className="text-uppercase letter-spacing-1">250$ / per night</span>
              </div>
            </a>
          </div>


        </div>
      </div>
    </section>
    
    
    <section className="section slider-section bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading" data-aos="fade-up">Photos</h2>
            <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="home-slider major-caousel owl-carousel mb-5" data-aos="fade-up" data-aos-delay="200">
              <div className="slider-item">
                <a href="images2/slider-1.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images2/slider-1.jpg" alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images2/slider-2.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images2/slider-2.jpg" alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images2/slider-3.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images2/slider-3.jpg" alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images2/slider-4.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images2/slider-4.jpg" alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images2/slider-5.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images2/slider-5.jpg" alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images2/slider-6.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images2/slider-6.jpg" alt="Image placeholder" className="img-fluid"/></a>
              </div>
              <div className="slider-item">
                <a href="images2/slider-7.jpg" data-fancybox="images" data-caption="Caption for this image"><img src="images2/slider-7.jpg" alt="Image placeholder" className="img-fluid"/></a>
              </div>
            </div>
          
          </div>
        
        </div>
      </div>
    </section>
 
    
    <section className="section bg-image overlay" >
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading text-white" data-aos="fade">Our Restaurant Menu</h2>
            <p className="text-white" data-aos="fade" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
        <div className="food-menu-tabs" data-aos="fade">
          <ul className="nav nav-tabs mb-5" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active letter-spacing-2" id="mains-tab" data-toggle="tab" href="#mains" role="tab" aria-controls="mains" aria-selected="true">Mains</a>
            </li>
            <li className="nav-item">
              <a className="nav-link letter-spacing-2" id="desserts-tab" data-toggle="tab" href="#desserts" role="tab" aria-controls="desserts" aria-selected="false">Desserts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link letter-spacing-2" id="drinks-tab" data-toggle="tab" href="#drinks" role="tab" aria-controls="drinks" aria-selected="false">Drinks</a>
            </li>
          </ul>
          <div className="tab-content py-5" id="myTabContent">
            
            
            <div className="tab-pane fade show active text-left" id="mains" role="tabpanel" aria-labelledby="mains-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$20.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Murgh Tikka Masala</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$35.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Fish Moilee</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$15.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Safed Gosht</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$10.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">French Toast Combo</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$8.35</span>
                    <h3 className="text-white"><a href="#" className="text-white">Vegie Omelet</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$22.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Chorizo &amp; Egg Omelet</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              

            </div> 

            <div className="tab-pane fade text-left" id="desserts" role="tabpanel" aria-labelledby="desserts-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$11.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Banana Split</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$72.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Sticky Toffee Pudding</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$26.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Pecan</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$42.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Apple Strudel</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$7.35</span>
                    <h3 className="text-white"><a href="#" className="text-white">Pancakes</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$22.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Ice Cream Sundae</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div> 
            <div className="tab-pane fade text-left" id="drinks" role="tabpanel" aria-labelledby="drinks-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$32.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Spring Water</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$14.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Coke, Diet Coke, Coke Zero</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$93.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Orange Fanta</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$18.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Lemonade, Lemon Squash</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$38.35</span>
                    <h3 className="text-white"><a href="#" className="text-white">Sparkling Mineral Water</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div className="food-menu mb-5">
                    <span className="d-block text-primary h4 mb-3">$69.00</span>
                    <h3 className="text-white"><a href="#" className="text-white">Lemon, Lime &amp; Bitters</a></h3>
                    <p className="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </section>
    
    
    <section className="section testimonial-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading" data-aos="fade-up">People Says</h2>
          </div>
        </div>
        <div className="row">
          <div className="js-carousel-2 owl-carousel mb-5" data-aos="fade-up" data-aos-delay="200">
            
            <div className="testimonial text-center slider-item">
              <div className="author-image mb-3">
                <img src="images2/person_1.jpg" alt="Image placeholder" className="rounded-circle mx-auto"/>
              </div>
              <blockquote>

                <p>&ldquo;A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; Jean Smith</em></p>
            </div> 

            <div className="testimonial text-center slider-item">
              <div className="author-image mb-3">
                <img src="images2/person_2.jpg" alt="Image placeholder" className="rounded-circle mx-auto"/>
              </div>
              <blockquote>
                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
            </div>

            <div className="testimonial text-center slider-item">
              <div className="author-image mb-3">
                <img src="images2/person_3.jpg" alt="Image placeholder" className="rounded-circle mx-auto"/>
              </div>
              <blockquote>

                <p>&ldquo;When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
            </div>


            <div className="testimonial text-center slider-item">
              <div className="author-image mb-3">
                <img src="images2/person_1.jpg" alt="Image placeholder" className="rounded-circle mx-auto"/>
              </div>
              <blockquote>

                <p>&ldquo;A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; Jean Smith</em></p>
            </div> 

            <div className="testimonial text-center slider-item">
              <div className="author-image mb-3">
                <img src="images2/person_2.jpg" alt="Image placeholder" className="rounded-circle mx-auto"/>
              </div>
              <blockquote>
                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
            </div>

            <div className="testimonial text-center slider-item">
              <div className="author-image mb-3">
                <img src="images2/person_3.jpg" alt="Image placeholder" className="rounded-circle mx-auto"/>
              </div>
              <blockquote>

                <p>&ldquo;When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
            </div>

          </div>
          
        </div>

      </div>
    </section>
    

    <section className="section blog-post-entry bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading" data-aos="fade-up">Events</h2>
            <p data-aos="fade-up">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="100">

            <div className="media media-custom d-block mb-4 h-100">
              <a href="#" className="mb-4 d-block"><img src="images2/img_1.jpg" alt="Image placeholder" className="img-fluid"/></a>
              <div className="media-body">
                <span className="meta-post">February 26, 2018</span>
                <h2 className="mt-0 mb-3"><a href="#">Travel Hacks to Make Your Flight More Comfortable</a></h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="200">
            <div className="media media-custom d-block mb-4 h-100">
              <a href="#" className="mb-4 d-block"><img src="images2/img_2.jpg" alt="Image placeholder" className="img-fluid"/></a>
              <div className="media-body">
                <span className="meta-post">February 26, 2018</span>
                <h2 className="mt-0 mb-3"><a href="#">5 Job Types That Aallow You To Earn As You Travel The World</a></h2>
                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="300">
            <div className="media media-custom d-block mb-4 h-100">
              <a href="#" className="mb-4 d-block"><img src="images2/img_3.jpg" alt="Image placeholder" className="img-fluid"/></a>
              <div className="media-body">
                <span className="meta-post">February 26, 2018</span>
                <h2 className="mt-0 mb-3"><a href="#">30 Great Ideas On Gifts For Travelers</a></h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. t is a paradisematic country, in which roasted parts of sentences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-image overlay" >
        <div className="container" >
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
              <h2 className="text-white font-weight-bold">A Best Place To Stay. Reserve Now!</h2>
            </div>
            <div className="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
              <a href="reservation.html" className="btn btn-outline-white-primary py-3 text-white px-5">Reserve Now</a>
            </div>
          </div>
        </div>
      </section>

    <footer className="section footer-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3 mb-5">
            <ul className="list-unstyled link">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
             <li><a href="#">Rooms</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <ul className="list-unstyled link">
              <li><a href="#">The Rooms &amp; Suites</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Restaurant</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-5 pr-md-5 contact-info">
         
            <p><span className="d-block"><span className="ion-ios-location h5 mr-3 text-primary"></span>Address:</span> <span> 198 West 21th Street,Suite 721 New York NY 10016</span></p>
            <p><span className="d-block"><span className="ion-ios-telephone h5 mr-3 text-primary"></span>Phone:</span> <span> (+1) 435 3533</span></p>
            <p><span className="d-block"><span className="ion-ios-email h5 mr-3 text-primary"></span>Email:</span> <span> info@domain.com</span></p>
          </div>
          <div className="col-md-3 mb-5">
            <p>Sign up for our newsletter</p>
            <form action="#" className="footer-newsletter">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email..."/>
                <button type="submit" className="btn"><span className="fa fa-paper-plane"></span></button>
              </div>
            </form>
          </div>
        </div>
        <div className="row pt-5">
          <p className="col-md-6 text-left">
            
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
           
          </p>
            
          <p className="col-md-6 text-right social">
            <a href="#"><span className="fa fa-tripadvisor"></span></a>
            <a href="#"><span className="fa fa-facebook"></span></a>
            <a href="#"><span className="fa fa-twitter"></span></a>
            <a href="#"><span className="fa fa-linkedin"></span></a>
            <a href="#"><span className="fa fa-vimeo"></span></a>
          </p>
        </div>
      </div>
    </footer>
    
    <script src="js2/jquery-3.3.1.min.js"></script>
    <script src="js2/jquery-migrate-3.0.1.min.js"></script>
    <script src="js2/popper.min.js"></script>
    <script src="js2/bootstrap.min.js"></script>
    <script src="js2/owl.carousel.min.js"></script>
    <script src="js2/jquery.stellar.min.js"></script>
    <script src="js2/jquery.fancybox.min.js"></script>
    
    
    <script src="js2/aos.js"></script>
    
    <script src="js2/bootstrap-datepicker.js"></script> 
    <script src="js2/jquery.timepicker.min.js"></script> 

    

    <script src="js2/main.js"></script>
  </body>
</html>
       
      );
    };
    
    export default HomeUser;