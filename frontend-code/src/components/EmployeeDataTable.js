import React from "react";
import {
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function EmployeeDataTable({ isLoadingData, EmployeesData }) {
  
  return isLoadingData ? (
    <h6>Loading...</h6>
  ) : (
    <>
      <Typography variant="h5" align="center">
        Employees Data
      </Typography>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Employee ID</TableCell>
              <TableCell align="left">Employee Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {EmployeesData.map((data) => (
              <>
                <TableRow>
                  <TableCell
                    key={data._id}
                    component="th"
                    scope="row"
                    align="left"
                  >
                    {data.empID}
                  </TableCell>
                  <TableCell key={data._id} align="left">
                    {data.empName}
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
    </>
  );
}

export default EmployeeDataTable;
