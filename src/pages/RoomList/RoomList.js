import React from 'react'
import {NavLink} from 'react-router-dom'
export default function RoomList() {
    return (
        <div id="wrapper">
            {/* Content
  ================================================== */}
            <div className="fs-container">
                <div className="fs-inner-container content">
                    <div className="fs-content">
                        {/* Search */}
                        <section className="search">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* Row With Forms */}
                                    <div className="row with-forms">
                                        {/* Main Search Input */}
                                        <div className="col-fs-6">
                                            <div className="input-with-icon">
                                                <i className="sl sl-icon-magnifier" />
                                                <input type="text" placeholder="What are you looking for?" defaultValue />
                                            </div>
                                        </div>
                                        {/* Main Search Input */}
                                        <div className="col-fs-6">
                                            <div className="input-with-icon location">
                                                <div id="autocomplete-container" data-autocomplete-tip="type and hit enter">
                                                    <input id="autocomplete-input" type="text" placeholder="Location" />
                                                </div>
                                                <a href="#"><i className="fa fa-map-marker" /></a>
                                            </div>
                                        </div>
                                        {/* Filters */}
                                        <div className="col-fs-12">
                                            {/* Panel Dropdown / End */}
                                            <div className="panel-dropdown">
                                                <a href="#">Categories</a>
                                                <div className="panel-dropdown-content checkboxes categories">
                                                    {/* Checkboxes */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input id="check-1" type="checkbox" name="check" defaultChecked className="all" />
                                                            <label htmlFor="check-1">All Categories</label>
                                                            <input id="check-2" type="checkbox" name="check" />
                                                            <label htmlFor="check-2">Shops</label>
                                                            <input id="check-3" type="checkbox" name="check" />
                                                            <label htmlFor="check-3">Hotels</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input id="check-4" type="checkbox" name="check" />
                                                            <label htmlFor="check-4">Eat &amp; Drink</label>
                                                            <input id="check-5" type="checkbox" name="check" />
                                                            <label htmlFor="check-5">Fitness</label>
                                                            <input id="check-6" type="checkbox" name="check" />
                                                            <label htmlFor="check-6">Events</label>
                                                        </div>
                                                    </div>
                                                    {/* Buttons */}
                                                    <div className="panel-buttons">
                                                        <button className="panel-cancel">Cancel</button>
                                                        <button className="panel-apply">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Panel Dropdown / End */}
                                            {/* Panel Dropdown */}
                                            <div className="panel-dropdown wide">
                                                <a href="#">More Filters</a>
                                                <div className="panel-dropdown-content checkboxes">
                                                    {/* Checkboxes */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input id="check-a" type="checkbox" name="check" />
                                                            <label htmlFor="check-a">Elevator in building</label>
                                                            <input id="check-b" type="checkbox" name="check" />
                                                            <label htmlFor="check-b">Friendly workspace</label>
                                                            <input id="check-c" type="checkbox" name="check" />
                                                            <label htmlFor="check-c">Instant Book</label>
                                                            <input id="check-d" type="checkbox" name="check" />
                                                            <label htmlFor="check-d">Wireless Internet</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input id="check-e" type="checkbox" name="check" />
                                                            <label htmlFor="check-e">Free parking on premises</label>
                                                            <input id="check-f" type="checkbox" name="check" />
                                                            <label htmlFor="check-f">Free parking on street</label>
                                                            <input id="check-g" type="checkbox" name="check" />
                                                            <label htmlFor="check-g">Smoking allowed</label>
                                                            <input id="check-h" type="checkbox" name="check" />
                                                            <label htmlFor="check-h">Events</label>
                                                        </div>
                                                    </div>
                                                    {/* Buttons */}
                                                    <div className="panel-buttons">
                                                        <button className="panel-cancel">Cancel</button>
                                                        <button className="panel-apply">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Panel Dropdown / End */}
                                            {/* Panel Dropdown */}
                                            <div className="panel-dropdown">
                                                <a href="#">Distance Radius</a>
                                                <div className="panel-dropdown-content">
                                                    <input className="distance-radius" type="range" min={1} max={100} step={1} defaultValue={50} data-title="Radius around selected destination" />
                                                    <div className="panel-buttons">
                                                        <button className="panel-cancel">Disable</button>
                                                        <button className="panel-apply">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Panel Dropdown / End */}
                                        </div>
                                        {/* Filters / End */}
                                    </div>
                                    {/* Row With Forms / End */}
                                </div>
                            </div>
                        </section>
                        {/* Search / End */}
                        <section className="listings-container margin-top-30">
                            {/* Sorting / Layout Switcher */}
                            <div className="row fs-switcher">
                                <div className="col-md-6">
                                    {/* Showing Results */}
                                    <p className="showing-results">14 Results Found </p>
                                </div>
                            </div>
                            {/* Listings */}
                            <div className="row fs-listings">
                                {/* Listing Item */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="listing-item-container list-layout" data-marker-id={1}>
                                        <NavLink to="/roomdetail/1" className="listing-item">
                                            {/* Image */}
                                            <div className="listing-item-image">
                                                <img src="./images/listing-item-01.jpg"  />
                                                <span className="tag">Eat &amp; Drink</span>
                                            </div>
                                            {/* Content */}
                                            <div className="listing-item-content">
                                                <div className="listing-badge now-open">Now Open</div>
                                                <div className="listing-item-inner">
                                                    <h3>Tom's Restaurant <i className="verified-icon" /></h3>
                                                    <span>964 School Street, New York</span>
                                                    <div className="star-rating" data-rating="3.5">
                                                        <div className="rating-counter">(12 reviews)</div>
                                                    </div>
                                                </div>
                                                <span className="like-icon" />
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                {/* Listing Item / End */}
                                {/* Listing Item */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="listing-item-container list-layout" data-marker-id={2}>
                                        <a href="listings-single-page.html" className="listing-item">
                                            {/* Image */}
                                            <div className="listing-item-image">
                                                <img src="images/listing-item-02.jpg"  />
                                                <span className="tag">Events</span>
                                            </div>
                                            {/* Content */}
                                            <div className="listing-item-content">
                                                <div className="listing-item-inner">
                                                    <h3>Sticky Band</h3>
                                                    <span>Bishop Avenue, New York</span>
                                                    <div className="star-rating" data-rating={5.0}>
                                                        <div className="rating-counter">(23 reviews)</div>
                                                    </div>
                                                </div>
                                                <span className="like-icon" />
                                                <div className="listing-item-details">Friday, August 10</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Listing Item / End */}
                                {/* Listing Item */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="listing-item-container list-layout" data-marker-id={3}>
                                        <a href="listings-single-page.html" className="listing-item">
                                            {/* Image */}
                                            <div className="listing-item-image">
                                                <img src="images/listing-item-03.jpg"  />
                                                <span className="tag">Hotels</span>
                                            </div>
                                            {/* Content */}
                                            <div className="listing-item-content">
                                                <div className="listing-item-inner">
                                                    <h3>Hotel Govendor</h3>
                                                    <span>778 Country Street, New York</span>
                                                    <div className="star-rating" data-rating={2.0}>
                                                        <div className="rating-counter">(17 reviews)</div>
                                                    </div>
                                                </div>
                                                <span className="like-icon" />
                                                <div className="listing-item-details">Starting from $59 per night</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Listing Item / End */}
                                {/* Listing Item */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="listing-item-container list-layout" data-marker-id={4}>
                                        <a href="listings-single-page.html" className="listing-item">
                                            {/* Image */}
                                            <div className="listing-item-image">
                                                <img src="images/listing-item-04.jpg"  />
                                                <span className="tag">Eat &amp; Drink</span>
                                            </div>
                                            {/* Content */}
                                            <div className="listing-item-content">
                                                <div className="listing-badge now-open">Now Open</div>
                                                <div className="listing-item-inner">
                                                    <h3>Burger House <i className="verified-icon" /></h3>
                                                    <span>2726 Shinn Street, New York</span>
                                                    <div className="star-rating" data-rating={5.0}>
                                                        <div className="rating-counter">(31 reviews)</div>
                                                    </div>
                                                </div>
                                                <span className="like-icon" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Listing Item / End */}
                                {/* Listing Item */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="listing-item-container list-layout" data-marker-id={5}>
                                        <a href="listings-single-page.html" className="listing-item">
                                            {/* Image */}
                                            <div className="listing-item-image">
                                                <img src="images/listing-item-05.jpg"  />
                                                <span className="tag">Other</span>
                                            </div>
                                            {/* Content */}
                                            <div className="listing-item-content">
                                                <div className="listing-item-inner">
                                                    <h3>Airport</h3>
                                                    <span>1512 Duncan Avenue, New York</span>
                                                    <div className="star-rating" data-rating="3.5">
                                                        <div className="rating-counter">(46 reviews)</div>
                                                    </div>
                                                </div>
                                                <span className="like-icon" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Listing Item / End */}
                                {/* Listing Item */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="listing-item-container list-layout" data-marker-id={6}>
                                        <a href="listings-single-page.html" className="listing-item">
                                            {/* Image */}
                                            <div className="listing-item-image">
                                                <img src="images/listing-item-06.jpg"  />
                                                <span className="tag">Eat &amp; Drink</span>
                                            </div>
                                            {/* Content */}
                                            <div className="listing-item-content">
                                                <div className="listing-badge now-closed">Now Closed</div>
                                                <div className="listing-item-inner">
                                                    <h3>Think Coffee</h3>
                                                    <span>215 Terry Lane, New York</span>
                                                    <div className="star-rating" data-rating={5.0}>
                                                        <div className="rating-counter">(31 reviews)</div>
                                                    </div>
                                                </div>
                                                <span className="like-icon" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Listing Item / End */}
                            </div>
                            {/* Listings Container / End */}
                            {/* Pagination Container */}
                            <div className="row fs-listings">
                                <div className="col-md-12">
                                    {/* Pagination */}
                                    <div className="clearfix" />
                                    <div className="row">
                                        <div className="col-md-12">
                                            {/* Pagination */}
                                            <div className="pagination-container margin-top-15 margin-bottom-40">
                                                <nav className="pagination">
                                                    <ul>
                                                        <li><a href="#" className="current-page">1</a></li>
                                                        <li><a href="#">2</a></li>
                                                        <li><a href="#">3</a></li>
                                                        <li><a href="#"><i className="sl sl-icon-arrow-right" /></a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                    {/* Pagination / End */}
                                    {/* Copyrights */}
                                    <div className="copyrights margin-top-0">© 2021 Listeo. All Rights Reserved.</div>
                                </div>
                            </div>
                            {/* Pagination Container / End */}
                        </section>
                    </div>
                </div>
                <div className="fs-inner-container map-fixed">
                    {/* Map */}
                    <div id="map-container">
                        <div id="map" data-map-scroll="true">
                            {/* map goes here */}
                        </div>
                    </div>
                </div>
            </div>

            </div>

    )
}
