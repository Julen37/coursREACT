import { Component } from 'react';
// import Mycars from './components/Mycars';
import './App.css';
import Mycars from './components/MyCars';
import Maman from './components/Maman';
import MamanBis from './components/MamanBis';
import Form from './components/Form';

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
        <Form/>
      </div>
    )
  }
}

export default App;