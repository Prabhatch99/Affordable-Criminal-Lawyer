import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../assets/images/logo-icon.png'

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand px-5" to='/'><img src={logo} alt="" width="250" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 ">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/about">ABOUT US</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/services">SERVICES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/whycontact">WHY CHOOSE US?</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/contactus">CONTACT US</NavLink>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href='tel:(800) 808-8119'>(800) 808-8119</a>
                            </li>  
                        </ul>    
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav