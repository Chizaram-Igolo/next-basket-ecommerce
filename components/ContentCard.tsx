import Image from "next/image";
import { ReactElement } from "react";

interface IContentCard {
  rounded: boolean;
  padding: boolean;
  small: boolean;
  fixedHeightClassName: string;
  smallClassName: string;
  smallClassNameOverride: string;
  text: ReactElement;
  iconAkarIconsClassName?: string;
  divClassName: string;
  iconAntDesignArea: string;
  hClassName: string;
  iconArrowNext: string;
}

const ContentCard: React.FC<IContentCard> = ({
  rounded,
  padding,
  small,
  fixedHeightClassName,
  smallClassName,
  smallClassNameOverride,
  text = "Koudetat à la Maison #1 <br/>(L&#39;intégrale)",
  iconAkarIconsClassName,
  divClassName,
  iconAntDesignArea = "icon-ant-design-area-chart-outlined.svg",
  hClassName,
  iconArrowNext = "icon-arrow-next.svg",
}) => {
  return (
    <div
      className={`content-card padding-${padding} rounded-${rounded} small-${small}`}
    >
      <div className={`fixed-height ${fixedHeightClassName}`}>
        <div className="tag">
          <div className="text-wrapper">NEW</div>
        </div>
      </div>
      <div className="frame">
        <div className="tags">
          <div className="small">Google</div>
          <div className={`small ${smallClassName}`}>Trending</div>
          <div className={`small ${smallClassNameOverride}`}>New</div>
        </div>
        <div className="post-title">
          {!small && <p className="p">{text}</p>}

          {small && (
            <p className="p">
              Koudetat à la Maison <br />
              #1 (L&#39;intégrale)
            </p>
          )}
        </div>
        <div className="paragraph-post">
          {(padding || !small) && (
            <p className="p">
              We focus on ergonomics and meeting <br />
              you where you work. It&#39;s only a <br />
              keystroke away.
            </p>
          )}

          {small && !padding && (
            <p className="p">
              We focus on ergonomics <br />
              and meeting you where <br />
              you work. It&#39;s only a <br />
              keystroke away.
            </p>
          )}
        </div>
        <div className="div">
          <div className="frame-2">
            <div className={`icon-akar-icons ${iconAkarIconsClassName}`} />
            <div className={`small-2 ${divClassName}`}>
              {!small && <>22 April 2021</>}

              {small && !padding && <>22 April ..</>}

              {small && padding && <>22 Ap...</>}
            </div>
          </div>
          <div className="frame-2">
            <Image
              className="icon-ant-design-area"
              alt="Icon ant design area"
              src={
                !small && !rounded && padding
                  ? "image.svg"
                  : !small && rounded && padding
                  ? "icon-ant-design-area-chart-outlined-2.svg"
                  : rounded && !small && !padding
                  ? "icon-ant-design-area-chart-outlined-3.svg"
                  : small && !rounded && !padding
                  ? "icon-ant-design-area-chart-outlined-4.svg"
                  : small && !rounded && padding
                  ? "icon-ant-design-area-chart-outlined-5.svg"
                  : small && rounded && padding
                  ? "icon-ant-design-area-chart-outlined-6.svg"
                  : rounded && small && !padding
                  ? "icon-ant-design-area-chart-outlined-7.svg"
                  : iconAntDesignArea
              }
              layout="fill"
              objectFit="contain"
            />
            <div className="small-2">
              {!small && <>10 comments</>}

              {small && <>10 com...</>}
            </div>
          </div>
        </div>
        <div className="a">
          <div className={`h ${hClassName}`}>Learn More</div>
          <Image
            className="icon-arrow-next"
            alt="Icon arrow next"
            src={
              !small && !rounded && padding
                ? "icon-arrow-next-2.svg"
                : !small && rounded && padding
                ? "icon-arrow-next-3.svg"
                : rounded && !small && !padding
                ? "icon-arrow-next-4.svg"
                : small && !rounded && !padding
                ? "icon-arrow-next-5.svg"
                : small && !rounded && padding
                ? "icon-arrow-next-6.svg"
                : small && rounded && padding
                ? "icon-arrow-next-7.svg"
                : rounded && small && !padding
                ? "icon-arrow-next-8.svg"
                : iconArrowNext
            }
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
