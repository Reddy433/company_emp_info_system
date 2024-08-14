import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`/api/employees/search?name=${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(res.data);
    };

    fetchEmployees();
  }, [search]);

  return (
    <div className="container mx-auto mt-10">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search employees..."
        className="mb-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
      />
      <ul className="space-y-4">
        {employees.map((employee) => (
          <li
            key={employee._id}
            className="p-4 border border-gray-300 rounded-md shadow-sm"
          >
            <h2 className="text-xl font-bold">{employee.name}</h2>
            <p>Employee ID: {employee.employeeId}</p>
            <p>Phone: {employee.phoneNumber}</p>
            <p>Company: {employee.company.name}</p>
            <p>Manager: {employee.manager ? employee.manager.name : "None"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
