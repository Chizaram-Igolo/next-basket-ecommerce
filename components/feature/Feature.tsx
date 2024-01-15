interface IFeature {
  heading: string;
  text: string;
  image: string;
}

const Feature: React.FC<IFeature> = ({ heading, text, image }) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img className="icon-cool-icon" alt="Icon cool icon" src={image} />
        <div className="feature-title">Easy Wins</div>
        <p className="paragraph-feature">Get your best looking smile now!</p>
      </div>
    </div>
  );
};

export default Feature;
