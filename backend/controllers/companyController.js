const Company = require("../models/Company");

// @desc    Create a company
// @route   POST /api/companies
// @access  Private (Admin)
exports.createCompany = async (req, res) => {
  try {
    const { companyCode, name } = req.body;

    const company = new Company({ companyCode, name });
    await company.save();

    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update a company
// @route   PUT /api/companies/:id
// @access  Private (Admin)
exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.json(company);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get a company
// @route   GET /api/companies/:id
// @access  Private (Admin)
exports.getCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.json(company);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
