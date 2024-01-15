import { IProduct } from "@/app/types";
import Feature from "./Feature";

const features = [
  {
    id: 1,
    heading: "Easy Wins",
    text: "Get your best looking smile now!",
    image: "/bx_bxs-book-reader.svg",
  },
  {
    id: 2,
    heading: "Concrete",
    text: "Defalcate is most focused in helping you discover your most beautiful smile",
    image: "/carbon_book.svg",
  },
  {
    id: 3,
    heading: "Hack Growth",
    text: "Overcame any hurdle or any other problem.",
    image: "/uil_arrow-growth.svg",
  },
];

export default function FeatureSection() {
  return (
    <div className="desktop-features">
      <div className="container-3">
        <div className="main-content-wrapper">
          <div className="main-content">
            <div className="section-title">Featured Products</div>
            <div className="h-section-title">THE BEST SERVICES</div>
            <p className="paragraph">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>
        <div className="row-3">
          {features.map((f) => (
            <Feature heading={f.heading} text={f.text} image={f.image} />
          ))}
          {/* <div className="col-md-3">
            <div className="card">
              <img
                className="icon-cool-icon"
                alt="Icon cool icon"
                src="icon-cool-icon-1153.svg"
              />
              <div className="feature-title">Easy Wins</div>
              <p className="paragraph-feature">
                Get your best looking smile now!
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="icon-cool-icon"
                alt="Icon cool icon"
                src="icon-cool-icon-153.svg"
              />
              <div className="feature-title">Concrete</div>
              <p className="p">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                className="icon-cool-icon"
                alt="Icon cool icon"
                src="icon-cool-icon-125.svg"
              />
              <div className="feature-title">Hack Growth</div>
              <p className="paragraph-feature">
                Overcame any hurdle or any other problem.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
