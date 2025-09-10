import { Component } from "react";
import Cars from './Cars.jsx'

class MyCars extends Component {

  state = {
    cars: ["Ford", "Mercedes", "Peugeot"],
  }

  render(){

    // console.log(this)
    
    return (
      <div>
        <h1 style={{ color : this.props.color}} >{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <Cars >{this.state.cars[0]}</Cars>
        <Cars color="Black" >{this.state.cars[1]}</Cars>
        <Cars >{this.state.cars[2]}</Cars>
      </div>
    )
  }
}

export default MyCars;