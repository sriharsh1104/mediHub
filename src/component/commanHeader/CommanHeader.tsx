// src/components/Header.tsx
import React from 'react';
import { handleLogout } from '../../Services/Helpers/stateManagement';
import { useNavigate } from 'react-router-dom';

const CommanHeader: React.FC = () => {
    const navigate = useNavigate();
  
    const handleLogoutClick = async () => {
      await handleLogout(navigate);
    };
  
  return (
    <div className="fixed top-0 right-0 p-4 text-white">
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
};

export default CommanHeader;
