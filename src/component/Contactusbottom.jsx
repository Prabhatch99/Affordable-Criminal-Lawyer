import React from 'react'
import { Link } from 'react-router-dom'

function Contactusbottom() {
    
  return (
    <>
        {/* <!-- Call to action --> */}
    <div className="site-call-to-action" id="call-to-action" style={{background: "#efefed"}}>

        {/* <!-- Bootstrap --> */}
        <div className="container">
            <div className="row">
                <div className="col-12">

                    {/* <!-- Box --> */}
                    <div className="site-box">
                        <h1 style={{color: "#000000"}}>Are You Looking For Someone To Help?<br/>
                            Contact Us Today.</h1>
                        <div className="row">
                            {/* <!-- call-info --> */}
                            <div className="call-info">
                                <ul>
                                    <li ><a href="tel:(800) 808-8119" style={{color: "#801617"}}> <i className="fa fa-phone"></i> (800) 808-8119 </a> </li>
                                    <li ><a href="mailto:contact@levienlaw.com" style={{color: "#801617"}}> <i className="fa fa-envelope"></i> contact@levienlaw.com </a> </li>
                                    <li style={{color: "#333"}}> <i className="fa fa-clock-o"></i> 24 Hours / 7 Days A Week Including All Holidays </li>
                                </ul>
                            </div>
                            <div className="col-12">
                                <Link to="/contactus" className="theme-btn mt-5" style={{background: "#801617",color: "#fff"}}>  Request Free Legal Advice 24/7  </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End box --> */}

                </div>
            </div>
        </div>
      

    </div>
    {/* <!-- End call to action --> */}
    </>
  )
}

export default Contactusbottom