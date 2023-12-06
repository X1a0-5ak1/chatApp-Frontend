import React from "react";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

export default function App() {
  const isAuthenticated = false;

  return (
    <Router>
      <Routes>
        {/*画面のスイッチ構成部分*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
