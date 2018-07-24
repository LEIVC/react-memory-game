import React, { Component } from "react";
//import characters from "../Images.json";

class ImgCard extends Component {

  render() {
    return (
      <div className="card col-md-3 col-sm-7">
        <div className="img-container" onClick={() => this.props.handleClick(this.props.name)} >
          <img className="cardImg" alt={this.props.name} src={this.props.img} />
        </div>
      </div>
    )
  };

}
export default ImgCard;
