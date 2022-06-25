import React from 'react'
import Footer from '../components/footer'
import Nav from '../components/nav'
import SocialMedia from '../components/socialMedia'

function Home() {
    return (
        <div className="container-fluid">
            <header>
                {/* navigation */}
                <Nav />
                {/* social media  */}
                <SocialMedia />
                {/* header text  */}
                <div className="header-text">
                    <div className="d-flex justify-content-end align-items-center">
                        <span />
                        <h4 className="mb-0">THE BRIDGE FOR MARITIME OIL &amp; GAS</h4>
                    </div>
                    <h1>Synergizing Maritime and Oil &amp; Gas</h1>
                </div>
                {/* about us  */}
                <div className="button-overlay">
                    <div className="about-us">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6 col-sm-6">
                                <div className="d-flex align-items-center">
                                    <span />
                                    <h4 className="mb-0">About us</h4>
                                </div>
                                <h1>Our passion drives our solution</h1>
                                <p className="mb-0">Exclusive Storm Oil &amp; Gas was born out of passionate desire to bridge the
                                    inconspicuous gap
                                    between the Oil &amp; Gas and
                                    Maritime sectors. These gaps very often amount to huge loss of revenue resulting from
                                    prolonged and extended project
                                    duration, inefficient supply chain management &amp; logistics and equipment sourcing. At
                                    Storm
                                    Oil, we leverage on our broad
                                    client management experience, skilled workforce and industry expertise to deliver safe,
                                    quality and cost-efficient
                                    services that consistently exceed customer’s expectations.</p>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-6">
                                <img src="img/IMG-20211213-WA0001 1.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* statement  */}
            <div className="statement">
                <div className="container mb-2">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                            <div className="section">
                                <h1>Vision</h1>
                                <img src="img/Group 47.png" alt="" />
                                <h3>our vision</h3>
                                <p className="mb-0">We are committed to being the preferred service provider and trusted
                                    partner/advisor in
                                    the Maritime and Oil &amp; Gas
                                    sectors by supporting our numerous customers from the project conceptualization phase to
                                    successful implementation via
                                    constant collaboration to deliver on set goals within approved budget provisions.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                            <div className="section">
                                <h1>Mission</h1>
                                <img src="img/Group 49.png" alt="" />
                                <h3>mission statement</h3>
                                <img src="img/quote.png" alt="" />
                                <p className="mb-0">Our mission is to deliver safe and high-quality services in a cost-efficient
                                    manner that bring value to our esteemed
                                    customers.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="section">
                                <h1>Values</h1>
                                <img src="img/Group 51.png" alt="" />
                                <h3>core values</h3>
                                <ul>
                                    <li>People- the society and workforce</li>
                                    <li>Excellent customer experience</li>
                                    <li>Exceptional Service delivery</li>
                                    <li>Safety and Quality</li>
                                    <li>Professionalism and Compliance with industry best practices</li>
                                    <li>Diversity, Equality and inclusiveness</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer  */}
            <Footer />
        </div>
    )
}

export default Home