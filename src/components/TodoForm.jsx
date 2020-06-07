import React, { Component } from "react";

import "./TodoForm.css";

class TodoForm extends Component {
  state = {
    task: "",
  };
  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.task.length) {
      this.props.createTodo({
        ...this.state,
        id: Date.now(),
        completed: false,
      });
      this.setState({
        task: "",
      });
    }
  };
  clearTodo = (e) => {
    this.props.clearTodo();
  };
  render() {
    return (
      <div>
        <form className="form-inline my-2" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.task}
            placeholder="Enter todo"
            name="task"
            onChange={this.handleChange}
            className="form-control mx-3"
          />
          <button type="submit" className="btn btn-info mx-2 btn-sm">
            Create todo
          </button>
          <button
            type="submit"
            className="btn btn-danger btn-sm"
            onClick={this.clearTodo}
          >
            Clear All
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
