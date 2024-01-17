import React from "react";

export default function ProductNavbar() {
  return (
    <div className="navbar-style">
      <div className="nav">
        <div className="li">
          <div className="a">
            <div className="text-wrapper">Description</div>
          </div>
        </div>
        <div className="overlap-group">
          <div className="a-wrapper">
            <div className="a">
              <div className="link">Additional Information</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="a">
              <div className="link">Reviews</div>
              <div className="div">(0)</div>
            </div>
          </div>
        </div>
      </div>
      <img className="line" alt="Line" src="line-1.svg" />
    </div>
  );
}
