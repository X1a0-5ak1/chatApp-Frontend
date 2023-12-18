import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const LogoutAction = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <button id="fakeButton" onClick={() => alert("ログイン完了なりよ☆")}>
        (´・ω・｀)
      </button>
      <button id="logoutButton" onClick={LogoutAction}>
        LOGOUT
      </button>
    </>
  );
}
