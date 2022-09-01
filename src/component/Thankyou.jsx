import React from 'react'
import { Link } from 'react-router-dom'

function Thankyou() {
    return (
        <>
            {/* <div className='container'>
                <div className='row main-content'>
                    <i className="fa-5x fa-solid fa-circle-check" id="checkmark"></i>
                    <h1>Thankyou!</h1>
                    <h3>Your Submisssion is recived and we will contact you soon</h3>
                </div>
            </div> */}

            <div className="site-call-to-action" id="call-to-action" >
                <div className="container">
                    <div className="row">
                        <div className="col-12 main-content">
                            <div className="site-box customclsa">
                            <i className="fa-5x fa-solid fa-circle-check" id="checkmark"></i>
                                <h1>Thank You</h1>
                                <p>Thank you for contacting us. One of our representatives will be in contact with you  shortly regarding <br /> your inquiry. If you ever have any questions that require immediate assistance, please call us at</p>
                                <div className="call-info">
                                    <ul>
                                        <li><a href="tel:(800) 808-8119" style={{color:"#ffffff"}}>  <i className="fa fa-phone"></i> (800) 808-8119</a> </li>
                                        <li><a href="mailto:contact@levienlaw.com" style={{color:"#ffffff"}}>  <i className="fa fa-envelope"></i>  contact@levienlaw.com</a> </li>
                                    </ul>
                                </div>
                                <div className="btn">
                                    <Link className="theme-btn" to="/"> Back To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Thankyou