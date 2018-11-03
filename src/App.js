import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
<<<<<<< HEAD
              <h1>Pset Party</h1>
              
=======
              <h1>Fun Food Friends</h1>
>>>>>>> dde198dd79dbf6cf866c11f2688a78dae1c7de32
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form>
                <input type="text" name="username" placeholder="What's your name?" />
                <input type="text" name="currentItem" placeholder="What are you studying?" />
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;