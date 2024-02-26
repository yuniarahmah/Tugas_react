import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

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
          title: "Login gagal",
          text: "Harap ulangi nama email atau passsword anda",
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
                  Log in
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

                <Button color="info" onClick={handleLogin}>
                  Login
                </Button>
                <p className="mt-3">
                  Don't have an account?{" "}
                  <Link to="/register" className="link-info">
                    Register here
                  </Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
