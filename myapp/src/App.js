import React from "react";
import LoginForm from "./Login";
import { Route, Routes } from "react-router-dom";
import Logoutperson from "./Logout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/login" element={<Logoutperson />} />
    </Routes>
  );
}

export default App;
