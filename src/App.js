import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
