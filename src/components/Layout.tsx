import React from "react";
import { Link, Outlet } from "react-router-dom";
import "@/styles/Layout.css";
import ThemeToggle from "@/components/ThemeToggle";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header className="header">
        <nav className="nav-container">
          <Link to="/" className="logo">
            🌍 GeoGuessr Wiki
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>GeoGuessr Wiki &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
