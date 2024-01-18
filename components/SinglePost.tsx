import Image from "next/image";
import React from "react";

export default function SinglePost() {
  return (
    <div className="div">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="card-item">
              <p className="h">the quick fox jumps over</p>
              <p className="text-wrapper">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <div className="list-row relative">
                <Image
                  className="line"
                  alt="Line"
                  src="/line-2.svg"
                  layout="fill"
                  style={{
                    objectFit: "contain",
                  }}
                />
                <p className="p">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <p className="text-wrapper">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="card-item-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-group relative">
                <div className="unsplash" />
                <Image
                  className="unsplash-qanofijlfs"
                  alt="Unsplash"
                  src="/unsplash-qanof9ijlfs.png"
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
    </div>
  );
}
