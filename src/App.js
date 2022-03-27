import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import LoginCard from "./components/Login/LoginCard";
import RegistrationCard from "./components/Registeration/RegistrationCard";
import SetCalories from "./components/SetCalories/SetCalories";
import { useSelector } from "react-redux";
import AdminDashboard from "./components/Admin/AdminDashboard";

function App() {
  const [register, setRegister] = useState(true);
  const user = useSelector((state) => state.user);
  return (
    <div className="App-header">
      {user.id ? (
        user.admin_email ? (
          <AdminDashboard />
        ) : user.daily_calories ? (
          <Home />
        ) : (
          <SetCalories />
        )
      ) : register ? (
        <RegistrationCard setRegister={setRegister} />
      ) : (
        <LoginCard setRegister={setRegister} />
      )}
    </div>
  );
}

export default App;
