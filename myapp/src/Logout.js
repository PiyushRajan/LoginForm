import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./logout.css";

const Logoutperson = () => {
  const [name, setName] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));

    setName(userInfo);
  }, []);

  const Logout = () => {
    navigator("/");

    localStorage.clear();
  };

  return (
    <div>
      <div className="head">
        <h1>Hello</h1>
        <h5 className="headname">
          {name.firstName} {name.lastName}
        </h5>
        <button className="buton" onClick={Logout}>
          logout
        </button>
      </div>
      <div className="userinfo">
        <p>
          <b>Name: </b>
          {name.firstName} {name.lastName} ({name.brokerageName})
        </p>

        <p>
          <b>Email: </b>
          {name.email}
        </p>
        <p>
          <b>Phone No.: </b>
          {name.phone}
        </p>
        <p>
          <b>City: </b>
          {name.city}
        </p>
        <p>
          <b>State: </b>
          {name.state}
        </p>
      </div>
    </div>
  );
};

export default Logoutperson;
