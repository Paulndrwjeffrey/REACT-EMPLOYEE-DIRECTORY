import React, { Component } from 'react';
import getEmployees from '../../utils/API.js';
import Employee from './../Employee';
import './styles.css';

class Directory extends Component {

  state = {
    employees: [],
    searchTerm: ''
  };

  componentDidMount() {
    getEmployees()
      .then(response => this.setState({ employees: response.data.results }))
      .catch(err => console.log(err));
  };

  //UH... SORT BY FUNCTIONS HERE?

  //AND... HERE?
  //FILTER()
  weedOut() {

  }

  render() {
    return (
      <table id={"table"}>
        <thead>
          <tr>
            <th>*</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
      {this.state.employees.map(employee => (
        <Employee 
          key={  employee.login.uuid }
          last={ employee.name.last }
          first={ employee.name.first }
          image={ employee.picture.medium }
          email={ employee.email }
          phone={ employee.phone  }
          country={ employee.location.country }
        />
      ))}
      </tbody>
      </table>
    );
  };
};

export default Directory;
