import React from 'react'
import { Link } from "react-router-dom";

function Nave() {
    // toggle nav height 
    window.addEventListener('scroll', () => {
        let navContainer = document.querySelector(".nav-container");
        let windowPosition = window.scrollY > 0;
        navContainer.classList.toggle('scroll-active', windowPosition)
    })

    return (
        <div className="nav-container fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">
                        <img src="img/logo.png" className="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span />
                        <span />
                        <span />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={`nav-item br ${window.location.pathname === "/" && 'active'}`}>
                                <Link to={"/"} className="nav-link">About Us</Link>
                                {/* <a className="nav-link" href="#"></a> */}
                            </li>
                            <li className={`nav-item br ${window.location.pathname === "/services" && 'active'}`}>
                                <Link to={"/services"} className="nav-link">Services</Link>
                                {/* <a className="nav-link" href="#">Services</a> */}
                            </li>
                            <li className={`nav-item br ${window.location.pathname === "/enquiry" && 'active'}`}>
                                <Link to={"/enquiry"} className="nav-link">Make Enquiry</Link>
                                {/* <a className="nav-link" href="#"></a> */}
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to={"/enquiry"}>
                                    <button id="contact-us">CONTACT US</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nave