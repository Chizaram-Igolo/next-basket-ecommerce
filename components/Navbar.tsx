import React from "react";

export default function Navbar() {
  return (
    <div className="navbar-light">
      <div className="navbar-brand">
        <div className="text-wrapper">Bandage</div>
      </div>
      <div className="collapse-navbar">
        <div className="navbar-nav">
          <div className="li">
            <div className="a">
              <div className="link">Home</div>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropdown-toggle">
              <div className="category">Shop</div>
              <img className="vector" alt="Vector" src="vector.svg" />
            </div>
          </div>
          <div className="a-wrapper">
            <div className="a">
              <div className="link">About</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="a">
              <div className="link">Blog</div>
            </div>
          </div>
          <div className="div">
            <div className="a">
              <div className="link">Contact</div>
            </div>
          </div>
          <div className="li-2">
            <div className="a">
              <div className="link">Pages</div>
            </div>
          </div>
        </div>
        <div className="navbar-nav-2">
          <div className="li-3">
            <div className="btn-wrapper">
              <button className="btn">
                <img
                  className="icn-settings-icn-xs"
                  alt="Icn settings icn xs"
                  src="icn-settings-icn-xs.svg"
                />
                <div className="text-wrapper-2">Login / Register</div>
              </button>
            </div>
          </div>
          <img className="img" alt="Li" src="li.svg" />
          <div className="li-4">
            <div className="a-2">
              <button className="btn">
                <img
                  className="icn-settings-icn-xs-2"
                  alt="Icn settings icn xs"
                  src="image.svg"
                />
                <div className="text-wrapper-3">1</div>
              </button>
            </div>
          </div>
          <div className="li-4">
            <div className="a-2">
              <button className="btn">
                <img
                  className="icn-settings-icn-xs-2"
                  alt="Icn settings icn xs"
                  src="icn-settings-icn-xs-2.svg"
                />
                <div className="text-wrapper-3">1</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}