import React, { Fragment } from "react";
import Pizza from "../../imgs/Pizza-Page2.png";
import "./SecondPage.css";

export default function SecondPage() {
  return (
    <Fragment>
      <div className="secondPage__header">
        <div className="secondPage__header__inner">
          <div>
            <span className="secondPage__header__title">| new format</span>
            <p className="secondPage__header__content">
              Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
              tation omne ullamco laboris nisi ut aliqolore.
            </p>
          </div>
          <div>
            <span className="secondPage__header__title">|| master classes</span>
            <p className="secondPage__header__content">
              Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
              tation omne ullamco laboris nisi ut aliqolore.
            </p>
          </div>
          <div>
            <span className="secondPage__header__title">
              ||| pizza restaurant
            </span>
            <p className="secondPage__header__content">
              Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
              tation omne ullamco laboris nisi ut aliqolore.
            </p>
          </div>
        </div>
      </div>
      <div className="secondPage__sectionTwo__body">
        <img className="secondPage__body__img" src={Pizza} alt="" srcset="" />
        <div className="secondPage__body__title">
          <span className="secondPage__body__title__content">
            <span style={{ fontWeight: "normal" }}>#</span>pizzeria.
          </span>
        </div>
        <div className="secondPage__body__menuTitle">
          <div className="secondPage__body__menuTitle__content__container">
            <span className="secondPage__body__menuTitle__content">
              our new menu
            </span>
          </div>
        </div>
        <div className="secondPage__body__menuBackground"></div>
        <div className="secondPage__menu__priceBG"></div>
        <div className="secondPage__body__menu">
          <div className="whats__new__content">
            <span>
              <span style={{ fontWeight: 900, marginRight: "20px" }}>|</span>
              EUISMOD SED DO
            </span>
            <span>10$</span>
          </div>
          (tempor, incididunt, utas, labore, etws)
          <br /> <br />
          <div className="whats__new__content">
            <span>
              <span style={{ fontWeight: 900, marginRight: "20px" }}>||</span>
              EUISMOD SED DO
            </span>
            <span>14$</span>
          </div>
          (magna, aliqua, lorem)
          <br /> <br />
          <div className="whats__new__content">
            <span>
              <span style={{ fontWeight: 900, marginRight: "20px" }}>|||</span>
              EUISMOD SED DO
            </span>
            <span>20$</span>
          </div>
          (tempor, incididunt, utas, labore, etws)
          <br /> <br />
          <div className="whats__new__content">
            <span>
              <span style={{ fontWeight: 900, marginRight: "20px" }}>||</span>
              EUISMOD SED DO
            </span>
            <span>10$</span>
          </div>
          (magna, aliqua, lorem)
        </div>

        <div className="secondPage__bottom">
          <div className="secondPage__bottom__content">
            <p>||| _ top in menu</p>
            <p>|| _ sale item</p>
            <p>| _ made by shef</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
