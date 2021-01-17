import React, { Fragment, useState } from "react";
import PizzaRolling from "../../imgs/place-your-image-here-double-click-to-edit@3x.png";
import "./ThirdPage.css";

export default function ThirdPage() {
  const [price, setPrice] = useState("15");

  return (
    <Fragment>
      <div className="thirdPage__header">
        <span className="thirdPage__header__title">
          about our<span> concept</span>
        </span>
        <p className="thirdPage__header__middle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis{" "}
        </p>
        <div className="thirdPage__header__bottom">
          <span>Pizza</span>
          <span>Modern concept</span>
          <span>Story from shef</span>
          <span>Gallery</span>
        </div>
      </div>
      <div className="thirdPage__body">
        <div className="thirdPage__body__top">
          <span>MasterClass</span>
        </div>
        <div className="thirdPage__body__content">
          <div>
            <span>| the recipe for the most delicious pizza dough |</span>
            <p>waiting for you!</p>
            <div className="thirdPage__body__price">
              <span>
                price
                <span style={{ fontWeight: "bold" }}>_</span>
                <span style={{ fontWeight: "900" }}>{price}$</span>
              </span>
            </div>
            <div>
              <span className="thirdPage__body__date">12:00-15:00</span>
            </div>
          </div>
        </div>
        <button className="thirdPage__applyBtn">APPLY</button>
      </div>
      <img className="thirdPage__body__img" src={PizzaRolling} alt="" />
    </Fragment>
  );
}
