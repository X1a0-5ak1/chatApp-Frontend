import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import PassChange from "./PassChange";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* ログイン状態が確認できる人のみ表示可能 */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="/passwordreset" element={<PassChange />} />
      </Routes>
    </Router>
  );
};
export default App;
