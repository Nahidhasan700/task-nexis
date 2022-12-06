import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const user = {
      email: "abc@example.com",
      password: "SuperSecretPassword",
    };

    fetch("https://test.nexisltd.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("ultimateAccessToken", data.access_token);
        navigate("/AttendanceForm");
      });
  };
  return (
    <div>
      <div className="loginHeading">
        <h2 className="text-center my-5 "> Login Form </h2>
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label"></label>
          <input
            type="email"
            placeholder="Enter Your email"
            className="form-control mb-5"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />

          <label for="exampleInputPassword1" class="form-label"></label>
          <input
            type="password"
            placeholder="Enter Your password"
            className="form-control"
            id="exampleInputPassword1"
            pattern=".{8,}"
            required
          />
          <div id="PasswordHelp" className="form-text ps-1 ms-5">
            Your Password must be atleast 8 character
          </div>
        </div>
        <div className="d-flex  justify-content-center loginButton">
          <button type="submit" class="btn btn-lg btn-primary">
            Log In
          </button>
        </div>
      </form>

      <div className="d-flex  justify-content-center">
        <p className="pt-2"> Don't have any account ? </p>
        <Link to="/">
          <button type="button" class="btn btn-link fw-semibold">
            Signup here{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
