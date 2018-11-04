import React, { Component } from 'react';
import Login from './components/Login'
import Profile from './components/Profile'
import JoinForm from './components/JoinForm'
import './App.css';


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
        users: [],
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
        <Login />
        
      </div>
    );
  }
}
export default App;