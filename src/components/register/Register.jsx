import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import '../register/register.css'
export const Register = () => {
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  let [spinner, setspinner] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async (values) => {
      try {
        setspinner(true);
        await axios.post("https://tarmeezacademy.com/api/v1/register", values);
        Swal.fire({
          title: "successfully!",
          icon: "success",
          showCancelButton: false,
          timer: 1000,
        });
        navigate("/login");
      } catch (err) {
        setspinner(false);
        if (axios.isAxiosError(err) && err.response) {
          const { data } = err.response;
          setUsernameError(data.errors?.username || "");
          setEmailError(data.errors?.email || "");
          setFormErrors(data.errors || {});
        } else {
          console.error("Unexpected error:", err);
        }
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Username is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.name) {
        errors.name = "Name is required";
      }
      return errors;
    },
  });

  return (
    <div className="register">
      {usernameError || emailError ? (
        <div className="alert alert-danger" role="alert">
          {usernameError && <p>{usernameError}</p>}
          {emailError && <p>{emailError}</p>}
        </div>
      ) : null}
      <form className="m-auto" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username ? (
            <p className="text-danger">{formik.errors.username}</p>
          ) : null}
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <p className="text-danger">{formik.errors.password}</p>
          ) : null}
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <p className="text-danger">{formik.errors.name}</p>
          ) : null}
          <div className="form-down">
          <button type="submit" className="button">
          {spinner ? (
            <section class="dots-container">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </section>
          ) : (
            "Register"
          )}
        </button>
        <p>
          you have account 
        <Link to='/login'>  Login</Link>
        </p>
          </div>
      </form>
    </div>
  );
};
