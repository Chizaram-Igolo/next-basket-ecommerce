export default function BannerBar() {
  return (
    <div className="navbar-dark">
      <div className="collapse-navbar">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="btn-sm">
                <img
                  className="icn-settings-icn-xs"
                  alt="Icn settings icn xs"
                  src="icn-phone-xs.png"
                />
                <div className="h">(225) 555-0118</div>
              </div>
              <div className="div">
                <img
                  className="icn-settings-icn-xs"
                  alt="Icn settings icn xs"
                  src="/icn-email-xs.png"
                />
                <div className="h">michelle.rivera@example.com</div>
              </div>
            </div>
            <div className="h-wrapper">
              <p className="h">
                Follow Us&nbsp;&nbsp;and get a chance to win 80% off
              </p>

              {/* <img className="img" alt="Col md" src="col-md-4.png" /> */}
            </div>

            <div className="col-md">
              <div className="h">Follow Us&nbsp;&nbsp;:</div>
              <div className="social-media">
                <img className="a" alt="A" src="a.png" />
                <img className="img" alt="A" src="a-1.png" />
                <img className="a-2" alt="A" src="a-2.png" />
                <img className="a-3" alt="A" src="a-3.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
