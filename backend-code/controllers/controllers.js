const { Employee } = require("../model/employee");

const employees = (req, res, next) => {
  Employee.find({}, (err, data) => {
    if (!err) {
      res.status(200).json(data);
    } else {
      console.log(err);
    }
  });
};

const addEmployee = (req, res) => {
  const emp = new Employee({
    empID: req.body.empID,
    empName: req.body.empName,
  });

  emp.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "Employee Added Successfully",
      addEmployee: data,
    });
  });
};

module.exports.employees = employees;
module.exports.addEmployee = addEmployee;