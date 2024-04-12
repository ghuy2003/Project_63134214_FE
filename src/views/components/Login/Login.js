import React, { useState } from "react";
import useTranslate from "@lang";
import useAuth from "@api/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useUser from "@store/useUser";
import {NotificationManager} from 'react-notifications'
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
    if (success) {
      // NotificationManager.success(data., 'Title here');
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
        <div class="d-flex align-items-center justify-content-center w-100">
          <div class="row justify-content-center w-100">
            <div class="col-md-8 col-lg-6 col-xxl-3">
              <div class="card mb-0">
                <div class="card-body">
                  <a class="text-nowrap logo-img text-center d-block py-3 w-100">
                    <img
                      src="../assets/images/logos/dark-logo.svg"
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
                      <div class="form-check">
                        <input
                          class="form-check-input primary"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                          checked
                        />
                        <label
                          class="form-check-label text-dark"
                          for="flexCheckChecked"
                        >
                          Remeber this Device
                        </label>
                      </div>
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
