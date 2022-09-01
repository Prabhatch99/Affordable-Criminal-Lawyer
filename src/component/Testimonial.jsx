import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../assets/css/styles.css";
import rating from '../assets/images/5-star-rating.png'
// import required modules
import { Autoplay, Pagination } from "swiper";

function Testimonial() {
    return (
        <>
            <div id="testimonial" className=" site-white-section " style={{ background: "#ffffff" }}>
                <div className="container-fluid wide">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>Client testimonials</h1>
                            <h2>What Our Clients Saying?</h2>
                        </div>
                    </div>
                </div>
                <Swiper
                    autoplay={{ delay: 4000, loop: true }}
                    pagination={{ clickable: true, }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="container p-5">
                            <div className="row">
                                <div className="col-12 pb-2">
                                    <div className="swiper-slide text-center"><img src={rating} alt='...' /></div>
                                </div>
                                <div className="col-12 mb-5 site-testimonial">
                                    <p>"Christian was an exellent representative for my case..  he was able to negotiate with the crown a much better out come from my suspended driving charge.. I received no jail time even thought they were after 90 days..  thanks so much Christian!!" </p>
                                    <h5> Byron Williams </h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="container p-5">
                        <div className="row">
                            <div className="col-12 pb-2">
                                <div className="swiper-slide text-center"><img src={rating} alt='...' /></div>
                            </div>
                            <div className="col-12 mb-5 site-testimonial">
                                <p>"My family member was facing a serious charge that would have resulted in him spending several years in jail. Christien took it to trial and the charges were dismissed. He was kind and professional - I wholeheartedly recommend him." </p>
                                <h5> Jameel David </h5>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="container p-5">
                        <div className="row">
                            <div className="col-12 pb-2">
                                <div className="swiper-slide text-center"><img src={rating} alt='...' /></div>
                            </div>
                            <div className="col-12 mb-5 site-testimonial">
                                <p>"Christien is very passionate and punctual gentleman. Direct and to the point. No bs kind of guy that excells in his trade.  Good verbal skills and a good communicator. Don't be fooled, don't piss him off.!!!Thanks Jordan." </p>
                                <h5> Jordan Guthrie </h5>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}
export default Testimonial