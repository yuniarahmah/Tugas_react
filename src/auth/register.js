import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastId, setLastId] = useState(0); // State untuk menyimpan ID terakhir

  // Mendapatkan ID terakhir setelah komponen di-mount
  useEffect(() => {
    const fetchLastId = async () => {
      try {
        const response = await axios.get('http://localhost:3030/data');
        const data = response.data;
        const lastId = data.length > 0 ? data[data.length - 1].id : 0;
        setLastId(lastId);
      } catch (error) {
        console.error('Error fetching last ID:', error);
      }
    };

    fetchLastId();
  }, []);

  async function handleRegister(e) {
    e.preventDefault();

    try {
      // Gunakan ID terakhir dan tambahkan 1 untuk mendapatkan ID baru
      const newId = lastId + 1;

      // Send registration data to the backend server
      const response = await axios.post('http://localhost:3030/data', {
        id: newId,
        email,
        password,
      });

      console.log('Registration successful:', response.data);

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'You have successfully registered.',
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        // Redirect after the timer expires
        window.location.href = '/login';
      });
    } catch (error) {
      console.error('Error during registration:', error);

      // Display error message
      const errorMessage = error.response?.data?.message || 'Failed to register. Please try again.';
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed!',
        text: errorMessage,
      });
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleRegister}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
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
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;