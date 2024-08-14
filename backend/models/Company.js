const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  companyCode: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Company", CompanySchema);
