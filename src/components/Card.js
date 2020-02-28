import React, { Component } from 'react';
import '../styles/card.css'
import {CARD_NUMBER, CARD_EXP_YEAR, CARD_EXP_MONTH, CARD_HOLDER} from './constants/constant';

const img = require('../assets/visa.png');

class CardComponent extends Component {

    defaultCardNumber = '#### #### #### ####';
    defaultCardExpiryMonth = 'MM';
    defaultCardExpiryYear = 'YY';

    constructor(props) {
        super(props);
        this.state = {
            flipState: ''
        }
        this.toggleFlipState = this.toggleFlipState.bind(this);
        this.getFlipState = this.getFlipState.bind(this);
    }

    static getDerivedStateFromProps(nextProps){
        if(nextProps.formState.focusedControl === 'CARD_CVV') {
            return {
                flipState: 'is-flipped'
            }
        } else if(nextProps.formState.focusedControl ) {
            return {
                flipState: ''
            }
        } 
        return null;

    }

    render() {
        return (
            <div className="card-wrapper">
                <div className={"card " + this.getFlipState()} onClick={this.toggleFlipState}>
                    <div className="card-front">
                        <img src={img} alt="pic not found"/>
                        <div className = {"card-number-wrapper " + (this.checkFocusedElement(CARD_NUMBER) ? "focused": "") }>
                            <span className="card-number">{this.props.formState.CARD_NUMBER ? this.getCardNumber():  this.defaultCardNumber}</span>
                        </div>
                        <div className = "card-footer-container">
                            <div className={"card-holder-name-wrapper " + (this.checkFocusedElement(CARD_HOLDER) ? "focused": "")}>
                                <span className="helper-text">Card Holder's Name</span><br/>
                                <span className="card-holder-name">{this.props.formState.CARD_HOLDER.substring(0, 19)}</span>
                            </div>
                            <div className={"card-expiry-date-container " + (this.checkFocusedElement(CARD_EXP_MONTH) || this.checkFocusedElement(CARD_EXP_YEAR) ? "focused": "")}>
                                <span className="helper-text">Expiry Date</span><br/>
                                <span className="card-expiry-month">{this.props.formState.CARD_EXP_MONTH ? this.getExpirationMonth(): this.defaultCardExpiryMonth}/</span>
                                <span className="card-expiry-year">{this.props.formState.CARD_EXP_YEAR? this.getExpirationYear(): this.defaultCardExpiryYear}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-cvv-container">
                            <div className = "card-signature-wrapper">
                                <div className="card-signature-line"></div>
                                <div className="card-signature-line"></div>
                                <div className="card-signature-line"></div>
                            </div>
                            <span className="card-cvv">{this.props.formState.CARD_CVV}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getCardNumber() {
        const cardNumber = this.props.formState.CARD_NUMBER;
        return cardNumber.length < 19 ? cardNumber + this.defaultCardNumber.substring(cardNumber.length): cardNumber;
    }

    getExpirationMonth() {
        return this.props.formState.CARD_EXP_MONTH.padStart(2, 0);
    }

    getExpirationYear() {
        return this.props.formState.CARD_EXP_YEAR.substring(2);
    }

    checkFocusedElement(element) {
        return this.props.formState.focusedControl === element;
    }

    toggleFlipState() {
        const currFlipState = this.state.flipState === '' ? 'is-flipped' :  '';
        this.setState({
            flipState: currFlipState
        })
    }

    getFlipState() {
        return this.state.flipState;
    }

}

export default CardComponent;
