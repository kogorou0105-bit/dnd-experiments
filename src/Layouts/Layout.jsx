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
          <Link to="/drag-between-containers">drag-between-containers</Link>
          <Link to="/taskV">TaskV</Link>
          <Link to="/tasks">Tasks</Link>
        </ul>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
