import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // tags: ["tag1", "tag2", "tag3"],
  //   // imageUrl: "https://picsum.photos/200",
  // };

  // handleIncreament = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) {
  //     return <p>Empty tag!!!</p>;
  //   }
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  render() {
    console.log(this.props);
    return (
      // 需要用<div></div>包起來，因為babel在編譯jsx的時候的第一個參數是括住所有code的tag
      <div>
        {/* <img src={this.state.imageUrl} alt=""/> */}
        {this.props.children}
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={()=>this.props.onIncreament(this.props.counter)}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">
          delete
        </button>
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
