import React, { useState } from "react";
import useTranslate from "@lang";
import useAuth from "@api/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useUser from "@store/useUser";
import { ToastContainer, toast } from 'react-toastify';
import { message, notification } from 'antd'
import 'react-toastify/dist/ReactToastify.css';
import img1 from './assets/images/logos/dark-logo.svg'
import "@styles/scss/custom-input.scss";
import "./assets/css/styles.min.css";

const Login = () => {
  const t = useTranslate();
  const { changeData } = useUser();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => setUsername(e.target.value);

  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    const { success, data } = await login({ UserName: username, Password: password });
    console.log(success,data);
    if (data.status == "Error") {
      toast.error(data.message)
    } else  {
      
      toast.success(data.message)
    }
  };

  return (
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
            <div class="col-md-12 col-lg-6 col-xxl-4">
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
                    <div class="mb-3">
                      <label for="usernameinput" class="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="usernameinput"
                        onChange={(e) => handleChangeUsername(e)}
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-4">
                      <label for="passwordinput" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        onChange={(e) => handleChangePassword(e)}
                        class="form-control"
                        id="passwordinput"
                      />
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-4">
                      <a class="text-primary fw-bold">Forgot Password ?</a>
                    </div>
                    <a
                      type="submit"
                      onClick={() => handleLogin()}
                      class="btn btn-primary w-100 py-8 fs-6 mb-4 rounded-2"
                    >
                      Sign In
                    </a>
                    <div class="d-flex align-items-center justify-content-center">
                      <Link
                        class="text-primary fw-bold ms-2"
                        to={"/register"}
                      >
                        Create an account
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
  );
};

export default Login;
