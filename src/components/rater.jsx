import React, { Component } from "react";
import { Rating } from "semantic-ui-react";
import "../App.css";
import axios from "axios";
class Rater extends Component {
  state = { rating: 0 };

  handleChange = (e) => {
    this.setState({ rating: e.target.value });
    this.props.onRateChange(e.target.value, this.props.rating.id);
  };
  handleReset(){
    this.setState({ rating: 0 });
  };
  render() {
    const { rating } = this.state;

    return (
      <div>
        <div>Rating: {rating}</div>
        <input
          type="range"
          min={0}
          max={10}
          value={rating}
          onChange={this.handleChange}
          
        />
        <br />
      </div>
    );
  }
}
// render() {
//   return (
//     <div className="container">

//         <Rating
//           stop={10}
//           onClick={this.handleRatingChange}
//         ></Rating>
//     </div>
//   );
// }
// handleRatingChange = (rating) => {
//   console.log("Index", this.props.rating.id, "Rating ", rating);
//   this.setState({rating})
//   this.props.onRateChange(rating, this.props.rating.id);
// };
//   getImageUrl(){

//     axios.get('https://subjective-cp.herokuapp.com/request_image/name/kfkfk')
//         .then(response => console.log(response));
//   }
// this.setState({ imageUrl: response.data.image })
export default Rater;
