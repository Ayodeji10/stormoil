import React from 'react'
import Nav from '../components/nav'
import Carousel from '../components/carousel'
import Footer from '../components/footer'
import SocialMedia from '../components/socialMedia'

function Services() {
    return (
        <div className="container-fluid" id="services">
            <header>
                {/* navigation */}
                <Nav />
                {/* social media  */}
                <SocialMedia />
            </header>
            <div className="services">
                <h1>Our Services</h1>
                <div className="oil" id="oil">
                    <div className="d-flex align-items-center head">
                        <span />
                        <h3 className="mb-0">oil and Gas</h3>
                    </div>
                    <div className="d-flex align-items-center sub">
                        <span />
                        <a href="#meritime">
                            <h3 className="mb-0">MARITIME</h3>
                        </a>
                    </div>
                    <div className="row justify-content-lg-between align-items-lg-center">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <ul>
                                <li>Engineering, Procurement &amp; Construction</li>
                                <li>Fabrication of Pressure Vessels, Storage Tanks, Process Piping &amp; Subsea Structural in
                                    accordance with the code of
                                    Construction, Client Specifications &amp; Engineering Best Practices</li>
                                <li>Design and fabrication of Vessels (Carbon &amp; Stainless Steel) Ranging from U &amp; U2. Three
                                    Phase Test Separator, Flare
                                    Knock - Drum, Gas Scrubber &amp; Slug Catcher</li>
                                <li>Piping ( Carbon, Stainless &amp; Duplex Steel) Pig Launcher/Receiver &amp; Process Piping.</li>
                                <li>Design and fabrication of Subsea Structural : Xmas Tree Parts, Mudmat &amp; Mooring Piles
                                </li>
                                <li>Asset Integrity Testing for plant.</li>
                                <li>Well testing and recertification</li>
                                <li>Commission based sourcing of petroleum products</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src="img/Piping 1.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="maritime" id="meritime">
                    <div className="d-flex align-items-center sub">
                        <span />
                        <a href="#oil">
                            <h3 className="mb-0">oil and Gas</h3>
                        </a>
                    </div>
                    <div className="d-flex align-items-center head">
                        <span />
                        <h3 className="mb-0">MARITIME</h3>
                    </div>
                    <div className="row justify-content-lg-between align-items-lg-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <ul>
                                <li>Fleet management</li>
                                <li>Long and short-term lease of:
                                    <ol>
                                        <li>Tugboats: 35/40ton bollard pool (bp) seagoing tugboat</li>
                                        <li>Jack-up barge: class 205/150 jack-up barges</li>
                                        <li>Tanker vessels: 3000MT vessels for transportation of liquefied products</li>
                                        <li>Ballistic gunboat: security and surveillance boats</li>
                                        <li>Fuel barge: 10,000-ton double Hull fuel barge</li>
                                        <li>Ram barge: 1000/2000/3000 ton</li>
                                    </ol>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src="img/Pressure vessels 1 2.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="machines">
                <div className="container">
                    <h1>Our Machineries</h1>
                    <Carousel />
                </div>
            </div>
            {/* footer  */}
            <Footer />
        </div>
    )
}

export default Services