import React from "react";
import Employee from "../components/Employee";
import API from "../utils/API";

class Home extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    API.getEmployeeInfo()
      .then(res => {
        this.setState({ employees: res.data.results });
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
  }

  render() {
    return  (
      <div>
        <p>Welcome Home!</p>
        {this.state.employees.map(employee => (
          <Employee employee={employee} key={employee.id.value}/>
        ))}
      </div>
    );
  }
}

export default Home;