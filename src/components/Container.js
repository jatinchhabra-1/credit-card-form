import React, { Component } from 'react'
import FormComponent from './Form'
import CardComponent from './Card'
import '../styles/main.css'
import { CARD_NUMBER, CARD_CVV, CARD_EXP_MONTH, CARD_EXP_YEAR, CARD_HOLDER } from './constants/constant';

export default class ContainerComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            [CARD_NUMBER]: '',
            [CARD_HOLDER]: '',
            [CARD_EXP_MONTH]: '',
            [CARD_EXP_YEAR]: '',
            [CARD_CVV]: '',
            focusedControl: ''        
        }
    }
    
    handleChange = (state) => {
        this.setState(prevState => state);//     = prevState => state;
    }
    
    focusControl = (control) => {
        this.setState(prevState => {
            return {
                ...prevState,
                focusedControl: control
            }
        })
    }

    render() {
        return (
            <div className = "container-wrapper">
                <div className="container">
                    <CardComponent formState = {this.state}/>
                    <FormComponent formState = {this.state} focusControl = {this.focusControl} changeHandler = {this.handleChange}/>
                </div>
            </div>
        )
    }
}
