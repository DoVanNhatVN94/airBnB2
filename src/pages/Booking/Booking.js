import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Booking() {
    return (
        <div id="wrapper">
            {/* Titlebar
================================================== */}
            <div id="titlebar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Booking</h2>
                            {/* Breadcrumbs */}
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li>Booking</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content
================================================== */}
            {/* Container */}
            <div className="container">
                <div className="row">
                    {/* Content
		================================================== */}
                    <div className="col-lg-8 col-md-8 padding-right-30">
                        <h3 className="margin-top-0 margin-bottom-30">Personal Details</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <label>First Name</label>
                                <input type="text" defaultValue />
                            </div>
                            <div className="col-md-6">
                                <label>Last Name</label>
                                <input type="text" defaultValue />
                            </div>
                            <div className="col-md-6">
                                <div className="input-with-icon medium-icons">
                                    <label>E-Mail Address</label>
                                    <input type="text" defaultValue />
                                    <i className="im im-icon-Mail" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-with-icon medium-icons">
                                    <label>Phone</label>
                                    <input type="text" defaultValue />
                                    <i className="im im-icon-Phone-2" />
                                </div>
                            </div>
                        </div>
                        <h3 className="margin-top-55 margin-bottom-30">Payment Method</h3>
                        {/* Payment Methods Accordion */}
                        <div className="payment">
                            <div className="payment-tab payment-tab-active">
                                <div className="payment-tab-trigger">
                                    <input defaultChecked id="paypal" name="cardType" type="radio" defaultValue="paypal" />
                                    <label htmlFor="paypal">PayPal</label>
                                    <img className="payment-logo paypal" src="../../../i.imgur.com/ApBxkXU.png" alt />
                                </div>
                                <div className="payment-tab-content">
                                    <p>You will be redirected to PayPal to complete payment.</p>
                                </div>
                            </div>
                            <div className="payment-tab">
                                <div className="payment-tab-trigger">
                                    <input type="radio" name="cardType" id="creditCart" defaultValue="creditCard" />
                                    <label htmlFor="creditCart">Credit / Debit Card</label>
                                    <img className="payment-logo" src="../../../i.imgur.com/IHEKLgm.png" alt />
                                </div>
                                <div className="payment-tab-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card-label">
                                                <label htmlFor="nameOnCard">Name on Card</label>
                                                <input id="nameOnCard" name="nameOnCard" required type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-label">
                                                <label htmlFor="cardNumber">Card Number</label>
                                                <input id="cardNumber" name="cardNumber" placeholder="1234  5678  9876  5432" required type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card-label">
                                                <label htmlFor="expirynDate">Expiry Month</label>
                                                <input id="expiryDate" placeholder="MM" required type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card-label">
                                                <label htmlFor="expiryDate">Expiry Year</label>
                                                <input id="expirynDate" placeholder="YY" required type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card-label">
                                                <label htmlFor="cvv">CVV</label>
                                                <input id="cvv" required type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Payment Methods Accordion / End */}
                        <NavLink to="/profile" className="button booking-confirmation-btn margin-top-40 margin-bottom-65">Confirm and Pay</NavLink>
                    </div>
                    {/* Sidebar
		================================================== */}
                    <div className="col-lg-4 col-md-4 margin-top-0 margin-bottom-60">
                        {/* Booking Summary */}
                        <div className="listing-item-container compact order-summary-widget">
                            <div className="listing-item">
                                <img src="images/listing-item-04.jpg" alt />
                                <div className="listing-item-content">
                                    <div className="numerical-rating" data-rating={5.0} />
                                    <h3>Burger House</h3>
                                    <span>2726 Shinn Street, New York</span>
                                </div>
                            </div>
                        </div>
                        <div className="boxed-widget opening-hours summary margin-top-0">
                            <h3><i className="fa fa-calendar-check-o" /> Booking Summary</h3>
                            <ul>
                                <li>Date <span>10/20/2019</span></li>
                                <li>Hour <span>5:30 PM</span></li>
                                <li>Guests <span>2 Adults</span></li>
                                <li className="total-costs">Total Cost <span>$9.00</span></li>
                            </ul>
                        </div>
                        {/* Booking Summary / End */}
                    </div>
                </div>
            </div>
            {/* Container / End */}
            {/* Back To Top Button */}
            <div id="backtotop"><a href="#" /></div>
        </div>

    )
}

