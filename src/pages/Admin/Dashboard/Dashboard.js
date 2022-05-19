import React from 'react'

export default function Dashboard() {
    return (
        <div className="dashboard-content">
            {/* Titlebar */}
            <div id="titlebar">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Howdy, Tom!</h2>
                        {/* Breadcrumbs */}
                        <nav id="breadcrumbs">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li>Dashboard</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Notice */}
            <div className="row">
                <div className="col-md-12">
                    <div className="notification success closeable margin-bottom-30">
                        <p>Your listing <strong>Hotel Govendor</strong> has been approved!</p>
                        <a className="close" href="#" />
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="row">
                {/* Item */}
                <div className="col-lg-3 col-md-6">
                    <div className="dashboard-stat color-1">
                        <div className="dashboard-stat-content"><h4>6</h4> <span>Active Listings</span></div>
                        <div className="dashboard-stat-icon"><i className="im im-icon-Map2" /></div>
                    </div>
                </div>
                {/* Item */}
                <div className="col-lg-3 col-md-6">
                    <div className="dashboard-stat color-2">
                        <div className="dashboard-stat-content"><h4>726</h4> <span>Total Views</span></div>
                        <div className="dashboard-stat-icon"><i className="im im-icon-Line-Chart" /></div>
                    </div>
                </div>
                {/* Item */}
                <div className="col-lg-3 col-md-6">
                    <div className="dashboard-stat color-3">
                        <div className="dashboard-stat-content"><h4>95</h4> <span>Total Reviews</span></div>
                        <div className="dashboard-stat-icon"><i className="im im-icon-Add-UserStar" /></div>
                    </div>
                </div>
                {/* Item */}
                <div className="col-lg-3 col-md-6">
                    <div className="dashboard-stat color-4">
                        <div className="dashboard-stat-content"><h4>126</h4> <span>Times Bookmarked</span></div>
                        <div className="dashboard-stat-icon"><i className="im im-icon-Heart" /></div>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* Recent Activity */}
                <div className="col-lg-6 col-md-12">
                    <div className="dashboard-list-box with-icons margin-top-20">
                        <h4>Recent Activities</h4>
                        <ul>
                            <li>
                                <i className="list-box-icon sl sl-icon-layers" /> Your listing <strong><a href="#">Hotel Govendor</a></strong> has been approved!
                                <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                            </li>
                            <li>
                                <i className="list-box-icon sl sl-icon-star" /> Kathy Brown left a review <div className="numerical-rating" data-rating={5.0} /> on <strong><a href="#">Burger House</a></strong>
                                <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                            </li>
                            <li>
                                <i className="list-box-icon sl sl-icon-heart" /> Someone bookmarked your <strong><a href="#">Burger House</a></strong> listing!
                                <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                            </li>
                            <li>
                                <i className="list-box-icon sl sl-icon-star" /> Kathy Brown left a review <div className="numerical-rating" data-rating={3.0} /> on <strong><a href="#">Airport</a></strong>
                                <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                            </li>
                            <li>
                                <i className="list-box-icon sl sl-icon-heart" /> Someone bookmarked your <strong><a href="#">Burger House</a></strong> listing!
                                <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                            </li>
                            <li>
                                <i className="list-box-icon sl sl-icon-star" /> John Doe left a review <div className="numerical-rating" data-rating={4.0} /> on <strong><a href="#">Burger House</a></strong>
                                <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                            </li>
                            <li>
                                <i className="list-box-icon sl sl-icon-star" /> Jack Perry left a review <div className="numerical-rating" data-rating="2.5" /> on <strong><a href="#">Tom's Restaurant</a></strong>
                                <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Invoices */}
                <div className="col-lg-6 col-md-12">
                    <div className="dashboard-list-box invoices with-icons margin-top-20">
                        <h4>Invoices</h4>
                        <ul>
                            <li><i className="list-box-icon sl sl-icon-doc" />
                                <strong>Professional Plan</strong>
                                <ul>
                                    <li className="unpaid">Unpaid</li>
                                    <li>Order: #00124</li>
                                    <li>Date: 20/07/2019</li>
                                </ul>
                                <div className="buttons-to-right">
                                    <a href="dashboard-invoice.html" className="button gray">View Invoice</a>
                                </div>
                            </li>
                            <li><i className="list-box-icon sl sl-icon-doc" />
                                <strong>Extended Plan</strong>
                                <ul>
                                    <li className="paid">Paid</li>
                                    <li>Order: #00108</li>
                                    <li>Date: 14/07/2019</li>
                                </ul>
                                <div className="buttons-to-right">
                                    <a href="dashboard-invoice.html" className="button gray">View Invoice</a>
                                </div>
                            </li>
                            <li><i className="list-box-icon sl sl-icon-doc" />
                                <strong>Extended Plan</strong>
                                <ul>
                                    <li className="paid">Paid</li>
                                    <li>Order: #00097</li>
                                    <li>Date: 10/07/2019</li>
                                </ul>
                                <div className="buttons-to-right">
                                    <a href="dashboard-invoice.html" className="button gray">View Invoice</a>
                                </div>
                            </li>
                            <li><i className="list-box-icon sl sl-icon-doc" />
                                <strong>Basic Plan</strong>
                                <ul>
                                    <li className="paid">Paid</li>
                                    <li>Order: #00091</li>
                                    <li>Date: 30/06/2019</li>
                                </ul>
                                <div className="buttons-to-right">
                                    <a href="dashboard-invoice.html" className="button gray">View Invoice</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Copyrights */}
                <div className="col-md-12">
                    <div className="copyrights">© 2021 Listeo. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}
