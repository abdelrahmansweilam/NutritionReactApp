import React, { useState } from "react";
import "./RegistrationCard.css";
import { useDispatch } from "react-redux";
import { signup } from "../../actions";

const RegistrationCard = ({ setRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("The two passwords must match!");
    } else {
      dispatch(signup({ email, name, password }));
    }
  };
  return (
    <div className="registration-card">
      <div className="registration-container">
        <h4 className="title">Create a new account</h4>
        <div className="material-textfield">
          <input
            type="text"
            placeholder=" "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Full Name</label>
        </div>
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
        <div className="material-textfield">
          <input
            type="password"
            placeholder=" "
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <label>Confirm Password</label>
        </div>
        <button
          type="submit"
          className="outline-button"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Sign Up
        </button>
        <h6
          className="clickable"
          onClick={() => {
            setRegister(false);
          }}
        >
          Already have an account?
        </h6>
      </div>
    </div>
  );
};

export default RegistrationCard;
