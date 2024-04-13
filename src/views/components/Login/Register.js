import React, { useEffect, useState } from "react";
import "./assets/css/styles.min.css";
import { Link } from "react-router-dom";
import useAuth from "@api/useAuth";
import { toast } from "react-toastify";

import img1 from './assets/images/logos/dark-logo.svg'


const Register = () => {

  const { register} = useAuth();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    Username: '',
    Password: '',
    Email: '',
    PhoneNumber: '',
    FullName: ''
  });
 


  const handleChangeValue = async (e) =>  {
    const {id,value} = e.target
    setFormData({ ...formData, [id]: value });
  }

  const handleRegister = async () =>  {
    const {success,data} =  await register(formData)
      console.log(success,data);
      if(!success || (data.status == 'Error')) {
        toast.error(data.message)
      }
  }
  return (
    <>
      <div
        class="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div class="d-flex align-items-center justify-content-center w-100" style={{marginTop: '100px'}}>
            <div class="row justify-content-center w-100">
              <div class="col-md-8 col-lg-6 col-xxl-8">
                <div class="card mb-0">
                  <div class="card-body">
                    <a class="text-nowrap logo-img text-center d-block py-3 w-100">
                      <img
                        src={img1}
                        width="180"
                        alt=""
                      />
                    </a>
                    <p class="text-center">Your Social Campaigns</p>
                    <form>
                      <div className="row"> 
                      <div class="mb-3 col-sm-6">
                        <label for="username" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="Username"
                          aria-describedby="textHelp"
                          value={formData.Username}
                          onChange={handleChangeValue}
                        />
                      </div>
                      <div class="mb-3 col-sm-6">
                        <label for="PhoneNumber" class="form-label">
                        PhoneNumber
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="PhoneNumber"
                          aria-describedby="textHelp"
                          value={formData.PhoneNumber}
                          onChange={handleChangeValue}
                        />
                      </div>
                      <div class="mb-3 col-sm-6">
                        <label for="FullName" class="form-label">
                        FullName
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="FullName"
                          aria-describedby="textHelp"
                          value={formData.FullName}
                          onChange={handleChangeValue}
                        />
                      </div>
                      <div class="mb-3 col-sm-6">
                        <label for="email" class="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          aria-describedby="emailHelp"
                          value={formData.email}
                          onChange={handleChangeValue}
                        />
                        {
                          error && (
                            <div className="bg-red-800 p-4 font-bold text-white">
                            {error}
                          </div>
                          )
                        }
                      </div>
                      <div class="mb-3 col-sm-6">
                        <label for="password" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          value={formData.password}
                          onChange={handleChangeValue}
                        />
                      </div>
                      </div>
                      
                      <a class="btn btn-primary w-100 py-8 fs-10 mb-4 rounded-2" onClick={handleRegister}>
                        Sign Up
                      </a>
                      <div class="d-flex align-items-center justify-content-center">
                        <Link class="text-primary fw-bold ms-2" to={"/login"}>
                          Sign In
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
