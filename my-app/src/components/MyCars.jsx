import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        voiture: [
            {name: 'Ford', year: '2000', color: 'red'},
            {name: 'Mercedes', year: '2001', color: 'blue'},
            {name: 'Peugeot', year: '2020', color: ''}
        ]
    }

    addTenYears = () => {

        const updatedState = this.state.voiture.map((param) => {
            return param.year -= 10;
        })

        this.setState(
            {updatedState}
        )
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                    
                <button onClick={this.addTenYears}> + 10 ans </button>

                <Car color={this.state.voiture[0].color} year={this.state.voiture[0].year}>{this.state.voiture[0].name}</Car>
                <Car color={this.state.voiture[1].color} year={this.state.voiture[1].year}>{this.state.voiture[1].name}</Car>
                <Car color={this.state.voiture[2].color} year={this.state.voiture[2].year}>{this.state.voiture[2].name}</Car>
            </div>
           
        )
    }
}

export default Mycars