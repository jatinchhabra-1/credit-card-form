import React, { Component } from 'react'
import '../styles/form.css'
import { MONTH, CARD_NUMBER, CARD_CVV, CARD_EXP_MONTH, CARD_EXP_YEAR, CARD_HOLDER } from './constants/constant';

class FormComponent extends Component {

    shouldUpdateState = false;

    render() {
        return (
            <form className="form">
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" className="form-control" maxLength="19" id="cardNumber"
                        aria-describedby="emailHelp" onFocus={(e) => this.props.focusControl(CARD_NUMBER)}
                        onBlur = {() => this.props.focusControl('')}
                        onKeyDown={(e) => this.keyDown(e)} onChange={(e) => this.setFormVal(CARD_NUMBER, e)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your card details with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="cardHolderName">Card Holder's Name</label>
                    <input type="text" className="form-control" id="cardHolderName"
                        onBlur = {() => this.props.focusControl('')}
                        onFocus={(e) => this.props.focusControl(CARD_HOLDER)} onChange={(e) => this.setFormVal(CARD_HOLDER, e)}
                    />
                </div>
                <div className="flex-container">
                    <div className="expiration-time-container">
                        <div className="form-group">
                            <label htmlFor="expirationMonth">Expiration Date</label>
                            <select id="expirationMonth" className="form-control"
                                onFocus={(e) => this.props.focusControl(CARD_EXP_MONTH)} 
                                onBlur = {() => this.props.focusControl('')}
                                onChange={(e) => this.setFormVal(CARD_EXP_MONTH, e)}>
                                {this.getOptionsArray(MONTH)}
                            </select>
                        </div>
                        <div className="form-group">
                            <select id="expirationYear" className="form-control"
                                onFocus={(e) => this.props.focusControl(CARD_EXP_YEAR)} 
                                onBlur = {() => this.props.focusControl('')}
                                onChange={(e) => this.setFormVal(CARD_EXP_YEAR, e)}>
                                {this.getOptionsArray()}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardCVV">CVV</label>
                        <input type="text" className="form-control" id="cardCVV" maxLength="3"
                            onFocus={(e) => this.props.focusControl(CARD_CVV)}
                            onBlur = {() => this.props.focusControl('')}
                            onChange={(e) => this.setFormVal(CARD_CVV, e)}
                        />
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary" onClick={(e) => this.submitForm(e)}>Submit</button>
            </form>
        )
    }

    getOptionsArray(option) {
        var optionsArray = [];
        if (option === MONTH) {
            optionsArray.push(<option hidden key="">Month</option>)
            for (let i = 1; i <= 12; i++) {
                pushToOptionsArray(i);
            }
        } else {
            optionsArray.push(<option hidden key="">Year</option>)
            var date = new Date();
            var currentYear = date.getFullYear();
            for (let i = currentYear; i <= currentYear + 20; i++) {
                pushToOptionsArray(i);
            }
        }
        function pushToOptionsArray(i) {
            optionsArray.push(<option value={i} key={i}>{i}</option>);
        }
        return optionsArray;
    }

    setFormVal(identifier, event) {
        let value = event.target.value

        if (identifier === CARD_NUMBER) {
            if (value.length !== 19) {
                if (this.shouldUpdateState && (value.length + 1) % 5 === 0) {
                    value += ' ';
                } else if (value.charAt(value.length - 1) === ' ') {
                    value = value.trim();
                }
                document.getElementById('cardNumber').value = value;
            }
        }
        this.props.changeHandler({
            ...this.props.formState,
            [identifier]: value
        });
    }

    keyDown(event) {
        this.shouldUpdateState = (event.key === 'Backspace' || event.key === 'Delete') ? false : true;
    }

    submitForm(event) {
        event.preventDefault();
        this.props.focusControl('remove-focus');
        alert('Card Details have been saved successfully');
    }
}

export default FormComponent;
