import Image from "next/image";

export default function ClientsSection() {
  return (
    <div className="desktop-clients">
      <div className="row">
        <div className="col-md relative">
          <Image
            className="fa-brands"
            alt="Fa brands"
            src="/fa-brands-1.png"
            layout="fill"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="fa-brands-wrapper">
          <Image
            className="img"
            alt="Fa brands"
            src="/fa-brands-2.png"
            layout="fill"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="img-wrapper">
          <Image
            className="fa-brands-2"
            alt="Fa brands"
            src="/fa-brands-3.png"
            layout="fill"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <Image
          className="col-md-2"
          alt="Col md"
          src="/col-md-2.png"
          layout="fill"
          style={{
            objectFit: "contain",
          }}
        />
        <Image
          className="col-md-2"
          alt="Col md"
          src="/image.png"
          layout="fill"
          style={{
            objectFit: "contain",
          }}
        />
        <Image
          className="col-md-3"
          alt="Col md"
          src="/col-md-2-2.png"
          layout="fill"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
