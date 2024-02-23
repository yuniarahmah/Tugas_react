import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://localhost:3030/data");
      const admin = response.data.find(
        (x) => x.email === email && x.password === password
      );

      if (admin) {
        localStorage.setItem("email", admin.email);
        localStorage.setItem("id", admin.id);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in!",
          timer: 1000,
          showConfirmButton: false,
        }).then(() => {
          history.push("/");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password",
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin} method="POST">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group mt-3">
              <label>Email address:</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password:</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p>
              Belum punya akun? Silahkan <Link to="/register">Register</Link>
            </p>
            <div className="d-grid gap-2 mt-3">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;