import React from "react";

export default function HeroSection() {
  return (
    <div className="desktop-shop-cards">
      <div className="container">
        <div className="row">
          {/* <div className="col-md" /> */}
          <div className="col-md hero-img-div-1">
            <div className="card-content-2">
              <div className="h-2">5 Items</div>
              <div className="h-3">FURNITURE</div>
              <div className="h-4">Read More</div>
            </div>
          </div>
          <div className="frame-3">
            <div className="card-item-wrapper">
              <div className="card-item">
                <div className="overlap-group hero-img-div-2">
                  <div className="card-content">
                    <div className="h-2">5 Items</div>
                    <div className="h-3">FURNITURE</div>
                    <div className="h-4">Read More</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="overlap-group-wrapper">
                <div className="card-content-wrapper hero-img-div-3">
                  <div className="card-content-2">
                    <div className="h-2">5 Items</div>
                    <div className="h-3">FURNITURE</div>
                    <div className="h-4">Read More</div>
                  </div>
                </div>
              </div>
              <div className="overlap-group-wrapper hero-img-div-4">
                {/* <div className="overlap"> */}
                {/* <img
                    className="media-bg-cover"
                    alt="Media bg cover"
                    src="./media-bg-cover-2.png"
                  /> */}
                <div className="card-content-3">
                  <div className="h-2">5 Items</div>
                  <div className="h-3">FURNITURE</div>
                  <div className="h-4">Read More</div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
