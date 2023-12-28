import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Form, InputUserInfo, PasswordResetLink, LoginButton, ErrorMessages } from "../style/LoginPageStyle";
import { ReactNode, useState } from "react";
import axios from "axios";

type LoginForm = {
  userid: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });

  const onSubmit = async (data: LoginForm) => {
    console.log(data);
    axios
      .get("http://localhost:3001/api/login", {
        params: {
          userid: data.userid,
          password: data.password,
        },
      })
      .then((response) => {
        if (response.data.status) {
          alert("login success!!");
          console.log(response.data.token);
          window.localStorage.setItem(data.userid, response.data.token);
          navigate("/home");
        } else {
          setErrorMsg("ユーザー名またはパスワードが違います");
        }
      })
      .catch((error) => {
        alert(`予期せぬエラーが発生しました。${error}`);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <ErrorMessages>{errorMsg}</ErrorMessages>
        <label>
          <InputUserInfo
            type="text"
            {...register("userid", { required: "ユーザーIDを入力してください。" })}
            placeholder="example@raft-works.com"
          />
        </label>
        <ErrorMessages>{errors.userid?.message as ReactNode}</ErrorMessages>
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
            navigate("/passwordreset");
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
