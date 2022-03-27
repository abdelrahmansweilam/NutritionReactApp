import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../actions";
import "./LoginCard.css";

const LoginCard = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin({ email, password }));
  };
  return (
    <div className="Login-card">
      <div className="Login-container">
        <h4 className="title">Log into an existing account</h4>
        <div className="Login-info">
          <div className="material-textfield">
            <input
              type="text"
              placeholder=" "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>E-mail</label>
          </div>
          <div className="material-textfield">
            <input
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>Password</label>
          </div>
        </div>
        <div className="Login-submit">
          <button
            type="submit"
            className="outline-button"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign In
          </button>
          <h6
            className="clickable"
            onClick={() => {
              props.setRegister(true);
            }}
          >
            Don't have an account?
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
