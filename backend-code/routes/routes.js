const express = require("express");
const router = express.Router();

const controllers = require("./../controllers/controllers");

router.get("/employees", controllers.employees);

router.post("/employee/add", controllers.addEmployee);

module.exports = router;
