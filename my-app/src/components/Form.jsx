import { Component } from "react";
import Carz from "./Carz";

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
        return(
            <div>
                <Carz color={this.state.color} height="400"/>
                <h1>Commentaire</h1>

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
                    <button type="submit">clique</button>
                </form>
            </div>
        )
    }
}

export default Form;