import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" >
          Subjective.ai
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
