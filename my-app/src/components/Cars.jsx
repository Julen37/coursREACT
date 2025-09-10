// rafce pour creer une arrow function

const Cars = ({children, color}) => {

  // console.log(props.children);

// condition if en ternaire
  const colorInfo = color ? <p>Couleur : { color } </p> : <p>Couleur : Néant </p>;

  return (
    <div style={ {backgroundColor: 'red', width: '400px', padding: '10px', margin:'5px auto'} }> 
      <p>Marque : { children }</p>
      { colorInfo }
    </div>
  )
}

export default Cars
