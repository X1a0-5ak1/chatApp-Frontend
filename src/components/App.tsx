import React from "react";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import PassChange from "./PassChange";

export default function App() {
  const loggedIn = null;
  return (
    <Router>
      <Routes>
        {/*画面のスイッチ構成部分*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={loggedIn ? <MainPage /> : <Navigate to="/login" />} />
        <Route path="/passwordreset" element={<PassChange />} />
      </Routes>
    </Router>
  );
}
