import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor (props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <section className='add-item'>
              <form>
                <input type="text" name="username" placeholder="What's your name?" />
                <input type="text" name="currentItem" placeholder="What course are you?" />
                <input type="text" name="email" placeholder="What's your Kerberos?" />
                <input type="text" name="phonenumb" placeholder="What's your phone number?" />
                <button>Add Item</button>
              </form>
          </section>
        )
    }
}

export default Login;