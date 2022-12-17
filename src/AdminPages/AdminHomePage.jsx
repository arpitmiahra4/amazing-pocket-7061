



import React, { useState } from "react";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const AdminHomePage = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="container content mt-4">
        <h5> 📝 Add New User</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="titleHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputtitle1" className="form-label">
              title
              </label>
              <input
                type="title"
                className="form-control"
                id="exampleInputtitle1"
                aria-describedby="titleHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputNumber1" className="form-label">
                Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputNumber1"
              />
            </div>
            {/* radios button inpput ================== */}
            <div className="d-flex flex-row">
              Product type :
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Product_type"
                  value="Male"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Product_type"
                  value="Female"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I Acept Terms And Conditions
              </label>
            </div>
            <button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* col-md-6 ends */}

          <div className="col-md-4 ">
            <div className="profile_section">
              <p>Select Profile Picture :</p>
              <img
                src={
                  localStorage.getItem("img")
                    ? localStorage.getItem("img")
                    : profilePIcDefault
                }
                alt="profile_pic"
                className="img-thumbnail"
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;