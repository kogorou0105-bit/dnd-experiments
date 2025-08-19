import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Link to="/">Home</Link>
        <ul className="nav">
          <Link to="/tasks">Tasks</Link>
          <Link to="/drag-between-containers">drag-between-containers</Link>
        </ul>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
