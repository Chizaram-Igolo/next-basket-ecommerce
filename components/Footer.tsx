import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="desktop-footer">
      <div className="overlap-2">
        <div className="div-3">
          <div className="container-6">
            <div className="row-6">
              <div className="navbar-brand-wrapper">
                <div className="navbar-brand">
                  <div className="text-wrapper-3">Bandage</div>
                </div>
              </div>
              {/* <Image
                className="img"
                alt="Col md"
                src="/col-md-3.svg"
                layout="fill"
                objectFit="contain"
              /> */}
            </div>
          </div>
        </div>
        {/* <Image
          className="hr"
          alt="Hr"
          src="/hr.svg"
          layout="fill"
          objectFit="contain"
        /> */}
      </div>
      <div className="div-4">
        <div className="container-7">
          <div className="row-2">
            <div className="col-md-6">
              <div className="h-7">Company Info</div>
              <div className="div-5">
                <div className="link">About Us</div>
                <div className="link-2">Carrier</div>
                <div className="link-2">We are hiring</div>
                <div className="link-2">Blog</div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="h-7">Legal</div>
              <div className="div-5">
                <div className="link">About Us</div>
                <div className="link-2">Carrier</div>
                <div className="link-2">We are hiring</div>
                <div className="link-2">Blog</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-7">Features</div>
              <div className="div-5">
                <div className="link">Business Marketing</div>
                <div className="link-2">User Analytic</div>
                <div className="link-2">Live Chat</div>
                <div className="link-2">Unlimited Support</div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="h-7">Resources</div>
              <div className="div-5">
                <div className="link">IOS &amp; Android</div>
                <div className="link-2">Watch a Demo</div>
                <div className="link-2">Customers</div>
                <div className="link-2">API</div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="h-7">Get In Touch</div>
              <div className="custom-form-group">
                <div className="input-group">
                  <div className="overlap-group-2">
                    <div className="form-control-input">
                      <div className="text-wrapper-4">Your Email</div>
                    </div>
                    <div className="input-group-append">
                      <button className="btn">
                        <div className="input-group-text">Subscribe</div>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="form-text">Lore imp sum dolor Amit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-6">
        <div className="container-8">
          <div className="col-md-wrapper">
            <div className="col-md-9">
              <p className="text-wrapper-5">
                Made With Love By Finland All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
