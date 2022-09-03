import React from 'react'
import { Link } from 'react-router-dom'
import Testimonial from './Testimonial'


function Whycontact() {
    return (
        <>

            <div className="site-statistic site-dark-section " id="whychooseus">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Why Choose Us? </h2>

                            {/* <!-- inner box --> */}
                            <div className="site-section-box">

                                <div className="row">
                                    {/* <!-- Number --> */}
                                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <Link to="/contactus" style={{display: "block"}}>
                                            <div className="site-number dark-bg" style={{background:"#fff", color:"#000"}}>
                                                {/* <!-- Inline wrapper --> */}
                                                <div className="site-number-inline">
                                                    <p><i className="fa fa-globe" aria-hidden="true" style={{color: "#801617"}}></i></p>
                                                    <h4>Multilingual Services</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <Link to="/contactus" style={{display: "block"}}>
                                            <div className="site-number color-bg" style={{background:"#fff", color:"#000"}}>
                                                {/* <!-- Inline wrapper --> */}
                                                <div className="site-number-inline">
                                                    <p><i className="fa fa-gavel" aria-hidden="true" style={{color: "#801617"}}></i></p>
                                                    <h4>Expert in Criminal law</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <Link to="/contactus" style={{display: "block"}}>
                                            <div className="site-number dark-bg" style={{background:"#fff", color:"#000"}}>
                                                {/* <!-- Inline wrapper --> */}
                                                <div className="site-number-inline">
                                                    <p><i className="fa fa-money" aria-hidden="true" style={{color: "#801617"}}></i></p>
                                                    <h4>Convenient Payment Options</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                            {/* <!-- inner box --> */}
                            <div className="site-section-box pt-0">

                                <div className="row">
                                    {/* <!-- Number --> */}
                                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <Link to="/contactus" style={{display: "block"}}>
                                            <div className="site-number dark-bg" style={{background:"#fff", color:"#000"}}>
                                                {/* <!-- Inline wrapper --> */}
                                                <div className="site-number-inline">
                                                    <p><i className="fa fa-user" aria-hidden="true" style={{color: "#801617"}}></i></p>
                                                    <h4>Lawyers / Former Prosecutor</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <Link to="/contactus" style={{display: "block"}}>
                                            <div className="site-number color-bg" style={{background:"#fff", color:"#000"}}>
                                                {/* <!-- Inline wrapper --> */}
                                                <div className="site-number-inline">
                                                    <p><i className="fa fa-clock-o" aria-hidden="true" style={{color: "#801617"}}></i></p>
                                                    <h4> 24 / 7 Working Hours</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <Link to="/contactus" style={{display: "block"}}>
                                            <div className="site-number dark-bg" style={{background:"#fff", color:"#000"}}>
                                                {/* <!-- Inline wrapper --> */}
                                                <div className="site-number-inline">
                                                    <p><i className="fa fa fa-users" aria-hidden="true" style={{color: "#801617"}}></i></p>
                                                    <h4>Free Consultation</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Call to action --> */}
                            <div className="cta">
                                <p> Call us for FREE Consultation : <a href="tel:(800) 808-8119" style={{color:"#FFEB3B"}}><i className="fa fa-phone blink_me"></i> (800) 808-8119 </a></p>
                            </div>

                            <Link to="/contactus" className="theme-btn px-4"> Request Free Legal Advice 24/7 </Link>

                        </div>
                    </div>
                </div>
            </div>
            <Testimonial/>
        </>
    )
}

export default Whycontact