import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Firstpage.css";

class Firstpage extends Component {
  state = {
    name: "",
    nameErr: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name) {
      this.setState({
        name: "",
      });
    }
  };
  setName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <div className="f-container">
          <h1>
            <span className="greet">Good day</span>
          </h1>

          <h2 className="enter-name">Please Enter Your First Name:</h2>

          <div>
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Enter name"
                value={this.state.name}
                onChange={this.setName}
                name="name"
                className="form-control"
                required="required"
              />
              <Link
                to={{
                  pathname: "/Holder",
                  state: {
                    name: this.state.name,
                  },
                }}
              >
                <button className="move btn btn-info mx-2">We Move!</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Firstpage;
