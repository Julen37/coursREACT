// rafce pour creer une arrow function

const Cars = ({children, color}) => {

  // console.log(props.children);

  return (
    <div style={ {backgroundColor: 'red', width: '400px', padding: '10px', margin:'5px auto'} }> 
      <p>Marque : { children }</p>
      <p>Couleur : { color } </p>
    </div>
  )
}

export default Cars
