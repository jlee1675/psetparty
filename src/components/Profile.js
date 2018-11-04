import React, { Component } from 'react';
import './Profile.css';
import JoinForm from './JoinForm'

class Profile extends Component {
    constructor (props){
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <section className='profile'>
                    <h2>Hey there! You are studying {this.props.pset} and you are available at {this.props.time}.</h2>
            </section>
        )
    }
}

export default Profile;