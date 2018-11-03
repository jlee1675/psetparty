import React, { Component } from 'react';
import Login from './components/Login'
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='app'>   
        <header>
            <div className='wrapper'>
              <h1>Pset Party</h1>
            </div>
        </header>
        <div className='container'>
          <Login />
        </div>
      </div>
    );
  }
}
export default App;