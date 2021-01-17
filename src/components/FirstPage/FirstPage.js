import React from "react";
import PizzaCover from "../../imgs/Pizza-Cover.png";
import PizzaSide from "../../imgs/crop-pizza-black_23-2147749510.jpg";
import Header from "../Header/Header";
import "./FirstPage.css";

export default function FirstPage() {
  return (
    <div className="firstPage">
      <div className="firstPage__sectionOne">
        <img src={PizzaCover} alt="pizza" className="firstPage__mainImage" />
        <Header />
        <div className="firstPage__middle__background"></div>
        <div className="firstPage__middle__text">
          <span className="firstPage__middle__text__lineOne">GRAND</span>
          <br />
          <span className="firstPage__middle__text__lineTwo">OPENING</span>
        </div>
        <button className="firstPage__middle__btn">READ MORE</button>
      </div>

      <div className="whats__new">
        <p className="whats__new__title">What's new?</p>
        <br />
        <p className="whats__new__content">
          <span style={{ fontWeight: 900, marginRight: "20px" }}>|</span>Sed do
          eiusmod tempor incididunt ut Labore et
        </p>
        <br />
        <p className="whats__new__content">
          <span style={{ fontWeight: 900, marginRight: "20px" }}>|</span>
          Dolore magna aliqua
        </p>
        <br />
        <p className="whats__new__content">
          <span style={{ fontWeight: 900, marginRight: "20px" }}>|</span>Quis
          ipsum suspendisse ultrices gravida
        </p>
      </div>
      <div className="newFormat">
        <p className="newFormat__text">new format</p>
      </div>
      <div className="whats__new__background"></div>
      <img src={PizzaSide} alt="pizza" className="firstPage__sideImage" />
    </div>
  );
}
