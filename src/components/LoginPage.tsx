import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
import { Container, Form, InputUserInfo, PasswordResetLink, LoginButton, ErrorMessages } from "../style/LoginPageStyle";
import { ReactNode, useState } from "react";

type LoginForm = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);

    if (data.username === "raft" && data.password === "raft1173") {
      // ユーザー名パスワード仮認証
      localStorage.setItem("token", "sample_token"); // トークン保存
      loginSuccess();
    } else {
      loginErrorMsg();
    }
    reset();
  };

  const loginSuccess = () => {
    navigate("/home");
  };

  const loginErrorMsg = () => {
    setErrorMsg("ユーザー名またはパスワードが間違っています。");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <ErrorMessages>{errorMsg}</ErrorMessages>
        <label>
          <InputUserInfo
            type="text"
            {...register("username", { required: "ユーザーIDを入力してください。" })}
            placeholder="example@raft-works.com"
          />
        </label>
        <ErrorMessages>{errors.username?.message as ReactNode}</ErrorMessages>
        <label>
          <InputUserInfo
            type="password"
            {...register("password", { required: "パスワードを入力してください。" })}
            placeholder="Enter Password"
          />
        </label>
        <ErrorMessages>{errors.password?.message as ReactNode}</ErrorMessages>
        <PasswordResetLink
          onClick={() => {
            return <Navigate to="/passwordreset" />;
          }}>
          Forgot Password...?
        </PasswordResetLink>
        <LoginButton type="submit" onSubmit={handleSubmit(onSubmit)}>
          Login
        </LoginButton>
      </Form>
    </Container>
  );
}
