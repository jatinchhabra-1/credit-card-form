import React, { Component } from 'react'
import FormComponent from './Form'
import CardComponent from './Card'
import '../styles/main.css'

export default class ContainerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardNo: '',
            cardHolder: '',
            cardExpiryMonth: '',
            cardExpiryYear: '',
            cardCVV: ''            
        }
    }
    
    handleChange = (state) => {
        this.setState(state);
    }

    render() {
        return (
            <div className="container">
                <CardComponent formState = {this.state}/>
                <FormComponent formState = {this.state} changeHandler = {this.handleChange}/>
            </div>
        )
    }
}
