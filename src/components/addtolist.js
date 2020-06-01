import React, { Component } from "react";
import axios from "axios";

class Addtolist extends Component {
  state = {
    title: ""
  };

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

  const title = this.state.title

    axios.post(`http://localhost:3000/todos`, { title }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    window.location.reload(false);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
           
            <input type="text" name="name" onChange={this.handleChange} />
           </label>
          <button className="addbutton" type="submit">+</button>
        </form>
      </div>
    );
  }
}

export default Addtolist;
