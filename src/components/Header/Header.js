import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <span className="header__title__content"><span style={{fontWeight:'normal'}}>#</span>pizzeria.</span>
      </div>
      <NavBar />
    </div>
  );
}
