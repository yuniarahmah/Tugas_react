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
  return (
    <CDBSidebar
      style={{ height: "100vh", background: "#40679E", position: "fixed" }}
    >
      {/* <CDBSidebarHeader prefix={<i className="fa fa-bars" />}> */}
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
          {/* <Link to="/metrics">
              <CDBSidebarMenuItem icon="credit-card" iconType="solid">
                Visi & Misi
              </CDBSidebarMenuItem>
            </Link> */}
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
          Tugas React
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
}

export default Navbar;
