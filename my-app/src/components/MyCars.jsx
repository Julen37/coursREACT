import { Component } from "react";
import Cars from './Cars.jsx'
import MyHeader from "./MyHeader.jsx";

class MyCars extends Component {

  state = {
    cars: ["Ford", "Mercedes", "Peugeot"],
  }

  render(){

    // console.log(this)
    
    return (
      <div>
          <MyHeader
            myStyle={this.props.color}
          >
            {this.props.title}
          </MyHeader>

          <h2>{this.props.subtitle}</h2>

          <Cars >{this.state.cars[0]}</Cars>
          <Cars color="Black" >{this.state.cars[1]}</Cars>
          <Cars >{this.state.cars[2]}</Cars>
      </div>
    )
  }
}

export default MyCars;