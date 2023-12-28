import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import PassChange from "./PassChange";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* ログイン状態が確認できる人のみ表示可能 */}
        <Route path="/home" element={<MainPage />} />
        <Route path="/passwordreset" element={<PassChange />} />
      </Routes>
    </Router>
  );
};
export default App;
