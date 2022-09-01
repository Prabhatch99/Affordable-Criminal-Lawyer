import React from 'react'
import { Link } from 'react-router-dom'
import rimg from '../assets/images/about-us-bg.png'

function About() {
    return (
        <>
            <div class="site-about site-grey-section">
                <div class="container p-0">
                    <div class="row">

                        {/* <!-- Left colom --> */}
                        <div class=" col-md-5 col-12 px-3">
                            <div class="right-colom background-imageabout">
                                <h2>We will fight for you</h2>
                                <h3>Criminal Defence Lawyers</h3>
                                <p>We provide clients with dedicated support over the duration of their case. Whether there is a need to resolve or litigate your matter, our focus is on ensuring that your expecations are met.</p>
                                <div class="btn"><Link class="theme-btn btn" to=''> Request Free Legal Advice 24/7 </Link> </div>
                                {/* <!-- Call --> */}
                                <div class="call"><a href="tel:(800) 808-8119"><i class="fa fa-phone"></i><span> (800) 808-8119</span></a></div>
                            </div>
                        </div>
                        {/* <!-- Right colom --> */}
                        <div class=" col-md-7 col-12 ">
                            <div class="left-colom px-5">
                                <figure>
                                    <img src={rimg} alt='...' />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About