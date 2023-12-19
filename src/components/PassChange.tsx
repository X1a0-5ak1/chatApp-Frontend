import { useState } from "react";
import { Container, InputAuthTempNum, InputUserInfo, SubmitButton, Form } from "../style/PassChangePageStyle";

export default function PassChange() {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [authTempNum, setAuthTempNum] = useState("");

  const handleChangePass = () => {};

  return (
    <Container>
      <Form>
        <h2>Change your Password</h2>
        <label>
          <InputUserInfo
            type="userID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="example@raft-works.com"
          />
        </label>
        <label>
          <InputAuthTempNum
            type="authNum"
            value={authTempNum}
            onChange={(e) => setAuthTempNum(e.target.value)}
            placeholder="Enter the one-time password sent to your Email"
          />
        </label>
        <label>
          <InputUserInfo
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter New Password"
          />
        </label>
        <SubmitButton onClick={handleChangePass}>Reset</SubmitButton>
      </Form>
    </Container>
  );
}
