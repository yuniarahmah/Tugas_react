import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastId, setLastId] = useState(0);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const fetchLastId = async () => {
      try {
        const response = await axios.get("http://localhost:3030/data");
        const data = response.data;
        const lastId = data.length > 0 ? data[data.length - 1].id : 0;
        setLastId(lastId);
      } catch (error) {
        console.error("Error fetching last ID:", error);
      }
    };

    fetchLastId();
  }, []);

  async function handleRegister(e) {
    e.preventDefault();

    // Validate email and password are not empty
    if (!email.trim() || !password.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Coloum Wajib diisi semua",
        text: "Password atau email anda kosong harap diisi.",
      });
      return;
    }

    // Validate password length
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const newId = lastId + 1;

      const response = await axios.post("http://localhost:3030/data", {
        id: newId,
        email,
        password,
      });

      console.log("Registration successful:", response.data);

      // Reset password error state on successful registration
      setPasswordError("");

      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "You have successfully registered.",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.href = "/login";
      });
    } catch (error) {
      console.error("Error during registration:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Failed to register. Please try again.";

      // Reset password error state on registration failure
      setPasswordError("");

      Swal.fire({
        icon: "error",
        title: "Registration Failed!",
        text: errorMessage,
      });
    }
  }

  return (
    <MDBContainer fluid>
      <MDBRow center>
        <MDBCol md="8">
          <MDBCard
            className="w-75 p-3"
            style={{ boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.3)" }}
          >
            <MDBCardBody>
              <div className="d-flex flex-row ps-5 pt-5">
                <MDBIcon
                  fas
                  icon="crow fa-3x me-3"
                  style={{ color: "#709085" }}
                />
                <span className="h1 fw-bold mb-0">Let's Start</span>
              </div>

              <div className="d-flex flex-column justify-content-center h-custom-2">
                <h3
                  className="fw-normal mb-3 ps-5 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Register
                </h3>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <Button variant="info" onClick={handleRegister}>
                  Register
                </Button>
                <p className="mt-3">
                  Already have an account?{" "}
                  <Link to="/login" className="link-info">
                    Login here
                  </Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <MDBCard style={{ width: '60%', height: '85%', boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.3)' }}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image" className="w-100 h-100" />
          </MDBCard>
        </MDBCol> */}
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
