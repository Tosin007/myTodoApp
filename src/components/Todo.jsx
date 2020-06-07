import React, { Component } from "react";
import { Trash } from "react-bootstrap-icons";
import { Pencil } from "react-bootstrap-icons";

import "./Todo.css";

class Todo extends Component {
  state = {
    isEditing: false,
    task: this.props.todo,
  };
  deleteTodo = () => {
    this.props.deleteTodo(this.props.id);
  };
  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };
  submitEdit = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({
      isEditing: false,
    });
  };
  editTodo = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  handleToggle = () => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <div className="container">
            <form className="form-inline form-edit" onSubmit={this.submitEdit}>
              <input
                type="text"
                value={this.state.task}
                onChange={this.editTodo}
                name="task"
                className="form-control mx-1"
              />
              <button type="submit" className="btn btn-sm btn-info">
                Save
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      result = (
        <div>
          <div className="list-group">
            <div className="text my-1 list-group-item my-1 list second">
              <p
                onClick={this.handleToggle}
                className={this.props.completed ? "completed" : ""}
              >
                {this.props.todo}
              </p>
              <span>
                <Pencil onClick={this.toggleForm} className="pencil" />
                <Trash onClick={this.deleteTodo} className="trash" />
              </span>
            </div>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
