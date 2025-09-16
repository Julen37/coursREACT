import { Component } from 'react'
import Toto from './Toto'

class Maman extends Component {

    state = {
        messageMaman: null,
        messageToto: null,
    }

    ordreMaman = () => {
        this.setState (
            {messageMaman: 'Va te coucher'}
        )
    }

    reponseToto = () => {
        this.setState (
            {messageToto: 'non je veux jouer >:('}
        )
    }

    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button onClick={this.ordreMaman}>Ordre de la mère</button>
                <p>{this.state.messageMaman}</p>
                <hr />
                <Toto 
                    name="Toto"
                    leState={this.state}
                    reponseTotoProps={this.reponseToto}
                />
            </div>
        )
    }
}
export default Maman