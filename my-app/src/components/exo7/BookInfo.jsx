import React from 'react'

const BookInfo = ({title, author, year, }) => {
  if (title) {
    return (
      <div>
          <p>Titre: { title }</p>
          <p>Auteur: { author }</p>
          <p>Année de sortie: { year }</p>
      </div>
    )
  }
}

export default BookInfo
