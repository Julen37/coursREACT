import { Component } from 'react'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MyCars from './components/MyCars.jsx'

class App extends Component {

  state = {
    titre: 'Mon catalogue voitures',
    sous_titre: 'Les modèles :',
    color: 'green'
  }

  onclick = () => {
    this.setState(
      {titre: 'Mon nouveau titre'}
    )
  }

  onclickViaParam = (titre) => {
    this.setState(
      {titre: titre}
    )
  }

  // un bind permet de fixer la valeur du this dans une fonction 
  // ici on fixe this a App et pas a l'evenement click
  onclickViaBind = (param) => {
    this.setState(
      {titre: param}
    )
  }

  changeViaImput =(e) => {
    this.setState(
      {titre: e.target.value}
    )
  }

  render(){
    return (
      <div>
        {/* <MyCars></MyCars> */}
        <MyCars title={this.state.titre} 
                subtitle={this.state.sous_titre} 
                color={this.state.color}
        />
        <button onClick={this.onclick}>Changer le nom du titre</button>
        <button onClick={()=> this.onclickViaParam('Titre via parametre')}>Changer le nom du titre via parametre</button>
        <button onClick={this.onclickViaBind.bind(this, 'Titre via bind')}>Changer le nom du titre via bind</button>
        <input type="text" onChange={this.changeViaImput} value={this.state.titre}/>
      </div>
    )
  }
}
export default App;


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
