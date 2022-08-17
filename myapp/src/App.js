import React from "react";
import LoginForm from "./Login";
import { Route, Routes } from "react-router-dom";
import Logoutperson from "./Logout";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <Logoutperson />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
