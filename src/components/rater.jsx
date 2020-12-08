import React, { Component } from "react";
import Rating from "react-rating";
import "../App.css";
import axios from "axios";
class Rater extends Component {
  render() {
    return (
      <div className="container">
          
          <Rating
            stop={10}
            onClick={this.handleRatingChange}
          ></Rating>
      </div>
    );
  }
  handleRatingChange = (rating) => {
    console.log("Index", this.props.rating.id, "Rating ", rating);
    this.props.onRateChange(rating, this.props.rating.id);
  };
  //   getImageUrl(){

  //     axios.get('https://subjective-cp.herokuapp.com/request_image/name/kfkfk')
  //         .then(response => console.log(response));
  //   }
}
// this.setState({ imageUrl: response.data.image })
export default Rater;
