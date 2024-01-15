import React from "react";
import ContentCard from "../ContentCard";

export default function PostSection() {
  return (
    <div className="desktop-blog">
      <div className="container-4">
        <div className="main-content-wrapper">
          <div className="main-content">
            <div className="text-wrapper-2">Practice Advice</div>
            <div className="section-title-2">Featured Posts</div>
          </div>
        </div>
        <div className="row-3">
          <div className="col-md-4">
            <ContentCard
              //   className="content-card-instance"
              divClassName="content-card-2"
              fixedHeightClassName="post-image-card-1"
              hClassName="content-card-2"
              iconAkarIconsClassName="content-card-3"
              iconAntDesignArea="image.svg"
              iconArrowNext="/icon-arrow-next-2.svg"
              padding={false}
              rounded={false}
              small={false}
              smallClassName="content-card-2"
              smallClassNameOverride="content-card-2"
              text={
                <>
                  Loudest à la Madison #1 <br />
                  (L&#39;integral)
                </>
              }
            />
          </div>
          <div className="col-md-4">
            <ContentCard
              //   className="content-card-instance"
              divClassName="content-card-2"
              fixedHeightClassName="post-image-card-2"
              hClassName="content-card-2"
              iconAkarIconsClassName="content-card-3"
              iconAntDesignArea="icon-ant-design-area-chart-outlined-2.svg"
              iconArrowNext="/icon-arrow-next-3.svg"
              padding={false}
              rounded={false}
              small={false}
              smallClassName="content-card-2"
              smallClassNameOverride="content-card-2"
              text={
                <>
                  Loudest à la Madison #1 <br />
                  (L&#39;integral)
                </>
              }
            />
          </div>
          <div className="col-md-4">
            <ContentCard
              //   className="content-card-5"
              divClassName="content-card-2"
              fixedHeightClassName="post-image-card-3"
              hClassName="content-card-2"
              iconAntDesignArea="icon-ant-design-area-chart-outlined-3.svg"
              iconArrowNext="/icon-arrow-next-4.svg"
              padding={false}
              rounded={false}
              small={false}
              smallClassName="content-card-2"
              smallClassNameOverride="content-card-2"
              text={
                <>
                  Loudest à la Madison #1 <br />
                  (L&#39;integral)
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
