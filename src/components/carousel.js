import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Carousel extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            900: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            1100: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1300: {
                items: 2,
            },
            1400: {
                items: 3,
            },
        },
    }
    render() {
        return (
            <div className="container">
                <OwlCarousel
                    className='owl-theme'
                    loop margin={10}
                    nav
                    mouseDrag
                    touchDrag
                    pullDrag
                    freeDrag
                    dots={true}
                    autoplay
                    autoplayTimeout="3000"
                    responsive={this.state.responsive} >
                    <div class='item'>
                        <img src="/img/Rectangle 18.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Pipeline Fabrication</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 19.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Subsea Structure MOREN Pile</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 20.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Storage Tank</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 21.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Piping with Monitoring Control</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 22.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Pig Launcher and Pig Receiver</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 23.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Scrubber</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 24.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Piping</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 25.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Pipes</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 26.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Pressure Vessels</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 27.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>10,000/30,000 Ton Tanker Vessel</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 28.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>1000 Ton Ramp Barge</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 29.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Crew/Patrol Boat, 18bed/2 Cubicle</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 30.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Pressure Vessel Tank Under Construction</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 31.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Tank Separator</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 32.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>1000 Ton Ramp Barge</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 33.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>Class 205/150 Jackup Barge</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 34.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>45 Ton Barge</p>
                        </div>
                    </div>
                    <div class='item'>
                        <img src="/img/Rectangle 35.png" className="img-fluid" alt="" />
                        <div className="img-overlay">
                            <p>34/45 Ton Bollard Pool (BP) Seagoing Tug Boat</p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        )
    }
}

export default Carousel