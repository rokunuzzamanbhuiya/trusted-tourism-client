import React from 'react';
import "./AddNewService.css";

const AddNewService = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div id="serviceAddForm" class="w-100">
                            <h2 class="m-5 text-center">Add New Service</h2>
                            <input type="text" id="serviceNameAddId" class="form-control mb-4" placeholder="Name"/>
                            <input type="text" id="serviceDesAddId" class="form-control mb-4" placeholder="Description" />
                            <input type="text" id="serviceDesAddId" class="form-control mb-4" placeholder="Price"/>
                            <input type="text" id="serviceImgAddId" class="form-control mb-4" placeholder="Image url link"/>
                        </div>
                        <div class="text-end pt-2 pb-5">
                            <button id="serviceAddConfirmBtn" type="button" class="btn add-btn">Add New Service</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddNewService;