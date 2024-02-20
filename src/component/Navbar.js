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
    <CDBSidebar style={{ height: "100vh", position: "fixed", background:"#416D19" }}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        Data siswa
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
                Metrics
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
