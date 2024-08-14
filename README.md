"# company-employee-info-system" 
# Company-Employee Information System

This is a full-stack application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows an admin to manage company and employee information, search for employees within a company, and view the reporting hierarchy.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)

## Features

- **Admin Authentication**: Only admins can log in and perform actions within the application.
- **Company Management**: Create, update, and manage company information with a unique company code.
- **Employee Management**: Create, update, and manage employee information with a unique employee ID within a company.
- **Employee Search**: Search for employees by name, employee ID, or phone number within a company.
- **Reporting Hierarchy**: Given an employee ID, list all subordinates and the reporting manager.

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (local installation or a MongoDB Atlas account)

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name/backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the `backend` directory:
    ```bash
    touch .env
    ```
    - Add the following environment variables to the `.env` file:
    ```env
    MONGO_URI=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the backend server**:
    ```bash
    npm run dev
    ```
    - The backend server will start on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd ../frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the frontend server**:
    ```bash
    npm start
    ```
    - The frontend will start on `http://localhost:3000`.

### Running Both Backend and Frontend Concurrently

1. **Navigate to the project root**:
    ```bash
    cd ..
    ```

2. **Install `concurrently` (if not already installed)**:
    ```bash
    npm install concurrently --save-dev
    ```

3. **Add the following script to your root `package.json`**:
    ```json
    "scripts": {
        "start": "concurrently \"npm run dev --prefix backend\" \"npm start --prefix frontend\""
    }
    ```

4. **Run both servers**:
    ```bash
    npm start
    ```


API Endpoints
Authentication
POST /api/auth/login: Admin login.
Companies
POST /api/companies: Create a new company (Admin only).
GET /api/companies: Get a list of all companies (Admin only).
GET /api/companies/
: Get a specific company by ID (Admin only).
PUT /api/companies/
: Update company information (Admin only).
DELETE /api/companies/
: Delete a company (Admin only).
Employees
POST /api/employees: Create a new employee (Admin only).
GET /api/employees: Get a list of all employees within a company (Admin only).
GET /api/employees/
: Get a specific employee by ID (Admin only).
PUT /api/employees/
: Update employee information (Admin only).
DELETE /api/employees/
: Delete an employee (Admin only).
GET /api/employees/search: Search for employees by name, employee ID, or phone number within a company (Admin only).
Environment Variables
MONGO_URI: MongoDB connection string.
JWT_SECRET: Secret key for signing JSON Web Tokens.
Technologies Used
Backend:

Node.js
Express.js
MongoDB
Mongoose
JWT for authentication
dotenv for environment variables
Frontend:

React.js
Tailwind CSS
Axios for HTTP requests
React Router for client-side routing
Usage
Admin Authentication:

Log in as an admin using the /login route. Only admins can access the dashboard and perform CRUD operations on companies and employees.
Manage Companies:

Create, update, and delete companies. Each company is identified by a unique companyCode.
Manage Employees:

Create, update, and delete employees. Employees are associated with a company and can have a reporting manager within the same company.
Search Employees:

Search for employees by name, employee ID, or phone number within a company.
View Reporting Hierarchy:

View an employee's subordinates and their reporting manager by accessing the employee details.

