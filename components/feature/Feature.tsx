import Image from "next/image";

interface IFeature {
  heading: string;
  text: string;
  image: string;
}

const Feature: React.FC<IFeature> = ({ heading, text, image }) => {
  return (
    <div className="col-md-3">
      <div className="card relative">
        <Image
          className="icon-cool-icon"
          alt="Icon cool icon"
          src={image}
          layout="fill"
        />
        <div className="feature-title">Easy Wins</div>
        <p className="paragraph-feature">Get your best looking smile now!</p>
      </div>
    </div>
  );
};

export default Feature;
