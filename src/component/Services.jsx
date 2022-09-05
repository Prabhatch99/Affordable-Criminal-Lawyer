import React from 'react'
import { Link } from 'react-router-dom'
import card1 from '../assets/images/drunk-driving-icon.png'
import card2 from '../assets/images/drug-offence-icon.png'
import card3 from '../assets/images/assault-charges-icon.png'
import card4 from '../assets/images/murder-icon.png'
import card5 from '../assets/images/fraud-charges-icon.png'

function Services() {
    return (
        <>

            {/* <!-- Services --> */}
            <div id="services" className="site-services site-dark-section">
                <div className="container">
                    <div className="row ">
                        <div className="col-12">
                            <h1>Our Services</h1>
                            <h2 >Explore Our Wide Range<br />Practice Areas </h2>
                            <p >We offer a variety of areas of practice. If you are not sure, contact us to book a consultation.</p>

                            {/* <!-- Bootstrap inner columns --> */}

                            <div className="row">
                                <div className=" col-md-4 col-sm-6 col-12 mt-4">
                                    <div className="card" style={{ width: "100%" }}>
                                        <center> <img src={card1} className="card-img-top pt-3" alt="icon" style={{ width: "35%", height: "100%" }} /></center>
                                        <div className="card-body">
                                            <h3 className='card-title'>DUI & Impaired Driving</h3>
                                            <ul className='card-text'>
                                                <li>Impaired Driving & Over 80</li>
                                                <li>Dangerous Driving</li>
                                                <li>Careless Driving</li>
                                                <li>Speeding Tickets</li>
                                            </ul>
                                            <a href="tel:(800) 808-8119" className="marginsedc"> <i className="fa fa-phone"></i> (800) 808-8119</a>
                                            <Link to="/contactus" className=" btn theme-btn mb-4">Request Free Legal Advice 24/7 </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-4 col-sm-6 col-12 mt-4">
                                    <div className="card" style={{ width: "100%",height:"100%" }}>
                                        <center> <img src={card2} className="card-img-top pt-3" alt="icon" style={{ width: "35%", height: "100%" }} /></center>
                                        <div className="card-body">
                                            <h3 className='card-title'>Drug Offence</h3>
                                            <ul className='card-text'>
                                                <li>Possession</li>
                                                <li>Trafficking</li>
                                                <li>Importing</li>
                                                <li>Conspiracy</li>
                                            </ul>
                                            <a href="tel:(800) 808-8119" className="marginsedc"> <i className="fa fa-phone"></i> (800) 808-8119</a>
                                            <Link to="/contactus" className=" btn theme-btn mb-4">Request Free Legal Advice 24/7 </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-4 col-sm-6 col-12 mt-4">
                                    <div className="card" style={{ width: "100%",height:"100%"  }}>
                                        <center> <img src={card3} className="card-img-top pt-3" alt="icon" style={{ width: "35%", height: "100%" }} /></center>
                                        <div className="card-body">
                                            <h3 className='card-title'>Assault Charges</h3>
                                            <ul className='card-text'>
                                                <li>Domestic Assault</li>
                                                <li>Aggravated Assault</li>
                                                <li>Assault-Bodily Harm</li>
                                                <li>Assault with a Weapon</li>
                                            </ul>
                                            <a href="tel:(800) 808-8119" className="marginsedc"> <i className="fa fa-phone"></i> (800) 808-8119</a>
                                            <Link to="/contactus" className=" btn theme-btn mb-4">Request Free Legal Advice 24/7 </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-4 col-sm-6 col-12 mt-4">
                                    <div className="card" style={{ width: "100%",height:"100%"  }}>
                                        <center> <img src={card4} className="card-img-top pt-3" alt="icon" style={{ width: "35%", height: "100%" }} /></center>
                                        <div className="card-body">
                                            <h3 className='card-title'>Murder</h3>
                                            <ul className='card-text'>
                                                <li>First degree</li>
                                                <li>Second degree</li>
                                                <li>Manslaughter</li>
                                                <br></br>
                                            </ul>
                                            <a href="tel:(800) 808-8119" className="marginsedc"> <i className="fa fa-phone"></i> (800) 808-8119</a>
                                            <Link to="/contactus" className=" btn theme-btn mb-4">Request Free Legal Advice 24/7 </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-4 col-sm-6 col-12 mt-4">
                                    <div className="card" style={{ width: "100%" }}>
                                        <center> <img src={card5} className="card-img-top pt-3" alt="icon" style={{ width: "35%", height: "100%" }} /></center>
                                        <div className="card-body">
                                            <h3 className='card-title'>Fraud Charges</h3>
                                            <ul className='card-text'>
                                                <li>Fraud over $5,000</li>
                                                <li>Fraud under $5000</li>
                                                <li>Impersonation</li>
                                                <li>Cheque Fraud</li>
                                            </ul>
                                            <a href="tel:(800) 808-8119" className="marginsedc"> <i className="fa fa-phone"></i> (800) 808-8119</a>
                                            <Link to="/contactus" className=" btn theme-btn mb-4">Request Free Legal Advice 24/7 </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End inner columns --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Services --> */}
            <div className="section-space-banner " style={{padding: "50px 0px"}}>
            <div className="container my-4">                      
                <div className="banner-layout1"> 
                    <h1>CONTACT A CRIMINAL LAWYER TO HELP YOU TODAY </h1>
                    <h5>Don't delay - contact an experienced criminal defence lawyer with the experience to help you win your case.</h5>
                    <h4><a href="tel:(800) 808-8119" className="displblock"><span><i className="fa fa-phone "></i> (800) 808-8119</span></a></h4> 
                    <Link to="/contactus" className="theme-btn py-3">Request Free Legal Advice 24/7 </Link>              
                </div>
            </div>
        </div>
        </>
    )
}

export default Services