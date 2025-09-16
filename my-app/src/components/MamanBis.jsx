import { Component } from 'react';
import TotoBis from './TotoBis';

class MamanBis extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
        disabled: true
    }

    // Compléter le code de la méthode ordreMaman.
    ordreMaman = msg => this.setState({messageMaman: msg, disabled: false});
    reponseToto = msg => this.setState({ messageToto: msg});

    render() {
        return (
            <div>
                <hr />
                <hr />
                <h1>MamanBis</h1>
                <button 
                    onClick={() => this.ordreMaman("Va ranger ta chambre")}
                >Order de la mère</button>

                <p>{this.state.messageMaman}</p>

                <hr />
                
                <TotoBis 
                    name="TotoBis"
                    reponseTotoProps={this.reponseToto}
                    leState={this.state}
                />
            </div>
        )
    }
}

export default MamanBis;