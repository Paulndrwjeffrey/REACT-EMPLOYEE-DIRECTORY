import React, { Component } from 'react';
import getEmployees from '../../utils/API.js';
import Employee from './../Employee';
import './styles.css';

class Directory extends Component {
  state = {
    employees: [],
    filteredEmployees: []
  };

  componentDidMount() {
    getEmployees()
      .then(response => this.setState({ employees: response.data.results, filteredEmployees: response.data.results }))
      .catch(err => console.log(err));
  };

  filter = (event) => {
    const keyword = event.target.value;
    if (keyword !== '') {
      const results = this.state.filteredEmployees.filter(employee => {
        return(
          employee.name.first.toLowerCase().includes(keyword.toLowerCase()) ||
          employee.name.last.toLowerCase().includes(keyword.toLowerCase())
        );
      });
      this.setState({ filteredEmployees: results })
     } else { 
      this.setState({ filteredEmployees: this.state.employees }) };
  };

  sortByFirst = () => {
    const sorted = this.state.employees.sort((a, b) => a.name.first.localeCompare(b.name.first));
    this.setState({ filteredEmployees: sorted });
  }

  sortByLast = () => {
    const sorted = this.state.employees.sort((a, b) => a.name.last.localeCompare(b.name.last));
    this.setState({ filteredEmployees: sorted });
  }

  sortByCountry = () => {
    const sorted = this.state.employees.sort((a, b) => a.location.country.localeCompare(b.location.country));
    this.setState({ filteredEmployees: sorted });
  }
  
  render() {
    return (
      <table id={"table"}>
        <thead>
          <tr>
            <th>
              <input type='text' onChange={ this.filter }  id='input' placeholder='FILTER' size='6'/> 
            </th>
            <th className={ 'sorter' } onClick={ this.sortByFirst }>First</th>
            <th className={ 'sorter' } onClick={ this.sortByLast }>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th className={ 'sorter' } onClick={ this.sortByCountry }>Country</th>
          </tr>
        </thead>
        <tbody>
      {this.state.filteredEmployees.map(employee => (
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
  