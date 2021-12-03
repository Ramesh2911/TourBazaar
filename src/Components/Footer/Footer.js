import React from "react";
import { BsWhatsapp } from 'react-icons/bs'
import { IconContext } from "react-icons";
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'

import { Link } from "react-router-dom";
//import { Row, Col } from "react-bootstrap";
import "./Footer.css";

export function Footer() {
  return (
    <div>
      <footer class="mainfooter" role="contentinfo">
        <div class="footer-middle">
          <div class="container">
            <div class="row">
              <div class=" col-lg-3 col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>OverView</h4>
                  <ul class="list-unstyled">
                    <li>
                      {" "}
                      <a href="/home">Home </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/about_page">About </a>
                    </li>
                    <Link to="/contact_page">
                      <li> Contact Us</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>Our Services</h4>
                  <ul class="list-unstyled">
                    <li> National Tour </li>
                    <li>International Tour </li>
                  </ul>
                </div>
              </div>

              {/* <div class="col-md-3">
                <h4> Follow Us </h4>
                <ul class="social-network social-circle">
                  <IconContext.Provider value={{ color: "green", size: "2em" }}>
                    <li>
                      <a href="https://web.whatsapp.com">
                        {" "}
                        <BsWhatsapp />
                      </a>
                    </li>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: "blue", size: "2em" }}>
                    <li>
                      <a href="https://www.facebook.com">
                        {" "}
                        <FaFacebookSquare />
                      </a>
                    </li>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ color: "lightblue", size: "2em" }}
                  >
                    <li>
                      <a href="https://www.linkedin.com/signup">
                        {" "}
                        <AiFillLinkedin />
                      </a>
                    </li>
                  </IconContext.Provider>
                </ul>
              </div> */}

<div class="col-md-3">  
            <h4> Follow Us </h4>  
            <ul class="social-network social-circle"> 
            <IconContext.Provider value={{ color: "green", size: "2em" }}>
            <li><a href="https://web.whatsapp.com"> <BsWhatsapp/></a></li>  
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "blue", size: "2em" }}>
            <li><a href="https://www.facebook.com"> <FaFacebookSquare/></a></li>  
        </IconContext.Provider> 
        <IconContext.Provider value={{ color: "lightblue", size: "2em" }}>
            <li><a href="https://www.linkedin.com/signup"> <AiFillLinkedin/></a></li>  
        </IconContext.Provider> 
            </ul>               
    </div> 
              <div class="col-md-3">
                <p class="headline">Subcribe for More Info</p>
                <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email..."
                  ></input>
                  <button id="fbtn">Subcribe</button>
                </form>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 copy">
                <p class="text-center">
                
                  © Copyright 2021 - TourBazaar.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
