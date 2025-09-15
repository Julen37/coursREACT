import { Component } from 'react';
// import Mycars from './components/Mycars';
import './App.css';
import Mycars from './components/MyCars';
import Maman from './components/Maman';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
        <Maman/>
      </div>
    )
  }
}

export default App;