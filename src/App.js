import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import LoginPage from "./pages/Login";
import RegisterUserPage from "./pages/RegisterUser";
import UsersPage from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterUserPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
