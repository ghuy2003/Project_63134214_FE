import React from "react";
import logdark from '../Dashboard/assets/images/logos/dark-logo.svg'
import { Link } from "react-router-dom";
const SidebarDashboard = () => {
  return (
    <>
      <aside class="left-sidebar">
        <div>
          <div class="brand-logo d-flex align-items-center justify-content-between">
            <a href="./index.html" class="text-nowrap logo-img">
              <img
                src={logdark}
                width="180"
                alt=""
              />
            </a>
            <div
              class="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i class="ti ti-x fs-8"></i>
            </div>
          </div>

          <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li class="sidebar-item">
                <Link to={'/dashboard'} className="sidebar-link" aria-expanded="false" >
                <span>
                    <i class="ti ti-layout-dashboard"></i>
                  </span>
                  <span class="hide-menu">Dashboard</span>
                </Link>
              </li>

              <li class="sidebar-item">
                <Link to={'/dashboard/product'} className="sidebar-link" aria-expanded="false">
                  <span>
                      <i class="ti ti-layout-dashboard"></i>
                    </span>
                    <span class="hide-menu">Product</span>
                </Link>
              </li>
             
              
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SidebarDashboard;
