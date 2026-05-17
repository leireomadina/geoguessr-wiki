import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ContinentDetail from "./pages/ContinentDetail";
import "./App.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="continent/:continentName" element={<ContinentDetail />} />
        <Route
          path="country/:id"
          element={<div>Country Detail Placeholder</div>}
        />
      </Route>
    </Routes>
  );
};

export default App;
