import React from "react";
import { Link } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";

function Navbar() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

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
    </CDBSidebar>
  );
}

export default Navbar;