import Image from "next/image";
import React from "react";

export default function TestimonialSection() {
  return (
    <div className="desktop-testimonials">
      <div className="row-wrapper">
        <div className="row-4">
          <div className="col-md-5">
            <p className="h-5">What they say about us</p>
            <div className="div-wrapper">
              <div className="card-content-4">
                <div className="media-circle-box-xs relative" />
                <Image
                  className="stars"
                  alt="Stars"
                  src="/stars.svg"
                  layout="fill"
                  style={{
                    objectFit: "contain",
                  }}
                />
                <p className="h-6">
                  Slate helps you see how many more days you need to work to{" "}
                  <br />
                  reach your financial goal.
                </p>
                <div className="div-2">
                  <div className="link-testimonial">Regina Miles</div>
                  <div className="testimonial-job">Designer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-5">
              <Image
                className="unsplash"
                alt="Unsplash"
                src="/unsplash-0y8p69vwiym.svg"
                layout="fill"
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                className="unsplash-ahyixwrtks"
                alt="Unsplash"
                src="/unsplash-ah7yixwrtks.svg"
                layout="fill"
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                className="unsplash-dxhyiy"
                alt="Unsplash"
                src="/unsplash-6-dx4h4yi1y.svg"
                layout="fill"
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                className="unsplash-ghztzvllodq"
                alt="Unsplash ghztzvllodq"
                src="/unsplash-ghztzvllodq.svg"
                layout="fill"
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                className="unsplash-uutouxqaexk"
                alt="Unsplash uutouxqaexk"
                src="/unsplash-uutouxqaexk.svg"
                layout="fill"
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                className="unsplash-QY"
                alt="Unsplash QY"
                src="/unsplash-rhn8ff1g-QY.svg"
                layout="fill"
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                className="unsplash-joqkbxup"
                alt="Unsplash"
                src="/unsplash-jo40qkbxup0.svg"
                layout="fill"
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                className="unsplash-qlgazvdoo"
                alt="Unsplash"
                src="/unsplash-qlga5zv3doo.svg"
                layout="fill"
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                className="unsplash-rechviy"
                alt="Unsplash"
                src="/unsplash-1r1echv4i0y.svg"
                layout="fill"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
