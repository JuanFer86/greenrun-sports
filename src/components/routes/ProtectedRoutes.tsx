import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "..";
import { History, Home, Notes, Profile } from "../../pages";

const ProtectedRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Navbar />
    </>
  );
};

export default ProtectedRoutes;
