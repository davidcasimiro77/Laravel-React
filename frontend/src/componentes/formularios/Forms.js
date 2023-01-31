import React, { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../CU_LOGO.png";
import "../../index.css";

const login = "http://" + window.location.hostname + ":8000/api/login";

export const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "ERROR",
      description: "La información introducida no es correcta",
    });
  };

  const singin = async (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setError(true);
      openNotificationWithIcon("error");
    } else {
      await axios.post(login, {
        email: email,
        password: password,
      });
      navigate("/inicio");
    }
  };

  return (
    <div className="body ce">
      <img src={logo} alt="logo" className="logo" />
      {contextHolder}
      <form onSubmit={singin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="input"
          />
          {error && email.length <= 0 ? (
            <label className="label">Por favor, introduzca su email.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input"
          />
          {error && password.length <= 0 ? (
            <label className="label">Por favor, introduzca su password.</label>
          ) : (
            ""
          )}
        </div>
        <button type="submit" className="button">
          Guardar
        </button>
      </form>
    </div>
  );
};
export default Login;
