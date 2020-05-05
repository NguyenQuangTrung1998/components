import React, {Component} from 'react';
import './App.css';
import Index from './components/Index.js';
class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Index />
        </header>
      </div>
    );
  }
}

export default App;
