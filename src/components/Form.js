import React, { Component } from 'react'
import { MONTH } from './constants/constant';

class FormComponent extends Component {
    render() {
        return (
            <form className="form">
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" className="form-control" id="cardNumber" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="cardHolderName">Card Holder's Name</label>
                    <input type="text" className="form-control" id="cardHolderName" />
                </div>
                <div className="form-group">
                    <label className="form-check-label" htmlFor="expirationMonth">Expiration Date</label>
                    <select id="expirationMonth">
                        {this.getOptionsArray(MONTH)}
                    </select>
                </div>
                <div className="form-group">
                    <select id="expirationYear">
                        {this.getOptionsArray()}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="cardCVV">CVV</label>
                    <input type="text" className="form-control" id="cardCVV" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

    getOptionsArray(option) {
        console.log(option)
        var optionsArray = [];
        if(option === MONTH) {
            for(let i = 1; i<=12; i++) {
                pushToOptionsArray(i);
            }
        } else {
            var date = new Date();
            var currentYear = date.getFullYear();
            for(let i = currentYear; i<= currentYear+50; i++) {
                pushToOptionsArray(i);
            }
        }
        function pushToOptionsArray(i) {
            optionsArray.push(<option value = {i} key={i}>{i}</option>);
        }
        return optionsArray;
    }
}

export default FormComponent;
