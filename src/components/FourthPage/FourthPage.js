import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Pizza1 from "../../imgs/Pizza-Gallery1.png";
import Pizza2 from "../../imgs/Pizza-Gallery2.png";
import Pizza3 from "../../imgs/Pizza-Gallery3.png";
import RectBG from "../../imgs/rectangle@3x.png";
import "./FourthPage.css";

export default function FourthPage() {
  return (
    <div className="fourthPage">
      <div className="fourthPage__background">
        <img src={RectBG} alt="" />
      </div>
      <div className="forthPage__title">
        <span>Gallery</span>
      </div>
      <div className="forthPage__gallery">
        <img className="forthPage__gallery__1" src={Pizza1} alt="" />
        <img className="forthPage__gallery__2" src={Pizza2} alt="" />
        <img className="forthPage__gallery__3" src={Pizza3} alt="" />
      </div>
      <div className="fourthPage__pizzeria">
        <span>#pizzeria.</span>
      </div>
      <div className="fourthPage__middleContent">
        <div className="fourthPage__middleContent__first">
          <span className="fourthPage__middleContent__first__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </span>
          <br />
          <span className="fourthPage__middleContent__first__name">
            Name Name
          </span>
        </div>
        <div className="fourthPage__middleContent__second">
          <span className="fourthPage__middleContent__second__title">
            | find us here
          </span>

          <div className="fourthPage__middleContent__second__socialMedia">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-whatsapp"></i>
          </div>
          <div>
            <span className="fourthPage__middleContent__second__title">
              | ask as here
            </span>
            <br />
            <span className="fourthPage__middleContent__second__ask">
              www.#pizzeria.com
            </span>
          </div>
        </div>
      </div>
      <div className="fourthPage__footer__backgroud">
        <div className="fourthPage__footer">
          <div className="fourthPage__footer__right">
            <span className="fourthPage__footer__right__title">ABOUT</span>
            <div className="fourthPage__footer__right__content">
              <span>
                Lorem ipsum dolor sit amet, consec <br /> tetur adipisicing
                elit, sed do eiusmod tempor incididunt ultimam quantum
              </span>
            </div>
          </div>
          <div>
            <span className="fourthPage__footer__left__title">MENU</span>
            <div className="fourthPage__footer__left__content">
              <p>Team</p>
              <p>Join us</p>
              <p>Ethic</p>
              <p>Goals</p>
            </div>
          </div>
          <div>
            <span className="fourthPage__footer__left__title">SHEF</span>
            <div className="fourthPage__footer__left__content">
              <p>Team</p>
              <p>Join us</p>
              <p>Ethic</p>
              <p>Goals</p>
            </div>
          </div>
          <div>
            <span className="fourthPage__footer__left__title">CONTACT</span>
            <div className="fourthPage__footer__left__content">
              <p>Team</p>
              <p>Join us</p>
              <p>Ethic</p>
              <p>Goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
