import { Component } from "react";
import Carz from "./Carz";

class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ["", "red", "blue", "green", "black", "pink"]
    }

    handleUsername = e => {
        this.setState(
            {username: e.target.value}
        )
    }

    render() {
        return(
            <div>
                <Carz color="red" height="400"/>
                <h1>Commentaire</h1>
                <form>
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
                        <select name="" id="">
                            {
                                this.state.colors.map((color) =>
                                {
                                    return <option value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;