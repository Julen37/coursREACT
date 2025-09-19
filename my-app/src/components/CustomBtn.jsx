import React from 'react'

const Btn = ({children, btnStyle, handleClick}) => {

    const customBtn = {
        backgroundColor: 'grey',
        border: 'none',
        color:'#fff',
        fontSize: '19px',
        padding: '15px 30px',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '7px',
        display: 'block',
        margin: '5px auto'
    }

  return (
    <div> 
      <button onClick={handleClick} style={{...customBtn, ...btnStyle}}>{children}</button>
      {/* ... c'est le spread operator qui permet de récuperer l'objet et de pouvoir le modifier, ajouter, supprimer ce qu'il y a l'interrieur*/}
    </div>
  )
}

export default Btn
