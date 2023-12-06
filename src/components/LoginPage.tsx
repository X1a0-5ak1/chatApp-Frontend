import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // ログイン認証ロジック
    if (username === "user" && password === "password") {
      console.log("ログイン成功");
      // 認証状態を保存する処理
      localStorage.setItem("token", "sample_token");
      navigate("/");
    } else {
      // 認証失敗
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
