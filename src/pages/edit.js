import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function Edit() {
  const { id } = useParams();
  // const history = useHistory();
  const [product, setProduct] = useState({
    nama_panggilan: "",
    nama_lengkap: "",
    kelas: "",
    gender: "", // Add gender field
  });
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/siswa/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
    setIsModified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isModified) {
      Swal.fire({
        icon: "warning",
        title: "Perhatian!",
        text: "Anda harus mengubah setidaknya satu bidang untuk memperbarui produk.",
      });
      return;
    }
    axios
      .put(`http://localhost:3030/siswa/${id}`, product)
      .then((response) => {
        console.log("Produk berhasil diperbarui:", response.data);
        Swal.fire({
          icon: "success",
          title: "Sukses!",
          text: "Data berhasil ditambahkan!",
          showConfirmButton: false, // Hide the default "OK" button
          timer: 2000, // Set the timer for 3 seconds (adjust as needed)
        }).then(() => {
          // Redirect after the timer expires
          window.location.href = "/lengkap";
        });
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal memperbarui produk. Silakan coba lagi.",
        });
      });
  };

  return (
    <Card className="mx-auto my-3 p-4" style={{ maxWidth: "900px" }}>
      <h2 className="text-center mb-4">Edit</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nama_lengkap">
          <Form.Label>Nama Lengkap:</Form.Label>
          <Form.Control
            type="text"
            name="nama_lengkap"
            value={product.nama_lengkap}
            onChange={handleChange}
            placeholder="Nama lengkap"
            required
          />
        </Form.Group>
        <Form.Group controlId="nama_panggilan">
          <Form.Label>Nama Panggilan:</Form.Label>
          <Form.Control
            type="text"
            name="nama_panggilan"
            value={product.nama_panggilan}
            onChange={handleChange}
            // placeholder="Nama panggilan"
            required
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Gender:</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={product.gender}
            onChange={handleChange}
            required
          >
            <option value={product.gender}>{product.gender}</option>
            <option value="Perempuan">Perempuan</option>
            <option value="Laki-laki">Laki laki</option>
            {/* Add more gender options if needed */}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="kelas">
          <Form.Label>Kelas:</Form.Label>
          <Form.Control
            type="text"
            name="kelas"
            value={product.kelas}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="text-center my-2">
          <Button variant="primary" type="submit">
            Simpan
          </Button>
        </div>
      </Form>
    </Card>
  );
}

export default Edit;