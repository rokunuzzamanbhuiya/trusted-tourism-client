import React from 'react';
import { Link } from 'react-router-dom';
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
    return (
      <div>
        <div className="container">
          <h2 className="text-center pt-5">Manage All Orders</h2>
          <div className="row">
            <div className="col-md-12 p-5">
              <table
                id=""
                className="table table-striped table-bordered"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th className="th-sm">SL NO</th>
                    <th className="th-sm">ID</th>
                    <th className="th-sm">NAME</th>
                    <th className="th-sm">USER</th>
                    <th className="th-sm">CANCEL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="th-sm">01</td>
                    <td className="th-sm">101</td>
                    <td className="th-sm">Discover Depth of Beach</td>
                    <td className="th-sm">Rokunuzzaman Bhuiya</td>
                    <td className="th-sm">
                      <Link to="">
                        <i className="fas fa-trash-alt"></i>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="th-sm">02</td>
                    <td className="th-sm">102</td>
                    <td className="th-sm">The Dark Forest Adventure</td>
                    <td className="th-sm">Rokunuzzaman Bhuiya</td>
                    <td className="th-sm">
                      <Link to="">
                        <i className="fas fa-trash-alt"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="th-sm">03</td>
                    <td className="th-sm">103</td>
                    <td className="th-sm">Discover Depth of Beach</td>
                    <td className="th-sm">Rokunuzzaman Bhuiya</td>
                    <td className="th-sm">
                      <Link to="">
                        <i className="fas fa-trash-alt"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="th-sm">04</td>
                    <td className="th-sm">104</td>
                    <td className="th-sm">Moscow Red City Land</td>
                    <td className="th-sm">Rokunuzzaman Bhuiya</td>
                    <td className="th-sm">
                      <Link to="">
                        <i className="fas fa-trash-alt"></i>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ManageAllOrders;