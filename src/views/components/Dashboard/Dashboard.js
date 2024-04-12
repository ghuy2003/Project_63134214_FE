import React from "react";
import "./assets/css/styles.min.css";
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";
import SidebarTop from "../SidebarTop/SidebarTop";
import SaleOverview from "../SaleOverview/SaleOverview";
import RecentTransactionsLeft from "../RecentTransactionsLeft/RecentTransactionsLeft";
import RecentTransactionsRight from "../RecentTransactionsRight/RecentTransactionsRight";

const Dashboard = () => {
  return (
    <>
      <div
        class="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <SidebarDashboard />

        {/* ================================================= */}

        <div class="body-wrapper">
          <SidebarTop />

          <div class="container-fluid">
            <SaleOverview />

            {/* ========================================= */}
            <RecentTransactionsLeft />

            {/* ========================================== */}
            <RecentTransactionsRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
