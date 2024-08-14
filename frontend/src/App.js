import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import CompanyForm from "./components/CompanyForm";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/login" element={<AuthForm />} />
          <Route path="/companies/create" element={<CompanyForm />} />
          <Route path="/employees/create" element={<EmployeeForm />} />
          <Route path="/" element={<EmployeeList />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
