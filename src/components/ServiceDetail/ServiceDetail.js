import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import './ServiceDetail.css';


const ServiceDetail = () => {

  const { detailId } = useParams();

  const [singleData, setSingleData] = useState([{}]);

  useEffect(() => {
    fetch("https://grim-plague-97103.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        const showDetail = data.find((detail) => detail.id == detailId);
        setSingleData(showDetail);
        console.log(showDetail);
      });
  }, [detailId]);

  return (
    <div className="sdetail">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="justify-content-center align-items-center sdetail-title-head">
              Our Special Tour
            </h2>
            <div className="d-flex justify-content-center align-items-center p-2">
              <img src={singleData.picture} className="p-2 w-50" alt="" />
            </div>
            <h3 className="justify-content-center align-items-center sdetail-title">
              {singleData.name}
            </h3>
            <p className="text-center detail-para">{singleData.detail}</p>
            <h3 className="justify-content-center align-items-center sdetail-title pb-4">
              ${singleData.price}
            </h3>
            <hr />
            <h3 className="p-4 text-center">Please Fillup The Form For Confirm Your Order:</h3>
            <div>
              <div className="col-md-12 cnfm-form">
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
                      placeholder="Adress"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="sub"
                      type="text"
                      className="form-control"
                      id="sub"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="sub"
                      type="text"
                      className="form-control"
                      id="sub"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="sub"
                      type="date"
                      className="form-control"
                      id="sub"
                      placeholder="Date"
                    />
                  </div>

                  <div className="text-center">
                    <Link className="btn sdetail-btn" to="/confirm">
                      Confirm Your Order
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

