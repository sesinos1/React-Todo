import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    task: ""
  };

  handleChange = e => {
    console.log(e.target);
    this.setState({
      task: e.target.value
    });
  };

  submit = e => {
    this.props.handleSubmit(e, this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.submit}>
        <input
          placeholder="...todo"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit">Add Todos</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;