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
                    <h2>here is {this.props.pset}</h2>
            </section>
        )
    }
}

export default Profile;