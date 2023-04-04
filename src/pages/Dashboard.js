import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2> this is Dashboard</h2>
      <Link to="/profile">go to profile page</Link>
    </div>
  );
};

export default Dashboard;
