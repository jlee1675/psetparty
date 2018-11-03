import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor (props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        };
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            return(
                <button onClick={this.handleLogoutClick}> Sign Out</button>
            )
        } else {
            return(
                <section className='add-item'>
                  <form>
                    <input type="text" name="username" placeholder="What's your name?" />
                    <input type="text" name="currentItem" placeholder="What course are you?" />
                    <input type="text" name="email" placeholder="What's your Kerberos?" />
                    <input type="text" name="phonenumb" placeholder="What's your phone number?" />
                    <button onClick={this.handleLoginClick}> Sign Up </button>
                  </form>
              </section>
            )
        }
    }
}

export default Login;