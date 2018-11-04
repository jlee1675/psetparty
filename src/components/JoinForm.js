import React, { Component } from 'react';
import './JoinForm.css';
import Profile from './Profile'

class JoinForm extends Component {
    constructor (props){
        super(props);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handlePset = this.handlePset.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.state = {
            pset: '',
            time: '',
            isFormSubmit: false
        };
    }
    handleSubmitClick() {
        this.setState({isFormSubmit: true});
    }
    handlePset(event){
        this.setState({pset: event.target.value});
    }

    handleTime(event){
        this.setState({time: event.target.value});
    }
    render() {
        const isFormSubmit = this.state.isFormSubmit;
        if (isFormSubmit) {
            return(
                <Profile pset={this.state.pset} time={this.state.time}/>
            )

        } else {
            return (
                <section className='pset-info'>
                    <form>
                        <input type="text" name="subject" placeholder="What subject are you psetting? Enter course number. " onChange={this.handlePset} />
                        <input type="text" name="time" placeholder="When are you available? Enter XX:XX. " onChange={this.handleTime} />
                        <button onClick={this.handleSubmitClick}> Submit</button>
                        </form>
                </section>
            )
        }
        
  
    }


}
export default JoinForm;