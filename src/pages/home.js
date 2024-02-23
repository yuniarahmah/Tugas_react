import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
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
          fontSize: "20px",
        }}
      >
        Dashboard
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginBottom: "5%",
          // marginLeft: "5%",
        }}
      >
        {/* Div untuk Pie Chart Male & Female */}
        <div
          style={{
            position: "relative",
            flex: "1",
            backgroundColor: "#f0f0f0",
            padding: "5px 8px 5px 8px",
            borderRadius: "10%",
            height: "5%",
            width: "10px",
          }}
        >
          <CircularProgressbar
            value={((laki_lakiCount + perempuanCount) / totalStudents) * 100}
            text={`${Math.round(
              ((laki_lakiCount + perempuanCount) / totalStudents) * 100
            )}%`}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: "butt",
              textSize: "10px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(0, 0, 258, ${laki_lakiCount / totalStudents})`, // Blue for Male
              textColor: "#000",
              trailColor: "transparent",
              backgroundColor: "transparent",
            })}
          />
          <svg height="0" width="60%">
            {" "}
            {/* Adjusted width to 60% */}
            <defs>
              <clipPath id="pie-clip" clipPathUnits="objectBoundingBox">
                <polygon points="0.5 0.5, 1 0.5, 1 1, 0.5 1" />
              </clipPath>
            </defs>
          </svg>
          <div style={{ textAlign: "center", marginTop: "5px" }}>
            {`${laki_lakiCount} Laki-Laki, ${perempuanCount} Perempuan`}
          </div>
        </div>

        {/* Tabel */}
        <div style={{ flex: "1" }}>
          <Table
            striped
            bordered
            hover
            style={{
              width: "100%",
              fontSize: "0.9em",
              height: "90%", // Reducing font size of the table content
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
        </div>
      </div>

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
