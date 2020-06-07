import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

import "./TodoList.css";

class TodoList extends Component {
  state = {
    todos: [],
  };
  createTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  clearTodo = () => {
    this.setState({
      todos: [],
    });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  updateTodo = (id, newTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  };
  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  };
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todo", JSON.stringify(nextState.todos));
  }

  componentWillMount() {
    localStorage.getItem("todo") &&
      this.setState({
        todos: JSON.parse(localStorage.getItem("todo")),
      });
  }

  render() {
    const listTodos = this.state.todos.length ? (
      this.state.todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.task}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo}
            completed={todo.completed}
            toggleTodo={this.toggleCompletion}
          />
        );
      })
    ) : (
      <p className="text">You have not entered any todo</p>
    );
    return (
      <div>
        <div className="card-body mx-auto">
          <p className="question-text">WHAT WILL YOU LIKE TO DO?</p>
          <TodoForm createTodo={this.createTodo} clearTodo={this.clearTodo} />

          {listTodos}
        </div>
      </div>
    );
  }
}

export default TodoList;
