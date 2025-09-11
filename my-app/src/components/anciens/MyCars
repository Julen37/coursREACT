import { Component } from "react";
import Cars from './Cars.jsx'
import MyHeader from "./MyHeader.jsx";

class MyCars extends Component {

  state = {
    cars: ["Ford", "Mercedes", "Peugeot"],
  }

    noCopy = () =>{
      alert('merci de ne pas copier le texte');
    }

    addStyle = (e) => {
      console.log(e.target)

      // if(e.target.classList.contains('styled')) {
      //   e.target.classList.remove('styled');
      // } else {
      //   e.target.classList.add('styled');
      // }
      
      //ternaire
      {e.target.classList.contains('styled') ? e.target.classList.remove('styled') : e.target.classList.add('styled')}
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

          <h1 onMouseOver={this.addStyle}>{this.props.subtitle}</h1>

          <Cars >{this.state.cars[0]}</Cars>
          <Cars color="Black" >{this.state.cars[1]}</Cars>
          <Cars >{this.state.cars[2]}</Cars>

          <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque excepturi quam veritatis dolor vitae, quia eligendi dicta nam accusamus quis, ducimus nostrum. Minus vitae dignissimos libero eligendi voluptas voluptatum?</p>
      </div>
    )
  }
}

export default MyCars;