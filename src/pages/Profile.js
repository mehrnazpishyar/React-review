import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Downloads from "./Downloads";
import SideBar from "../components/SideBar";

const Profile = () => {
  return (
    <div>
     <SideBar/>
      <Routes>
        <Route path="/profile/dashboard" Component={Dashboard} />
        <Route path="/profile/download" Component={Downloads} />
      </Routes>
    </div>
  );
};

export default Profile;
