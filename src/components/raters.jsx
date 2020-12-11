import React, { Component } from "react";
import Rater from "./rater";
import '../App.css'
class Raters extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }
  showAlert() {

    this.refs.rater0.handleReset();
    this.refs.rater1.handleReset();
    this.refs.rater2.handleReset();
    this.refs.rater3.handleReset();
    this.refs.rater4.handleReset();
  }
  render() {
    return (
      <div className="container">
          
        {this.props.ratings.map((rating) => (
            <div>
            <h5><span class="badge badge-secondary m-2">{this.getName(rating.id)}</span></h5>
          <Rater
            ref ={"rater" + rating.id}
            onRateChange={this.handleRatingChange}
            key={rating.id}
            rating={rating}
          ></Rater>
          </div>
          
        ))}
        
      </div>
    );
  }
  handleRatingChange = (value, index) => {
    this.props.onRateChange(value, index);
  };
  getName(id){
    var v = ['血量 (Health Points)', '物理攻擊 (Physical attack)', '魔法攻擊 (Magic Attack)', '反應速度 (Speed)', '爆擊 (Crit)'];
    return v[id];
  }

}

export default Raters;
