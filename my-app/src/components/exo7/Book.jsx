import React from 'react'
import BookInfo from './BookInfo'
import styled from 'styled-components';

const Book = props => {
    
    const Button = styled.button`
        border-radius: 20px;
    `
    const Card = styled.div`
        background-color: grey;
        width: 20em;
        margin: 0 0 1em 0;
        padding: 5px;
        border-radius: 18px;
    `

    const DivBook = styled.div`
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
    `

  return (
    <DivBook>
        {
            props.leState.books.map(({title, author, year}, index) => {
                return (
                    <Card key={index}>
                        <BookInfo
                            title={title}
                            author={author}
                            year={year}
                        />
                        <Button onClick={props.addBtnTextProps}>ajouter</Button>
                        <p>{props.leState.addBtn}</p>
                    </Card>
                )
            })
        }
    </DivBook>
  )
}

export default Book
