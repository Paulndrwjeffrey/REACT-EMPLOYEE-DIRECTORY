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
      <td>
        <a href={`mailto:${ props.email }`}>{ props.email }</a>
        </td>
      <td>{ props.phone }</td>
      <td>{ props.country }</td>
    </tr>
  );
};

export default Employee;