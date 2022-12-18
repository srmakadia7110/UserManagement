import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import LoginPage from "./pages/Login";
import RegisterUser from "./container/RegisterUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </div>
  );
}

export default App;
