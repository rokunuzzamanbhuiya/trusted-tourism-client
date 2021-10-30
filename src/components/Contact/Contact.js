import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
    return (
      <div className="contact">
        <div className="container">
          <h5 className="text-center fw-bolder">Contact With Us</h5>
          <h1 className="text-center fw-bolder">
            Send <span style={{ color: "#fe8c01" }}>Message</span>
          </h1>
          <p className="text-center mb-5">
            To contribute to positive change and achieve our <br />{" "}
            sustainability goals with many extraordinary
          </p>
          <div className=" row">
            <div className="col-md-2">
              <div className="home">
                <i class="fas fa-clock"></i>
                <h5 className=" mt-2">Mon To Fri</h5>
                <p>8am to 5pm</p>
              </div>
              <div className="email">
                <i class="fas fa-clock"></i>
                <h5 className=" mt-2">Sat</h5>
                <p>8am to 11am</p>
              </div>
              <div className="phone">
                <i class="fas fa-clock"></i>
                <h5 className=" mt-2">Sun</h5>
                <p>Closed</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="home">
                <i className="fas fa-map-marker-alt"></i>
                <h5 className="mt-2">Home</h5>
                <p>558, Shaheenbag, Tejgaon, Dhaka</p>
              </div>
              <div className="email">
                <i className="fas fa-envelope"></i>
                <h5 className=" mt-2">Email</h5>
                <p>nextcareertech@gmail.com</p>
              </div>
              <div className="phone">
                <i className="fas fa-mobile-alt"></i>
                <h5 className=" mt-2">Phone</h5>
                <p>+880 1616 888 888</p>
              </div>
            </div>
            <div className="col-md-7">
              <form action="" method="">
                <div className="name">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="email">
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="sub"
                    type="text"
                    className="form-control"
                    id="sub"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="msg"
                    className="form-control"
                    id="mag"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="text-right">
                  <Link className="btn btn-danger contactbtn" to="/">
                    Send
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;