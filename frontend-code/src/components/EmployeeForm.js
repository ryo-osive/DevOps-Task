import React, { useState } from "react";
import axios from "axios";
import config from "../config";
import { Button, Grid, TextField } from "@material-ui/core";

function EmployeeForm() {
  const [empID, setEmpID] = useState("");
  const [empName, setEmpName] = useState("");

  const submitData = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URI}/api/v1/employee/add`, {
        empID: empID,
        empName: empName,
      })
      .then(function (response) {
        console.log(response);
        console.log("Data Submitted");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form>
        <Grid>
          <Grid item>
            <TextField
              id="outlined-full-width"
              name="empID"
              label="Employee ID"
              style={{ margin: 8 }}
              placeholder="Employee ID"
              fullWidth
              variant="outlined"
              value={empID}
              onChange={(e) => setEmpID(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-full-width"
              label="Employee Name"
              name="empName"
              style={{
                margin: 8,
              }}
              placeholder="Employee Name"
              fullWidth
              variant="outlined"
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
            />
          </Grid>
          <Grid item style={{ display: "flex", "justify-content": "center" }}>
            <Button variant="contained" color="primary" onClick={submitData}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default EmployeeForm;
