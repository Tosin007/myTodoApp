import React, { Component } from "react";
import TodoList from "./TodoList";

import "./Holder.css";

class Holder extends Component {
  state = {};
  render() {
    const name = this.props.location.state.name;
    return (
      <div className="container">
        <div className="card text-center">
          <p className="header">{name}'s to-do list</p>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default Holder;
