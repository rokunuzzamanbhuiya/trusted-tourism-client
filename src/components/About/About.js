import React from 'react';
import "./About.css";
import eventone from "../../images/about/event01.png";
import eventtwo from "../../images/about/event02.png";
import eventthree from "../../images/about/event03.png";
import eventfour from "../../images/about/event04.png";
import eventfive from "../../images/about/event05.png";
import eventsix from "../../images/about/event06.png";


const About = () => {
    return (
      <div class="about">
        <div className="container my-5">
          <h5 className="text-center fw-bolder">Our Best Events</h5>
          <h1 className="text-center fw-bolder">
            Our <span style={{ color: "#e84501" }}>Events</span>
          </h1>
          <p className="text-center mb-5">
            To contribute to positive change and achieve our <br />{" "}
            sustainability goals with many extraordinary
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={eventone} alt="" />
                  </div>
                  <h5>World Tours</h5>
                  <hr className="m-2" />
                  <p>
                    Our program is make you enjoy and explore the life. we ‘ll
                    be happy when see you and your family happy.
                  </p>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={eventtwo} alt="" />
                  </div>
                  <h5>Airline Tickets</h5>
                  <hr className="m-2" />
                  <p>
                    Our program is make you enjoy and explore the life. we ‘ll
                    be happy when see you and your family happy.
                  </p>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={eventthree} alt="" />
                  </div>
                  <h5>Hotel Reservation</h5>
                  <hr className="m-2" />
                  <p>
                    Our program is make you enjoy and explore the life. we ‘ll
                    be happy when see you and your family happy.
                  </p>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={eventfour} alt="" />
                  </div>
                  <h5>Adventure Tours</h5>
                  <hr className="m-2" />
                  <p>
                    Our program is make you enjoy and explore the life. we ‘ll
                    be happy when see you and your family happy.
                  </p>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={eventfive} alt="" />
                  </div>
                  <h5>Ocean Tours</h5>
                  <hr className="m-2" />
                  <p>
                    Our program is make you enjoy and explore the life. we ‘ll
                    be happy when see you and your family happy.
                  </p>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row m-2 text-center">
                <div className="border bg-light p-5 mb-4">
                  <div className="user-image">
                    <img className="p=5 mb-3" src={eventsix} alt="" />
                  </div>
                  <h5>Medical Tours</h5>
                  <hr className="m-2" />
                  <p>
                    Our program is make you enjoy and explore the life. we ‘ll
                    be happy when see you and your family happy.
                  </p>
                  <hr className="m-2" />
                  <div>
                    <i className="fab fa-facebook-square p-2"></i>
                    <i className="fab fa-twitter-square p-2"></i>
                    <i className="fab fa-linkedin p-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;