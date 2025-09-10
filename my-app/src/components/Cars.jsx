// rafce pour creer une arrow function
import Wrapper from "./Wrapper"

const Cars = ({children, color}) => {

  // console.log(props.children);

// condition if en ternaire
  // const colorInfo = color ? <p>Couleur : { color } </p> : <p>Couleur : Néant </p>;
  // au lieu de mettre en deux ligne avec la const + le { colorInfo } on peut ecrire tout direct pour economiser une ligne

const colorInfo = color ? color : "Néant";

// return en ternaire
  return children && (
    <Wrapper> 
      <p>Marque : { children }</p>
      <p>Couleur: { colorInfo }</p>
      {/* { color ? <p>Couleur : { color } </p> : <p>Couleur : Néant </p> } */}
    </Wrapper>
  ) 
  // : <p>Pas de data!</p>
}

export default Cars
