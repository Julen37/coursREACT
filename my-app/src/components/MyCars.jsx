import { Component } from 'react'
import Car from './Cars'
import Welcome from './Welcome'

class Mycars extends Component {

    state = {
        voitures: [
            {name: 'Ford', year: '2000', color: 'red'},
            {name: 'Mercedes', year: '2001', color: 'blue'},
            {name: 'Peugeot', year: '2020', color: ''}
        ]
    }

    addTenYears = () => {

        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })

        this.setState(
            {updatedState}
        )
    }

    getAge = year => {
        const now = new Date().getFullYear();
        const age = now - year;

        //ans, an
        let frenchYearStr = "";
        if (age === 1) {
            frenchYearStr = "an";
        } else if (age > 1) {
            frenchYearStr = "ans";
        }
        return `${age} ${frenchYearStr}`
    }

    render() {

        // const year = new Date().getFullYear();

        return (
            <div>
                <h1>{this.props.title}</h1>
                    
                <button onClick={this.addTenYears}> + 10 ans </button>

                {/* <Car color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + ' ans'}>{this.state.voitures[0].name}</Car>
                <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + ' ans'}>{this.state.voitures[1].name}</Car>
                <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + ' ans'}>{this.state.voitures[2].name}</Car> */}

                {/* {
                    this.state.voitures.map((voiture, index) => {
                        return (
                            <div key={index}>
                                <Car 
                                    color={voiture.color}
                                    year={year - voiture.year + ' ans'}
                                >
                                    {voiture.name}
                                </Car>
                            </div>
                        )
                    })
                } */}

                {
                    this.state.voitures.map(({name, color, year}, index) => {
                        return (
                            <div key={index}>
                                <Car 
                                    year={year}
                                    age={this.getAge(year)}
                                    color={color}
                                >
                                    {name}
                                </Car>
                            </div>
                        )
                    })
                }
                <Welcome/>
            </div>
           
        )
    }
}

export default Mycars