import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="space-x-4">
        <Link
          to="/companies/create"
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Create Company
        </Link>
        <Link
          to="/employees/create"
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Create Employee
        </Link>
        <Link to="/employees" className="bg-blue-500 text-white p-2 rounded-md">
          Employee List
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
