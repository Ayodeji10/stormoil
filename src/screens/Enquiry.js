import React, { useState } from 'react'
import Footer from '../components/footer'
import Nav from '../components/nav'
import SocialMedia from '../components/socialMedia'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from "axios";
// import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ClipLoader";
import Modal from 'react-modal'
Modal.setAppElement('#root')

function Enquiry() {
    // modal 
    const [successModal, setSuccessModal] = useState(false)

    // inputs 
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState('')
    const [number, setNumebr] = useState()
    const [message, setMessage] = useState("")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const sendMail = () => {
        setError(null)
        setLoading(true)
        if (name === "" || email === "" || subject === "" || number === "" || message === "") {
            setError("Please fill all inut spaces")
            setLoading(false)
        } else {
            axios.post("https://olf.online/storm/api/contact", { name, email, phonenumber: number, subject, message })
                .then(response => {
                    console.log(response)
                    setLoading(false)
                    setSuccessModal(true)
                }).catch(error => {
                    console.log(error.response.status)
                    setLoading(false)
                })
        }
    }

    return (
        <div className="container-fluid" id="enquiry">
            <header>
                {/* navigation */}
                <Nav />
                {/* social media  */}
                <SocialMedia />
            </header>
            <div className="enquiry">
                <div className="form">
                    <div className="d-flex align-items-center justify-content-center mb-md-3">
                        <span />
                        <h3 className="mb-0">DO YOU HAVE ANY QUESTION?</h3>
                    </div>
                    <h1>Make an Enquiry</h1>
                    <div className="d-lg-flex justify-content-lg-between d-md-flex justify-content-md-between d-sm-flex justify-content-sm-between">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="First and Last Name Here" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="text" placeholder="example@xyz.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="d-lg-flex justify-content-lg-between d-md-flex justify-content-md-between d-sm-flex justify-content-sm-between">
                        <div>
                            <label htmlFor="Subject">Subject</label>
                            <input id="Subject" type="text" placeholder="Your Enquiry in a sentence" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="number">Phone Number</label>
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={number}
                                onChange={setNumebr} />
                        </div>
                    </div>
                    <label htmlFor="text">How can we help you?</label>
                    <textarea name="text" id="text" cols={30} rows={10} placeholder="Type Here" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <p id='error'>{error}</p>
                    {!loading ?
                        <button onClick={sendMail}><img src="img/send.png" alt="" /></button>
                        :
                        <button>
                            <ScaleLoader
                                color="red"
                                loading={loading}
                                size={40} />
                        </button>
                    }

                    {/* success modal  */}
                    <Modal isOpen={successModal} onRequestClose={() => setSuccessModal(false)} id="successMOdal">
                        <i className="far fa-times-circle" onClick={() => setSuccessModal(false)} />
                        <img src="img/tick (2) 1.png" alt="" />
                        <h2>Message Sent!</h2>
                        <p>Your message has been sent succesfully. We’ll be in touch with you shortly via email.</p>
                    </Modal>
                </div>
            </div>
            {/* footer  */}
            <Footer />
        </div>
    )
}

export default Enquiry