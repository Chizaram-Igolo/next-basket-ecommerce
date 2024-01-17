import Image from "next/image";

export default function BreadCrumbNavbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="breadcrumb">
            <div className="link">Home</div>
            {/* <Image
              className="icn-arrow-right-icn"
              alt="Icn arrow right icn"
              src="/icn-arrow-right-icn-xs.svg"
              layout="fill"
              objectFit="contain"
            /> */}
            <div className="h">Shop</div>
          </div>
        </div>
      </div>
    </div>
  );
}
