import React from "react";
import "./AccessibilityBar.css";

function AccessibilityBar() {
  const increaseSize = (e) => {
    e.preventDefault();
    document.documentElement.style.setProperty("--base-font-size", "22px");
  };

  const decreaseSize = (e) => {
    e.preventDefault();
    document.documentElement.style.setProperty("--base-font-size", "16px");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand accessb">
          <a className="navbar-item" onClick={(e) => decreaseSize(e)} href="/#">
            <strong>A-</strong>
          </a>
          <a className="navbar-item" onClick={(e) => increaseSize(e)} href="/#">
            <strong>A+</strong>
          </a>
        </div>
      </nav>
    </>
  );
}

export default AccessibilityBar;
