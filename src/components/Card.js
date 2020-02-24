import React, { Component } from 'react'

class CardComponent extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-number-wrapper">
                    <span className="card-number">#### #### #### ####</span>
                </div>
                <div className="card-holder-name-wrapper">
                    <span className="card-holder-name">Name</span>
                </div>
                <div className="card-expiry-date-container">
                    <span className="card-expiry-month">MM</span>/
                    <span className="card-expiry-year">YY</span>
                </div>
            </div>
        )
    }
}

export default CardComponent;
