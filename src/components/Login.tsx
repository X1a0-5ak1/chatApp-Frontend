import { InputUserInfo } from './lib/InputUserInfo';

export default function Login() {
  const handleLogin = (userId: string, password: string) => {
    if (userId === 'aaa' && password === '1234') {
      console.log(`入力情報\n ID:${userId}\n Pass:${password}`);
      window.location.href = 'https://watch.onl.jp/';
    } else {
      console.log(`入力情報\n ID:${userId}\n Pass:${password}`);
      alert('IDまたはパスワードが違います。');
    }
  };

  return (
    <>
      <InputUserInfo id="inputFrom" onSubmit={handleLogin}></InputUserInfo>
    </>
  );
}
