import React, { Component } from 'react';
import './JoinForm.css';
import Profile from './Profile'

class JoinForm extends Component {
    constructor (props){
        super(props);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.state = {
            isFormSubmit: false
        };
    }
    handleSubmitClick() {
        this.setState({isFormSubmit: true});
    }
    render() {
        const isFormSubmit = this.state.isFormSubmit;
        if (isFormSubmit) {
            return(
                <Profile />
            )

        } else {
            return (
                <section className='student-info'>
                    <form>
                        <input type="text" name="subject" placeholder="What subject are you psetting? Enter course number. " />
                        <input type="text" name="time" placeholder="When are you available? Enter XX:XX. " />
                        <button onClick={this.handleSubmitClick}> Submit</button>
                        </form>
                </section>
            )
        }
        
  
    }


}
export default JoinForm;