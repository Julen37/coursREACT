import { Component } from "react";
import Carz from "./Carz";
import "./css/Form.css";
import MyHeaderOne from "./MyHeaderOne";
import styles from "./css/MyCss.module.css";

class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ["", "red", "blue", "green", "black", "pink"],
        comment: '',
    }

    handleUsername = e => {
        this.setState(
            {username: e.target.value}
        )
    }

    handleColor = event => {
        this.setState(
            {color: event.target.value}
        )
    }

    handleComments = event => {
        this.setState(
            {comment: event.target.value}
        )
    }

    handleSubmitForm = e => {
        e.preventDefault();
        console.log(`Username: ${this.state.username}, Couleur: ${this.state.color}, Commentaire: ${this.state.comment}`)
    }

    render() {
        
        const titreRouge = {
            fontSize: '50px', 
            color: 'red'
        }

        const myClass = this.props.head ? 'red' : 'blue';

        return(
            <div>
                <Carz color={this.state.color} height="400"/>
                <h1 style={{fontSize: '50px', color: 'red'}}>Commentaire</h1>
                <h1 style={titreRouge}>Commentaire</h1>

                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo </label>
                        <input type="text" value={this.state.username} onChange={this.handleUsername}/>
                    </div>

                    <div>
                        <label>Couleur</label>
                        <select name="" id="">
                            <option value="vert">Vert</option>
                            <option value="rouge">Rouge</option>
                            <option value="orange">Orange</option>
                        </select>
                        <select value={this.state.color} onChange={this.handleColor} name="" id="">
                            {
                                this.state.colors.map((color, index) =>
                                    {
                                        return <option key={index} value={color}>{color}</option>
                                    })
                                }
                        </select>
                    </div>
                    <div>
                        <label>Commentaire</label>
                        <textarea value={this.state.comment} onChange={this.handleComments} name="" id=""></textarea>
                    </div>
                    <button type="submit">clique et regarde ta console</button>
                </form>
                <div>
                    <hr />
                    <button className="buttonBlue">clik</button>
                    <p className={`${myClass} bigFont`}>je suis rouge ou bleu</p>
                    <h1 className={styles.green}>Commentaire 1</h1>
                    <MyHeaderOne/>
                </div>

                <div>
                    <hr />
                    <h1 className="fw-bold text-primary">Commentaire 2</h1>
                    <button className="btn btn-outline-danger">Valider</button>
                </div>
            </div>
        )
    }
}

export default Form;