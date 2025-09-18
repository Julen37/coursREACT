import { Component } from "react";
import Book from "./book";
import styled from 'styled-components';

class Books extends Component {

    state = {
        books : [
            {title: 'Achille', author: 'Meiller', year: ''},
            {title: 'miroir', author: 'Dubos', year: '2015'},
            {title: 'la foret', author: 'julen', year: '2025'},
            {title: 'la foret 2', author: 'julen1', year: '2025'},
            {title: 'la foret 3', author: 'julen2', year: '2025'},
            
        ],
        addBtn : null,

    }

    addBtnText = () => {
        this.setState (
            {addBtn: 'Ce livre a été ajouté mais je ne sais où dsl'}
        )
    }

    render(){

        const Title = styled.h1`
            font-size: 80px;
            margin: 0.5em 0 0.5em 0 ;
        `

        return (
            <div >
                <hr />
                <Title>Books exo 7 :D</Title>
                    <Book 
                        leState={this.state}
                        addBtnTextProps={this.addBtnText}
                    />
            </div>
        )
    }
}
export default Books;
