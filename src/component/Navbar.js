import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import Swal from "sweetalert2";

function Navbar() {
  const location = useLocation();

  const logout = () => {
    // Menampilkan SweetAlert untuk konfirmasi logout
    Swal.fire({
      title: "Konfirmasi",
      text: "Apakah Anda yakin ingin logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Logout!",
    })
    .then((result) => {
      // Jika pengguna menekan tombol OK, maka logout akan dilakukan
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/login";
      }
    });
  };

  const isLoginOrRegister = location.pathname === '/login' || location.pathname === '/register';

  return (
    <CDBSidebar
      style={{ height: "100vh", background: "#40679E", position: "fixed" }}
    >
      <CDBSidebarHeader style={{ marginLeft: "20px" }}>
        <Link to="/visi" style={{ textDecoration: "none", color: "white" }}>
          Data siswa
        </Link>
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to="/">
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
          </Link>
          <Link to="/lengkap">
            <CDBSidebarMenuItem icon="sticky-note">
              Data Semua Siswa
            </CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      {!isLoginOrRegister && (
        <CDBSidebarFooter style={{ textAlign: "center", marginTop: "auto" }}>
          <CDBSidebarMenuItem
            as="button"
            style={{
              color: "white",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              marginRight: "50%",
              marginTop: "20%"
            }}
            onClick={logout}
          >
            LOGOUT
          </CDBSidebarMenuItem>
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            Tugas React
          </div>
        </CDBSidebarFooter>
      )}
    </CDBSidebar>
  );
}

export default Navbar;