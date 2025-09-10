// rafce pour creer une arrow function

const Cars = (props) => {

  // console.log(props.children);

  return (
    <div style={ {backgroundColor: 'red', width: '400px', padding: '10px', margin:'5px auto'} }> 
      <p>Marque : { props.children }</p>
      <p>Couleur : { props.color } </p>
    </div>
  )
}

export default Cars
