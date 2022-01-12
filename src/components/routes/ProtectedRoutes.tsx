import React from "react";
import { Routes, Route } from "react-router-dom";
import { History, Home, Notes, Profile } from "../../pages";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/History" element={<History />} />
      <Route path="/Notes" element={<Notes />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
};

export default ProtectedRoutes;
