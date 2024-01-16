import Image from "next/image";

export default function BannerBar() {
  return (
    <div className="navbar-dark">
      <div className="collapse-navbar">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="btn-sm">
                <Image
                  className="icn-settings-icn-xs"
                  alt="Icn settings icn xs"
                  src="/icn-phone-xs.png"
                  layout="fill"
                  objectFit="contain"
                />
                <div className="h">(225) 555-0118</div>
              </div>
              <div className="div">
                <Image
                  className="icn-settings-icn-xs"
                  alt="Icn settings icn xs"
                  src="/icn-email-xs.png"
                  layout="fill"
                  objectFit="contain"
                />
                <div className="h">michelle.rivera@example.com</div>
              </div>
            </div>
            <div className="h-wrapper">
              <p className="h">
                Follow Us&nbsp;&nbsp;and get a chance to win 80% off
              </p>

              {/* <Image className="img" alt="Col md" src="col-md-4.png" /> */}
            </div>

            <div className="col-md">
              <div className="h">Follow Us&nbsp;&nbsp;:</div>
              <div className="social-media">
                <Image
                  className="a"
                  alt="A"
                  src="/a.png"
                  layout="fill"
                  objectFit="contain"
                />
                <Image
                  className="img"
                  alt="A"
                  src="/a-1.png"
                  layout="fill"
                  objectFit="contain"
                />
                <Image
                  className="a-2"
                  alt="A"
                  src="/a-2.png"
                  layout="fill"
                  objectFit="contain"
                />
                <Image
                  className="a-3"
                  alt="A"
                  src="/a-3.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
