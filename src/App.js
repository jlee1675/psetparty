import React, { Component } from 'react';
import Login from './components/Login'
import Profile from './components/Profile'
import JoinForm from './components/JoinForm'
import DataCollection from './util/DataCollection'
import './App.css';


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
        users: []
    }
    this.loadData();
  }
  findGroup(student) {
    for (let other in this.state.users) {
      if (other.subject == student.subject) {
          if (other.time == student.time) {
              this.setState({
                users: this.state.users[student].push(other.id)
              });   
          }
      }
  }
  }
  async loadData() {
    let data = await DataCollection.list(); 
    this.setState({
      users: data
    });  
   }
  // loadData() {
  //   const docRef = db.doc("users/1");
  //   console.log("plsease work")
  //   docRef.set({
  //     int: 3
  //   }).then(function(){
  //     console.log("Status saved!");
  //   }).catch(function(error){
  //     console.log("Got an error: ", error)
  //   });


  // }
  
  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Pset Party</h1>
            </div>
        </header>
        {this.state.users.map((doc, i) => {
          return (
            <div key={i}> 
              <span> {doc.id} </span>
            </div> 
          )
        })}
        <Login />
        
      </div>
    );
  }
}
export default App;