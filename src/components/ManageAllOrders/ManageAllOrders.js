import React from 'react';
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
    return (
      <div>
        <div class="container">
          <h2 className="text-center pt-5">Manage All Orders</h2>
          <div class="row">
            <div class="col-md-12 p-5">
              <table
                id=""
                class="table table-striped table-bordered"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th class="th-sm">SL NO</th>
                    <th class="th-sm">ID</th>
                    <th class="th-sm">NAME</th>
                    <th class="th-sm">USER</th>
                    <th class="th-sm">CANCEL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="th-sm">01</td>
                    <td class="th-sm">আইটি কোর্স</td>
                    <td class="th-sm">মোবাইল এবং ওয়েব এপ্লিকেশন ডেভেলপমেন্ট</td>
                    <td class="th-sm">Rokunuzzaman Bhuiya</td>
                    <td class="th-sm">
                      <a href="">
                        <i class="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td class="th-sm">01</td>
                    <td class="th-sm">আইটি কোর্স</td>
                    <td class="th-sm">মোবাইল এবং ওয়েব এপ্লিকেশন ডেভেলপমেন্ট</td>
                    <td class="th-sm">Rokunuzzaman Bhuiya</td>
                    <td class="th-sm">
                      <a href="">
                        <i class="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="th-sm">01</td>
                    <td class="th-sm">আইটি কোর্স</td>
                    <td class="th-sm">মোবাইল এবং ওয়েব এপ্লিকেশন ডেভেলপমেন্ট</td>
                    <td class="th-sm">Rokunuzzaman Bhuiya</td>
                    <td class="th-sm">
                      <a href="">
                        <i class="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="th-sm">01</td>
                    <td class="th-sm">আইটি কোর্স</td>
                    <td class="th-sm">মোবাইল এবং ওয়েব এপ্লিকেশন ডেভেলপমেন্ট</td>
                    <td class="th-sm">Rokunuzzaman Bhuiya</td>
                    <td class="th-sm">
                      <a href="">
                        <i class="fas fa-trash-alt"></i>
                      </a>
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