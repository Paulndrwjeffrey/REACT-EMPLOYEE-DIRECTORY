import React from 'react';
import './styles.css';

function Employee(props) {
  return (
    <div className="employee">
      <img alt={ props.last } src={ props.image }></img>
      <h2>{ props.first } { props.last }</h2>
    </div>
  );
};

export default Employee;