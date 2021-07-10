import React, { Component } from "react";
import "./App.css";
// import config from "./config";
import axios from "axios";

//Import UI Components
import EmployeeForm from "./components/EmployeeForm";
import EmployeeDataTable from "./components/EmployeeDataTable";
import { Container, Typography } from "@material-ui/core";

class App extends Component {
  state = {
    response: {},
    isLoadingData: true,
    EmployeesData: [],
  };

  async getAllEmployees() {
    this.setState({ isLoadingData: true });
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URI}/api/v1/employees`)
      .then((res) => {
        const response = res.data;
        this.setState({ EmployeesData: response });
        this.setState({ isLoadingData: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getAllEmployees();
  }

  render() {
    return (
      <>
        <Container maxWidth="sm">
          <Typography variant="h5" align="center">
            Employee Data Form
          </Typography>{" "}
          <EmployeeForm getAllEmployees={this.getAllEmployees} />
          <br />
          <br />
          <br />
          <EmployeeDataTable
            isLoadingData={this.state.isLoadingData}
            EmployeesData={this.state.EmployeesData}
          />
        </Container>
      </>
    );
  }
}

export default App;
