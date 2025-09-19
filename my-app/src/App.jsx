import { Component } from 'react';
// import Mycars from './components/Mycars';
import './App.css';
import Mycars from './components/Mycars.jsx';
import Maman from './components/Maman';
import MamanBis from './components/MamanBis';
import Form from './components/Form';
import Books from './components/exo7/books';
import Btn from './components/CustomBtn.jsx';

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
        <Form head={true}/>
        <Books/>
      </div>
    )
  }
}

export default App;