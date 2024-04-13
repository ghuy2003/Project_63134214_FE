import React, { useEffect, useState } from "react";
import "./assets/css/styles.min.css";
import { Link } from "react-router-dom";
import useAuth from "@api/useAuth";
import { toast } from "react-toastify";

import img1 from "./assets/images/logos/dark-logo.svg";
import { useFormik } from "formik";
import { validateChangeAndBlurInput } from "@utils/validateChangeAndBlurInput";

const Register = () => {
  const { register } = useAuth();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
    Email: "",
    PhoneNumber: "",
    FullName: "",
  });

  const handleChangeValue = async (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRegister = async () => {
    const { success, data } = await register(formData);
    console.log(success, data);
    if (!success || data.status == "Error") {
      toast.error(data.message);
    }
  };

  // Validate
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Please enter your usename";
    } else if (values.username.length <= 3) {
      errors.username = "Username must be at least 3 characters";
    } else if (values.username.length >= 50) {
      errors.username = "Username must not exceed 50 characters";
    }

    if (!values.fullname) {
      errors.fullname = "Please enter your fullname";
    } else if (values.fullname.length <= 3) {
      errors.fullname = "Fullname must be at least 3 characters";
    } else if (values.fullname.length >= 50) {
      errors.fullname = "Fullname must not exceed 50 characters";
    }

    // if (!values.lastName) {
    //   errors.lastName = "Required";
    // } else if (values.lastName.length > 20) {
    //   errors.lastName = "Must be 20 characters or less";
    // }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Please enter your password";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
    }

    if (!values.phone) {
      errors.phone = "Please enter your phone number";
    } else if (!/^\d{10}$/i.test(values.phone)) {
      errors.phone =
        "Invalid phone number. Please enter a 10-digit phone number";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    validate,

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
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
          <div
            class="d-flex align-items-center justify-content-center w-100"
            style={{ marginTop: "100px" }}
          >
            <div class="row justify-content-center w-100">
              <div class="col-md-8 col-lg-6 col-xxl-8">
                <div class="card mb-0">
                  <div class="card-body">
                    <a class="text-nowrap logo-img text-center d-block py-3 w-100">
                      <img src={img1} width="180" alt="" />
                    </a>
                    <p class="text-center">Your Social Campaigns</p>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="row">
                        <div class="mb-3 col-sm-6">
                          <label for="username" class="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            class={`form-control ${
                              formik.touched.username
                                ? formik.errors.username
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            id="username"
                            name="username"
                            aria-describedby="textHelp"
                            value={formik.values.username}
                            onChange={(e) =>
                              validateChangeAndBlurInput(e, "username", formik)
                            }
                          />
                          {formik.touched.username && formik.errors.username ? (
                            <div className="invalid-feedback">
                              {formik.errors.username}
                            </div>
                          ) : null}
                        </div>
                        <div class="mb-3 col-sm-6">
                          <label for="PhoneNumber" class="form-label">
                            PhoneNumber
                          </label>
                          <input
                            type="text"
                            class={`form-control ${
                              formik.touched.phone
                                ? formik.errors.phone
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            id="PhoneNumber"
                            aria-describedby="textHelp"
                            name="phone"
                            value={formik.values.phone}
                            onChange={(e) =>
                              validateChangeAndBlurInput(e, "phone", formik)
                            }
                          />

                          {formik.touched.phone && formik.errors.phone ? (
                            <div className="invalid-feedback">
                              {formik.errors.phone}
                            </div>
                          ) : null}
                        </div>
                        <div class="mb-3 col-sm-6">
                          <label for="FullName" class="form-label">
                            FullName
                          </label>
                          <input
                            type="text"
                            class={`form-control ${
                              formik.touched.fullname
                                ? formik.errors.fullname
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            id="FullName"
                            aria-describedby="textHelp"
                            value={formik.values.fullname}
                            onChange={(e) =>
                              validateChangeAndBlurInput(e, "fullname", formik)
                            }
                            name="fullname"
                          />
                          {formik.touched.fullname && formik.errors.fullname ? (
                            <div className="invalid-feedback">
                              {formik.errors.fullname}
                            </div>
                          ) : null}
                        </div>
                        <div class="mb-3 col-sm-6">
                          <label for="email" class="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            class={`form-control ${
                              formik.touched.email
                                ? formik.errors.email
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            id="email"
                            aria-describedby="emailHelp"
                            value={formik.values.email}
                            onChange={(e) =>
                              validateChangeAndBlurInput(e, "email", formik)
                            }
                            name="email"
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <div className="invalid-feedback">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                        <div class="mb-3 col-sm-6">
                          <label for="password" class="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            class={`form-control ${
                              formik.touched.password
                                ? formik.errors.password
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            id="password"
                            value={formik.values.password}
                            onChange={(e) =>
                              validateChangeAndBlurInput(e, "password", formik)
                            }
                            name="password"
                          />

                          {formik.touched.password && formik.errors.password ? (
                            <div className="invalid-feedback">
                              {formik.errors.password}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <a
                        class="btn btn-primary w-100 py-8 fs-10 mb-4 rounded-2"
                        onClick={handleRegister}
                      >
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
