import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions";
import { FiLogOut } from "react-icons/fi";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logout());
  };
  return (
    <div>
      AdminDashboard
      <span
        className="logout-icon"
        onClick={() => {
          handleSubmit();
        }}
      >
        <FiLogOut />
      </span>
    </div>
  );
};

export default AdminDashboard;
