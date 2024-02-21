import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ laki_lakiCount, perempuanCount, totalStudents }) => {
  const data = {
    labels: ["Laki-Laki", "Perempuan"],
    datasets: [
      {
        data: [laki_lakiCount, perempuanCount],
        backgroundColor: ["rgba(0, 0, 255, 1)", "rgba(255, 0, 0, 1)"],
      },
    ],
  };

  const options = {
    cutoutPercentage: 50,
    legend: {
      display: true,
      position: "bottom",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        width: "40rem",
        marginBottom: "5%",
        marginLeft: "10%",
      }}
    >
      <Doughnut data={data} options={options} />
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        {`${laki_lakiCount} Laki-Laki, ${perempuanCount} Perempuan`}
      </div>
    </div>
  );
};

export default PieChart;