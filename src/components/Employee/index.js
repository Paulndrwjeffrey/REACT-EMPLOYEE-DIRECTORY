import React from 'react';
import './styles.css';

function Employee(props) {
  return (
    <tr>
      <td>
        <img className={"headshot"} alt={ props.last } src={ props.image }></img>
      </td>
      <td>{ props.first }</td>
      <td>{ props.last }</td>
      <td>{ props.email }</td>
      <td>{ props.phone }</td>
      <td>{ props.country }</td>
    </tr>
  );
};

export default Employee;