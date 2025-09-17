import React from 'react'

const MyHeaderOne = () => {
  return <h1>Commentaire composant myheaderone</h1>
}

export default MyHeaderOne

// fonctionne qu'en react native pas en web
// const styles = StyleSheet.create(
//     {
//         MaClassCss : {
//             color: 'blue',

//         }
//     }
// )
// on mettrait dans le h1 className="styles.MaClassCass" pour que ca fonctionne