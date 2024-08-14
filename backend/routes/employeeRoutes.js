const express = require("express");
const {
  createEmployee,
  updateEmployee,
  getEmployee,
  searchEmployee,
} = require("../controllers/employeeController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, createEmployee);
router.put("/:id", protect, updateEmployee);
router.get("/:id", protect, getEmployee);
router.get("/search", protect, searchEmployee);

module.exports = router;
