import React, { Component } from "react";
import axios from "axios";

class Checklist extends Component {
  state = {
    todo: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:3000/todos`).then((res) => {
      const todo = res.data;
      this.setState({ todo });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todo.map((el) => (
            <li>{el.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Checklist;
