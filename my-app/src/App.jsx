import { Component } from 'react';
// import Mycars from './components/Mycars';
import './App.css';
import Mycars from './components/MyCars';
import Maman from './components/Maman';
import MamanBis from './components/MamanBis';
import Carz from './components/Carz';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
        <Maman/>
        <MamanBis/>
        <Carz color="red" height="400"/>
      </div>
    )
  }
}

export default App;