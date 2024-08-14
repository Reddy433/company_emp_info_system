const Employee = require("../models/Employee");

// @desc    Create an employee
// @route   POST /api/employees
// @access  Private (Admin)
exports.createEmployee = async (req, res) => {
  try {
    const { employeeId, name, phoneNumber, company, manager } = req.body;

    const employee = new Employee({
      employeeId,
      name,
      phoneNumber,
      company,
      manager,
    });
    await employee.save();

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update an employee
// @route   PUT /api/employees/:id
// @access  Private (Admin)
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get an employee
// @route   GET /api/employees/:id
// @access  Private (Admin)
exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id)
      .populate("company")
      .populate("manager");

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Search employees
// @route   GET /api/employees/search
// @access  Private (Admin)
exports.searchEmployee = async (req, res) => {
  const { name, employeeId, phoneNumber, company } = req.query;

  try {
    const query = {
      ...(name && { name: { $regex: name, $options: "i" } }),
      ...(employeeId && { employeeId }),
      ...(phoneNumber && { phoneNumber }),
      ...(company && { company }),
    };

    const employees = await Employee.find(query)
      .populate("company")
      .populate("manager");

    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
