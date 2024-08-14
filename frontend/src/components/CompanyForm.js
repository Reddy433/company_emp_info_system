import React, { useState } from "react";
import axios from "axios";

const CompanyForm = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "/api/companies",
        { name, code },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setName("");
      setCode("");
    } catch (err) {
      console.error("Failed to create company", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Company Name"
        className="w-full p-2 mb-4 border"
        required
      />
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Company Code"
        className="w-full p-2 mb-4 border"
        required
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2">
        Create Company
      </button>
    </form>
  );
};

export default CompanyForm;
