import React from "react";
import { Link } from "react-router-dom";
import "@/styles/NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <p className="not-found-text">Did you get lost?</p>
      <Link to="/" className="not-found-link">
        Back to the start
      </Link>
    </div>
  );
};

export default NotFound;
