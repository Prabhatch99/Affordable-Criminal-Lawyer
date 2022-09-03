import React from 'react'
import { Link } from 'react-router-dom'
import flogo from '../assets/images/footer-logo.png'

function Footer() {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer id="footer" className="site-footer" >

                {/* <!-- Bootstrap --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">

                            {/* <!-- Widget --> */}
                            <div className="widget">

                                {/* <!-- Logo --> */}
                                <div className="site-logo mb-4 pb-2">
                                    <Link to="/"><img src={flogo} alt="Logo" style={{ width: "100px" }} /></Link>
                                </div>
                                {/* <!-- End logo --> */}

                                {/* <!-- Clearfix --> */}
                                <div className="clearfix"></div>

                                {/* <!-- Paragraph --> */}
                                <p>We approach each problem with three essential elements: strategic thinking, creative solutions, proven results. Our process is designed to get you the best outcome for your case.</p>


                            </div>
                            {/* <!-- End widget --> */}

                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">

                            {/* <!-- Widget --> */}
                            <div className="widget">

                                {/* <!-- H3 heading --> */}
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link className='a' to="/">Home</Link></li>
                                    <li><Link className='a' to="/about">About us</Link></li>
                                    <li><Link className='a' to="/services">Services</Link></li>
                                    <li><Link className='a' to="/whycontact">Why Choose us?</Link></li>
                                    <li><Link className='a' to="/contactus">Contact Us</Link></li>
                                </ul>

                            </div>
                            {/* <!-- End widget --> */}

                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3" style={{ display: "none" }}>

                            {/* <!-- Widget --> */}
                            <div className="widget">
                            </div>
                            {/* <!-- End widget --> */}

                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6">
                            {/* <!-- H3 heading --> */}
                            <h3>Location</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.282419555543!2d-79.73020698450193!3d43.66309587912105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3fcfe9d23ab5%3A0x2ee272239a2d9b02!2sChristien%20Levien%20J.D.%2C%20Lawyer!5e0!3m2!1sen!2sin!4v1597667260509!5m2!1sen!2sin" title='iframe' height="300" frameborder="0" style={{ border: "0", width: "100%" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className='my-2 text-center text-capitalize'  >bail hearing lawyers | theft under 5000 second offense | theft over 5000 first offence | Theft & Shoplifting Lawyer | Sexual assault charge | ontario criminal lawyers | criminal lawyers | fraud under 5000 first offence | criminal law firms near me | criminal defence lawyer | assault lawyer | best fraud lawyer | drug trafficking lawyers</p>
                        </div>
                    </div>
                </div>

                <div className="clearfix"></div>
                <div className="col-xs-12">
                    <hr />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">

                            {/* <!-- Copyright --> */}
                            <div className="site-copyright text-center">
                                Copyright ©  Axis Law Group. All Rights Reserved.
                            </div>

                        </div>

                    </div>
                </div>
            </footer>
            {/* <!-- End Footer --> */}
        </>
    )
}

export default Footer