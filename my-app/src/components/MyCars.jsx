import { Component } from "react";
import Cars from './Cars.jsx'

class MyCars extends Component {
  render(){

    console.log(this)

    return (
      <div>
        <h1 style={{ color : this.props.color}} >{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <Cars children="Mercedes"/>
        <Cars />
        <Cars color="Black">Ford</Cars>
        <Cars >Peugeot</Cars>
      </div>
    )
  }
}

export default MyCars;