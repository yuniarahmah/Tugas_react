import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Pagination, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Detail() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Number of users to display per page
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:3030/siswa")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/siswa/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleTambahClick = () => {
    history.push("/tambah");
  };

  const handleEditClick = (id) => {
    history.push(`/edit/${id}`);
  };

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div style={{ marginLeft: "92%" }}>
        <Button
          onClick={handleTambahClick}
          style={{
            border: "10%",
            borderRadius: "10%",
            color: "white",
          }}
        >
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: "2px" }} />
        </Button>
      </div>
      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "8px",
          marginLeft: "20px",
          width: "calc(95% - 10px)",
        }}
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Lengkap</th>
            <th>Nama Panggilan</th>
            <th>Gender</th>
            <th>Kelas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td>{indexOfFirstUser + index + 1}</td>
              <td>{user.nama_lengkap}</td>
              <td>{user.nama_panggilan}</td>
              <td>{user.gender}</td>
              <td>{user.kelas}</td>
              <td style={{ display: "flex", gap: "1px", marginRight: "" }}>
                <Button
                  variant="success"
                  onClick={() => handleEditClick(user.id)}
                  style={{
                    marginLeft: "2%",
                    border: "10%",
                    borderRadius: "10%",
                    color: "white",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ marginRight: "2px" }}
                  />
                  {/* Edit */}
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteUser(user._id)}
                  style={{
                    border: "10%",
                    borderRadius: "10%",
                    color: "white",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    style={{ marginRight: "2px" }}
                  />
                  {/* Hapus */}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: Math.ceil(userData.length / usersPerPage) }).map(
          (_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Detail;
