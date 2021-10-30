import React from 'react';
import "./Confirm.css";
import { Link } from 'react-router-dom';

const Confirm = () => {
    return (
      <div>
        <div className="error">
          <div className="row">
            <div className="col-md-12">
              <h1 className="notfoundh1">CONGRATULATIONS!</h1>
              <h2 className="notfoundh2">Your Order Is Confirmed</h2>
              <p className="notfoundp">
                Thanks for stay with us. Have a nice tour.
              </p>
              <Link className="notfound shadow" to="/">
                Go To Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Confirm;