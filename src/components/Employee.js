import React from "react";

function Employee(props) {
  return (
    <div>
      <p>{props.employee.name.first} {props.employee.name.last}</p>
    </div>
  );
}

export default Employee;
