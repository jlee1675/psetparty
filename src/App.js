import React, { Component } from 'react';
import Login from './containers/Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Pset Party</h1>
            </div>
        </header>
        <div className='container'>
<<<<<<< HEAD
          <section className='add-item'>
              <form>
                <input type="text" name="username" placeholder="What's your name?" />
                <input type="text" name="currentItem" placeholder="What course are you?" />
                <input type="text" name="email" placeholder="What's your Kerberos?" />
                <input type="text" name="phonenumb" placeholder="What's your phone number?" />
                <button>Submit</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
=======
          <Login />
>>>>>>> 1bbf13aac397fd6bce9a3a49846bd8caca471f53
        </div>
      </div>
    );
  }
}
export default App;