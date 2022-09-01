import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import pic from '../assets/images/contact.jpg'
import Contactusbottom from './Contactusbottom'

function Contactus() {
    var [user, setuser] = useState({
        name: "",
        email: "",
        phone: "",
        message:""
      })
      console.log(user.name)
    
      function getData(e) {
        var name = e.target.name
        var value = e.target.value
    
        setuser(oldData => {
          return {
            ...oldData,
            [name]: value,
          }
        })
      }
    
      const navigate = useNavigate();
    
      const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_eaypce8', 'template_g236pj7', form.current, 'pSiVov6AlIOyLXF1g')
          .then((result) => {
            console.log(result.text);
            navigate("/Thankyou")
          }, (error) => {
            console.log(error.text);
          });
      };
    return (
        <>
            <div className="site-quick-support pb-5" >
                <div className="container-fluid" style={{background:"#801617"}}>
                    <div className='row'>
                        <div className='col-md-6 col-12 p-0'>
                            <div className="left-colom p-0">
                                <figure> <img src={pic} alt="pls fill contact form" /> </figure>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 mt-5 p-4'>
                            <div className="form-container right">
                                <h2 className="testawm">Request Free Legal
                                    Advice 24/7 </h2>
                                {/* <!-- Contact form --> */}
                                <form ref={form} onSubmit={sendEmail} className="site-contact-form" style={{width:"100%", height:"100%"}}>
                                    <div className="mb-2">
                                        <input type="text" name='name' className="form-control" placeholder='Name' onChange={getData} required />
                                    </div>
                                    <div className="mb-2">
                                        <input type="email" name='email' className="form-control" placeholder='Email address' onChange={getData} required />
                                    </div>
                                    <div className="mb-2">
                                        <input type="number" name='phone' className="form-control" placeholder='Phone' onChange={getData} required />
                                    </div>
                                    <div className="mb-2">
                                        <textarea className='w-100 pt-2' name="message" placeholder="Message" onChange={getData} required style={{ height: "150px" }}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-lg  btn-customs" >Request a free Consultation <i className="fa fa-spin fa-spinner"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- End quick support --> */}
            <Contactusbottom/>
        </>
    )
}

export default Contactus