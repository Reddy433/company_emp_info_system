import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/companies/create" className="mr-4">
          Create Company
        </Link>
        <Link to="/employees/create" className="mr-4">
          Create Employee
        </Link>
        <Link to="/employees" className="mr-4">
          Employee List
        </Link>
        <Link to="/logout" className="float-right">
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Header;
