import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`/api/employees/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployee(res.data);
    };

    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">{employee.name}</h1>
      <p>Employee ID: {employee.employeeId}</p>
      <p>Phone: {employee.phoneNumber}</p>
      <p>Company: {employee.company.name}</p>
      <p>Manager: {employee.manager ? employee.manager.name : "None"}</p>
      <h2 className="text-2xl mt-6">Subordinates</h2>
      <ul className="mt-2">
        {employee.subordinates.map((sub) => (
          <li key={sub._id}>{sub.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDetail;
