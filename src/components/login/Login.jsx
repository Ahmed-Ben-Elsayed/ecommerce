import React, { useState } from "react";
import "../login/login.css";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  let [allow, setallow] = useState(false);
  const navigate = useNavigate();
  let [spinner, setspinner] = useState(false);
  let [error, seterror] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setspinner(true);
        await axios.post("https://tarmeezacademy.com/api/v1/login", values);
        Swal.fire({
          title: "login  successfully!",
          icon: "success",
          showCancelButton: false,
          timer: 1000,
        });
        setallow(true);
        navigate("/");
        window.localStorage.setItem("logedin", allow);
      } catch (err) {
        setspinner(false);
        setallow(false);
        seterror(err.response.data.errors.email);
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Username is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
  });

  return (
    <div className="login">
      {error ? (
        <div className="alert alert-danger" role="alert">
          <p>{error}</p>
        </div>
      ) : (
        ""
      )}
      <h1>Hello, please login</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          className="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}

        <input
          type="password"
          className="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
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
            "login"
          )}
        </button>
        <p>
          if you don't have account <Link to="/register">Register</Link>{" "}
        </p>
      </form>
    </div>
  );
};
