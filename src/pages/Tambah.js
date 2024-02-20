import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function Tambah() {
  const [newProduct, setNewProduct] = useState({
    nama_lengkap: "",
    nama_panggilan: "",
    kelas: "",
    gender: "",
  });

  // State untuk menyimpan jumlah data yang sudah ada
  const [dataCount, setDataCount] = useState(0);

  // Ambil jumlah data yang sudah ada saat komponen dimuat
  useEffect(() => {
    axios
      .get("http://localhost:3030/siswa")
      .then((response) => {
        setDataCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching data count:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tentukan ID baru sesuai dengan jumlah data yang sudah ada
    const newId = dataCount + 1;

    // Set ID baru pada produk yang akan ditambahkan
    const productWithId = { ...newProduct, id: newId };

    axios
      .post("http://localhost:3030/siswa", productWithId)
      .then((response) => {
        console.log("Product successfully added:", response.data);
      
        // Show success message
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
        console.error("Error adding product:", error);
      
        // Show error message
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menambahkan produk. Silakan coba lagi.",
        });
      });
      
  };

  return (
    <>
    <Card className="mx-auto my-3 p-4" style={{ maxWidth: "900px", marginBottom: "100%" }}>
      <h2 className="text-center mb-4">Tambah Data</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nama_lengkap">
          <Form.Label>Nama Lengkap:</Form.Label>
          <Form.Control
            type="text"
            name="nama_lengkap"
            value={newProduct.nama_lengkap}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            required
          />
        </Form.Group>
        <Form.Group controlId="nama_panggilan">
          <Form.Label> nama Panggilan:</Form.Label>
          <Form.Control
            type="text"
            name="nama_panggilan"
            value={newProduct.nama_panggilan}
            onChange={handleChange}
            placeholder="Nama Panggilan"
            required
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Gender:</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={newProduct.gender}
            onChange={handleChange}
            required
          >
            <option value="">Pilih Gender</option>
            <option value="Perempuan">Perempuan</option>
            <option value="Laki-laki">Laki Laki</option>
            {/* Add more gender options if needed */}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="kelas">
          <Form.Label>Kelas:</Form.Label>
          <Form.Control
            type="text"
            name="kelas"
            value={newProduct.kelas}
            onChange={handleChange}
            placeholder="Kelas"
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
  </>
  );
}

export default Tambah;
