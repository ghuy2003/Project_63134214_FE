import React, { useState } from "react";
import useTranslate from "@lang";
import useAuth from "@api/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useUser from "@store/useUser";

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
    const { success, data } = await login({ username, password });
    if (success) {
      const { token, username } = data;
      changeData({ token, username });
      navigate("/");
    }
  };

  return (
    // <div
    // 	style={{
    // 		maxHeight: '100vh',
    // 		minHeight: '100vh',
    // 		backgroundColor: '#323437',
    // 		display: 'flex',
    // 		justifyContent: 'center',
    // 		alignItems: 'center'
    // 	}}
    // >
    // 	<div
    // 		style={{
    // 			padding: 10,
    // 			maxWidth: 300
    // 		}}
    // 	>
    // 		<Row gutter={[10, 20]}>
    // 			<Col span={24}>
    // 				<h2
    // 					style={{
    // 						color: '#d1d0c5',
    // 						textAlign: 'center',
    // 						fontSize: 30,
    // 					}}
    // 				>
    // 					Dashboard
    // 				</h2>
    // 			</Col>
    // 			<Col span={24}>
    // 				<Input
    // 					className='antd-custom-input'
    // 					size='large'
    // 					prefix={<FontAwesomeIcon icon={faUser} color='#d1d0c5' />}
    // 					placeholder={t('username').toUpperFirst()}
    // 					value={username}
    // 					onChange={handleChangeUsername}
    // 					required
    // 				/>
    // 			</Col>
    // 			<Col span={24}>
    // 				<Input.Password
    // 					className='antd-custom-input'
    // 					size='large'
    // 					prefix={<FontAwesomeIcon icon={faLock} color='#d1d0c5' />}
    // 					placeholder={t('password').toUpperFirst()}
    // 					value={password}
    // 					onChange={handleChangePassword}
    // 					required
    // 				/>
    // 			</Col>
    // 			<Col span={24}>
    // 				<Button
    // 					style={{
    // 						color: '#d1d0c5',
    // 						fontWeight: 500,
    // 						backgroundColor: '#646669',
    // 						border: 'none'
    // 					}}
    // 					block
    // 					size='large'
    // 					onClick={handleLogin}
    // 				>
    // 					{t('login').toCapitalize()}
    // 				</Button>
    // 			</Col>
    // 		</Row>
    // 	</div>
    // </div>

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
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="mb-4">
                        <label for="passwordinput" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
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
                        onclick="Register()"
                        class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                      >
                        Sign In
                      </a>
                      <div class="d-flex align-items-center justify-content-center">
                        <p class="fs-4 mb-0 fw-bold">New to Modernize?</p>
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
    </>
  );
};

export default Login;
