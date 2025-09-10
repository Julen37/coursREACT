// rafce pour creer une arrow function

const Cars = ({children, color}) => {

  // console.log(props.children);

// condition if en ternaire
  // const colorInfo = color ? <p>Couleur : { color } </p> : <p>Couleur : Néant </p>;
  // au lieu de mettre en deux ligne avec la const + le { colorInfo } on peut ecrire tout direct pour economiser une ligne

// return en ternaire
  return children ? (
    <div style={ {backgroundColor: 'red', width: '400px', padding: '10px', margin:'5px auto'} }> 
      <p>Marque : { children }</p>
      { color ? <p>Couleur : { color } </p> : <p>Couleur : Néant </p> }
    </div>
  ) : <p>Pas de data!</p>
}

export default Cars
