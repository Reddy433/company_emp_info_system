const express = require("express");
const {
  createCompany,
  updateCompany,
  getCompany,
} = require("../controllers/companyController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, createCompany);
router.put("/:id", protect, updateCompany);
router.get("/:id", protect, getCompany);

module.exports = router;
