import React, { Component } from "react";
import '../App.css'
class Form extends Component {
  render() {
    return (
      <form>
        <div className={this.getFormClass()}>
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="Who r u?"
            onChange={this.props.onChange}
            onKeyPress={this.props.onKeyPress}
            value={this.props.value}
          />
        </div>
      </form>
    );
  }
  getFormClass() {
    let classes = "container "
    classes += this.props.logined === false ? "show" : "disappear";
    return classes;
  }
}

export default Form;
