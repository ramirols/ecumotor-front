import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MultiStepForm from "./components/MultiStepForm";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Inicio.jsx";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Registro.jsx";
import Profile from "./components/Profile.jsx";

import "./styles/styles.css";
import "./App.css";
import Service from "./components/Service.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <div className="wrapper">
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/servicio" element={<Service />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
