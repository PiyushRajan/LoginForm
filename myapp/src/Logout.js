import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./logout.css";

const Logoutperson = () => {
  const [name, setName] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));

    setName(userInfo.firstName);
  }, []);

  const Logout = () => {
    navigator("/");

    localStorage.clear();
  };

  return (
    <>
      <h1>Hello</h1>
      <p>{name}</p>
      <button className="buton" onClick={Logout}>
        logout
      </button>
    </>
  );
};

export default Logoutperson;
