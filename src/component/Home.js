import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import About from './About';
import Services from './Services';
import Whycontact from './Whycontact';
import Contactus from './Contactus';

function Home() {
  var [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
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
      {/* <!-- Bootstrap --> */}
      <div className='background-image'>
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-12 p-3">
              <div className="row">
                <div className=" col-md-8 col-12">
                  {/* <!-- Box --> */}
                  <div className="site-box customclsa">
                    {/* <!-- H1 heading --> */}
                    <h1 className="blink_me" >Free consultation - call to assess your case</h1>
                    <h1 className=' my-4 sh1'>Charged With A Criminal Offence?</h1>
                    <h2>Our criminal defence lawyers will fight for your rights, your freedom and your future</h2>
                    <ul id="liststyle">
                      <li>We offer free initial consultations</li>
                      <li>Very reasonable rates</li>
                      <li>We provide an accurate fee quote upfront and provide it in writing without any chance of any hidden costs</li>
                      <li>We also offer flexible interest-free payment plans.</li>
                    </ul>
                  </div>
                </div>
                  {/* <!-- End box --> */}

                <div className="col-md-4 col-12   site-quick-support bg-light" >
                  <div className="form-container  style">
                    <h3>Request Free Legal Advice 24/7</h3>

                    <form ref={form} onSubmit={sendEmail} className="site-contact-form">
                      <div className="mb-2"><input type="text" className="form-control" name='name' onChange={getData} placeholder='Name' required /></div>
                      <div className="mb-2"><input type="email" className="form-control" name='email' onChange={getData} placeholder='Email address' required /></div>
                      <div className="mb-2"><input type="number" className="form-control" name='phone' onChange={getData} placeholder='Phone' required /></div>
                      <div className="mb-2"><textarea className='w-100' name="message" placeholder="Message" onChange={getData} required style={{ height: "90px" }}></textarea></div>
                      <button type="submit" className="btn btn-lg  mx-5 hbutton">Request free Consultation</button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Bootstrap --> */}
      <About />
      <Services />
      <Whycontact />
      <Contactus />
    </>
  )
}

export default Home