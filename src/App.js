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
      this.getImageUrl();
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
  handleSubmit = () => {
    // TODO 1. SUBMIT MY RESULT
    var result = "https://subjective-cp.herokuapp.com/submit_rating";
    result += "/" + this.state.username;
    result += "/" + this.state.imageUrl.replace('https://subjective-cp.herokuapp.com/static/img/need_scored','');
    for (var i = 0; i < this.state.ratings.length; i++) {
      result += "/" + this.state.ratings[i].value;
    }
    const response = axios
      .post(result)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("I always Execued");
      });
    console.log(response);
    this.getImageUrl();
    const ratings = this.state.ratings.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ ratings });
  };

  // TODO 2. RESET THE STATE

  getImageUrl = () => {
    // TODO : It still blocked by CORS.
    var url = "https://subjective-cp.herokuapp.com"
    const response = axios.get("https://subjective-cp.herokuapp.com/request_image/name/"+this.state.username)
    response.then((res) => {
      console.log("in",res);
      url = url + res.data.image;
      console.log("GET " + url);
      this.setState({ imageUrl: url});
      console.log("00 ", res);
      console.log("000 ",this.state.imageUrl);
      console.log(response);
    });
    // .then(function (response) {
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .finally(function () {
    //   // always executed
    //   console.log("I always Execued");
    // });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.getSum()}></Navbar>
        <Form
          logined={this.state.logined}
          onChange={this.handleUsernameChange}
          onKeyPress={this.handleKeypress}
          value={this.state.username}
        ></Form>
        <div class="container">
          <button onClick={this.getImageUrl} className="disappear">GET Image URL (For debug)</button>
        </div>
        <main className={this.getAllClass()}>
          <img className="myimage" src={this.state.imageUrl} alt="" />
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
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-block"
            onClick={this.handleSubmit}
          >
            Done !!
          </button>
        </main>
      </React.Fragment>
    );
  }
  getSum() {
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