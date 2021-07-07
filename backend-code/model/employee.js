let mongoose = require("mongoose");

// Employee Schema
const Employee = mongoose.model("Employee", {
  empID: {
    type: String,
    required: true,
  },
  empName: {
    type: String,
    required: true,
  },
});

module.exports = { Employee };