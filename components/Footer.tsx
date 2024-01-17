import React from "react";

export default function Footer() {
  return (
    <div className="div footer-div">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="navbar-brand">
              <div className="text-wrapper">Bandage</div>
            </div>
          </div>
          <img className="img" alt="Col md" src="col-md-3.svg" />
        </div>

        <div className="row">
          <div className="col-md">
            <div className="h">Company Info</div>
            <div className="class">
              <div className="link">About Us</div>
              <div className="text-wrapper">Carrier</div>
              <div className="text-wrapper">We are hiring</div>
              <div className="text-wrapper">Blog</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="h">Legal</div>
            <div className="class">
              <div className="link">About Us</div>
              <div className="text-wrapper">Carrier</div>
              <div className="text-wrapper">We are hiring</div>
              <div className="text-wrapper">Blog</div>
            </div>
          </div>
          <div className="col-md">
            <div className="h">Features</div>
            <div className="class">
              <div className="link">Business Marketing</div>
              <div className="text-wrapper">User Analytic</div>
              <div className="text-wrapper">Live Chat</div>
              <div className="text-wrapper">Unlimited Support</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="h">Resources</div>
            <div className="class">
              <div className="link">IOS &amp; Android</div>
              <div className="text-wrapper">Watch a Demo</div>
              <div className="text-wrapper">Customers</div>
              <div className="text-wrapper">API</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="h">Get In Touch</div>
            <div className="custom-form-group">
              <div className="input-group">
                <div className="overlap-group">
                  <div className="form-control-input">
                    <div className="text-wrapper-2">Your Email</div>
                  </div>
                  <button className="input-group-append">
                    <button className="btn">
                      <div className="input-group-text">Subscribe</div>
                    </button>
                  </button>
                </div>
              </div>
              <p className="form-text">Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <p className="text-wrapper">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
