// src/components/Header.tsx
import React from "react";
import { handleLogout } from "../../Services/Helpers/stateManagement";
import { useNavigate } from "react-router-dom";

const CommanHeader: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const handleLogoutClick = async () => {
    await handleLogout(navigate);
  };

  return (
    <div className="fixed top-0 right-0 p-4 text-white">
      {accessToken ? (
        // If there is an access token in local storage, render the logout button
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      ) : (
        // If there is no access token, render the login button
        // You can replace the 'Login' button with your actual login component
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default CommanHeader;
