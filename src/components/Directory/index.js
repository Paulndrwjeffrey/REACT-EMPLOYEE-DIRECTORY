import React, { Component } from 'react';
import getEmployees from '../../utils/API.js';
import Employee from './../Employee';

class Directory extends Component {

  state = {
    employees: []
  };

  componentDidMount() {
    getEmployees()
      .then(response => this.setState({ employees: response.data.results }))
      .catch(err => console.log(err));
  };

  //UH... SORT BY FUNCTIONS HERE?

  //AND... HERE?

  render() {
    return (
      <div>
      {this.state.employees.map(employee => (
        <Employee 
          key={  employee.login.uuid }
          last={ employee.name.last }
          first={ employee.name.first }
          image={ employee.picture.medium }
        />
      ))}
      </div>
    );
  };
};

export default Directory;
