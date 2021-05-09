import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/resources/banner-moc-1-1.png";
import BannerPc from "../assets/images/resources/desktop-pc-repair.png";
import bgp from '../assets/images/bgp.jpg'

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };

  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${bgp})` }}
      ></div>
      <div className="container">
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="Kl5B6MBAntI"
          onClose={() => setOpen({ isOpen: false })}
        />
        <div onClick={openModal} className="banner-one__video video-popup">
          <i className="fa fa-play"></i>
        </div>
        <div className="banner-one__moc">
          {/* <img
            src={BannerPc}
            className="wow fadeInUp banner-image"
            data-wow-duration="1500ms"
            alt=""
          /> */}
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              {/* <form
                className="banner-one__mc-form mc-form"
                data-url="MAILCHIMP__POPUP__FORM__URL"
              >
                <input type="text" name="email" placeholder="Email address" />
                <button type="submit" className="thm-btn banner-one__mc-btn">
                  <span>Free Trial</span>
                </button>
              </form> */}
              <div className="mc-form__response"></div>
              <h3>
                Welcome to Saim
                <br />
                 Support Computers
                {/* <br />
                Repair Services */}
              </h3>
              <p style={{ fontWeight: "bold", color: "#000" }}>
                We provide remote support to our customers and act as an <br />
                internal remote helpdesk.
              </p>
              <a href="https://www.facebook.com/saimxx3/" className="thm-btn banner-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
