import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
// import { Button } from "react-bootstrap";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const [userData, setUserData] = useState([]);
  const [currentPage] = useState(1);
  const [usersPerPage] = useState(5); // Number of users to display per page
  // const history = useHistory();

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

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  const laki_lakiCount = userData.filter(
    (user) => user.gender === "Laki-laki"
  ).length;
  const perempuanCount = userData.filter(
    (user) => user.gender === "Perempuan"
  ).length;
  const totalStudents = userData.length;

  // const total =
  //   ((laki_lakiCount + perempuanCount) / totalStudents) * 100;

  return (
    <>
      <div
        style={{
          background: "#f0f0f0",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: "20px"
        }}
      >
        Jumlah Gender Siswa
      </div>
     
      <div>
        {/* <div style={{ background: "#f0f0f0", height: "10%" }}> */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            width: "50rem",
            marginBottom: "5%",
            marginLeft: "10%",
          }}
        >
          {/* Div untuk CircularProgressbar Male */}
          <div
            style={{
              flex: "1",
              backgroundColor: "#f0f0f0",
              padding: "5% 8% 5% 8%",
              borderRadius: "10%",
              height: "5%",
            }}
          >
            <CircularProgressbar
              value={(laki_lakiCount / totalStudents) * 100}
              text={`${Math.round(
                (laki_lakiCount / totalStudents) * 100
              )}% Laki-Laki`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "10px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(0, 0, 255, ${laki_lakiCount / totalStudents})`,
                textColor: "#000",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            {/* <div style={{ textAlign: "center", marginTop: "5px" }}>
              {kelasLaki}
            </div> */}
          </div>

          {/* Div untuk CircularProgressbar Female */}
          <div
            style={{
              flex: "1",
              backgroundColor: "#f0f0f0",
              padding: "5% 8% 5% 8%",
              borderRadius: "10%",
              height: "5%",
            }}
          >
            <CircularProgressbar
              value={(perempuanCount / totalStudents) * 100}
              text={`${Math.round(
                (perempuanCount / totalStudents) * 100
              )}% Perempuan`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "10px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255, 0, 0, ${perempuanCount / totalStudents})`,
                textColor: "#000",
                trailColor: "#d6d6d6",
                backgroundColor: "#f95c5a",
              })}
            />
          </div>
        </div>
        {/* </div> */}
      </div>

      <div
        style={{
          background: "#f0f0f0",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: "20px"
        }}
      >
        Jumlah Gender Siswa
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
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <Button
        onClick={() => history.push("/lengkap")}
        variant="primary"
        style={{ marginLeft: "20px" }}
      >
        Lihat Semua Data
      </Button> */}
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <p>&copy; 2024 Tugas React.14 January 2024.</p>
      </footer>
    </>
  );
}

export default Home;
