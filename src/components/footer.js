import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-3">
                    <img src="img/logo.png" className="mb-2 logo" alt="" />
                    <h5 className="mb-0">Oil and Gas, Maritime and Equipment Leasing, Rental &amp; Leasing services</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-3">
                    <h3>Quick Link</h3>
                    <Link to={"/services"}>Our Services</Link>
                    <Link to={"/"}>About Us</Link>
                    <Link to={"/enquiry"}>Make an Equiry</Link>
                    {/* <a href>Contact Us</a> */}
                    {/* <a href>Terms and Condition</a> */}
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h3><span><img src="img/contact.png" alt="" /></span>Phone</h3>
                    <h6>Mon - Fri: 8am -5pm</h6>
                    <a href="tel:+2348038650055">+234 803-865-0055</a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h3><span><img src="img/location.png" alt="" /></span>Office</h3>
                    <h6>22 Orelope Str, Egbeda, Lagos State, Nigeria.</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer