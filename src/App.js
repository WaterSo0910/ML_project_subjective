import React, { Component } from "react";
import "./App.css";
// import Counters from "./components/counters";
import Navbar from "./components/navbar";
import Form from "./components/form";
import Raters from "./components/raters";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      username: "",
      logined: false,
      // counters: [
      //   { id: 1, value: 4 },
      //   { id: 2, value: 0 },
      //   { id: 3, value: 0 },
      //   { id: 4, value: 0 },
      // ],
      ratings: [
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handleKeypress = (event) => {
    if (event.key === "Enter") {
      console.log(this.state.logined);
      // alert("Welcome! " + this.state.username + ".\nEnjoy the game!!");
      this.setState({ logined: true });
    }
    // Search
  };
  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };
  // handleIncreament = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };
  // handleDelete = (counterId) => {
  //   console.log("Delete ", counterId);
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters });
  // };
  handleRatingChange = (value, index) => {
    console.log("Rating in Main: ", index, " ", value);
    const ratings = this.state.ratings;
    ratings[index].value = value;
    this.setState({ ratings });
    console.log("Ratings", { ratings });
  };
  handleSumit = () => {
    // 1. SUBMIT MY RESULT
    // this.state.ratings.id
    // this.state.ratings.value
    // this.state.username

    // 2. RESET THE STATE
  }
  getImageUrl = () => {
    const response = axios.get("https://subjective-cp.herokuapp.com/request_image/name/kfkfk");
    console.log(response);
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.getSum()}
        ></Navbar>
        <Form
          logined={this.state.logined}
          onChange={this.handleUsernameChange}
          onKeyPress={this.handleKeypress}
          value={this.state.username}
        ></Form>
        <button onClick={this.getImageUrl}>ga</button>
        <main className={this.getAllClass()}>
        <img className="myimage" src="https://picsum.photos/200" alt=""/>
          <Raters
            onRateChange={this.handleRatingChange}
            ratings={this.state.ratings}
          ></Raters>
          <div className="disappear">
            {/* <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncreament={this.handleIncreament}
            ></Counters> */}
          </div>
          <button type="button" class="btn btn-secondary btn-lg btn-block" onClick={this.handleSumit}>Submit</button>
        </main>
      </React.Fragment>
    );
  }
  getSum(){
    var sum = 0;
    for (let index = 0; index < this.state.ratings.length; index++) {
      sum += this.state.ratings[index].value;
    }
    return sum;
  }
  getAllClass() {
    let classes = "container ";
    classes += this.state.logined === true ? "show" : "disappear";
    return classes;
  }
}

export default App;
