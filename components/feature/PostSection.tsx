import React from "react";
import ContentCard from "../ContentCard";

// const PostSection = () => {
//   return (
//     <div className="desktop-blog">
//       <div className="container-4">
//         <div className="main-content-wrapper">
//           <div className="main-content">
//             <div className="text-wrapper-2">Practice Advice</div>
//             <div className="section-title-2">Featured Posts</div>
//           </div>
//         </div>
//         <div className="row-3">
//           <div className="col-md-4">
//             <ContentCard
//               //   className="content-card-instance"
//               divClassName="content-card-2"
//               fixedHeightClassName="post-image-card-1"
//               hClassName="content-card-2"
//               iconAkarIconsClassName="content-card-3"
//               iconAntDesignArea="image.svg"
//               iconArrowNext="/icon-arrow-next-2.svg"
//               padding={false}
//               rounded={false}
//               small={false}
//               smallClassName="content-card-2"
//               smallClassNameOverride="content-card-2"
//               text={
//                 <>
//                   Loudest à la Madison #1 <br />
//                   (L&#39;integral)
//                 </>
//               }
//             />
//           </div>
//           <div className="col-md-4">
//             <ContentCard
//               //   className="content-card-instance"
//               divClassName="content-card-2"
//               fixedHeightClassName="post-image-card-2"
//               hClassName="content-card-2"
//               iconAkarIconsClassName="content-card-3"
//               iconAntDesignArea="icon-ant-design-area-chart-outlined-2.svg"
//               iconArrowNext="/icon-arrow-next-3.svg"
//               padding={false}
//               rounded={false}
//               small={false}
//               smallClassName="content-card-2"
//               smallClassNameOverride="content-card-2"
//               text={
//                 <>
//                   Loudest à la Madison #1 <br />
//                   (L&#39;integral)
//                 </>
//               }
//             />
//           </div>
//           <div className="col-md-4">
//             <ContentCard
//               //   className="content-card-5"
//               divClassName="content-card-2"
//               fixedHeightClassName="post-image-card-3"
//               hClassName="content-card-2"
//               iconAntDesignArea="icon-ant-design-area-chart-outlined-3.svg"
//               iconArrowNext="/icon-arrow-next-4.svg"
//               padding={false}
//               rounded={false}
//               small={false}
//               smallClassName="content-card-2"
//               smallClassNameOverride="content-card-2"
//               text={
//                 <>
//                   Loudest à la Madison #1 <br />
//                   (L&#39;integral)
//                 </>
//               }
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

function PostSection() {
  return (
    <div className="justify-center items-center bg-white flex flex-col px-16 max-md:px-5">
      <div className="items-center flex w-full max-w-[1050px] flex-col py-12 max-md:max-w-full">
        <div className="items-center flex w-[691px] max-w-full flex-col justify-center mt-16 px-16 max-md:mt-10 max-md:px-5">
          <span className="flex flex-col items-center">
            <div className="text-sky-500 text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap">
              Practice Advice
            </div>
            <div className="text-slate-800 text-center text-4xl font-bold leading-[50px] tracking-wide self-stretch whitespace-nowrap mt-2.5">
              Featured Posts
            </div>
          </span>
        </div>
        <div className="justify-center self-stretch mt-20 mb-10 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33.333%] max-md:w-full max-md:ml-0">
              <div className="items-stretch shadow-sm bg-white flex grow flex-col w-full max-md:mt-2.5">
                <div className="flex-col overflow-hidden relative flex aspect-[1.1266666666666667] w-full pl-2.5 pr-16 pt-5 pb-12 items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    src="/post-image-1.png"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <span className="relative text-white text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap items-stretch shadow-sm bg-red-500 aspect-[2.4166666666666665] justify-center mb-40 px-2.5 rounded max-md:mb-10">
                    NEW
                  </span>
                </div>
                <span className="items-stretch flex flex-col pl-4 pr-6 py-8 max-md:pr-5">
                  <span className="items-stretch flex gap-4">
                    <div className="text-blue-300 text-xs leading-4 tracking-wide">
                      Google
                    </div>
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                      Trending
                    </div>
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                      New
                    </div>
                  </span>
                  <div className="text-slate-800 text-xl leading-8 tracking-wide mt-2.5">
                    Loudest à la Madison #1 <br />
                    (L&apos;integral)
                  </div>{" "}
                  <div className="text-neutral-500 text-sm leading-5 tracking-wide mt-2.5">
                    We focus on ergonomics and meeting <br />
                    you where you work. It&apos;s only a <br />
                    keystroke away.
                  </div>
                  <div className="justify-between items-stretch flex w-full gap-5 mt-2.5 py-4">
                    <span className="items-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/519c52cc4eb41ce247b70d202c3befa3cab54400e9f9df9445e37a3f14ca4a7f?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                        className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-neutral-500 text-xs leading-4 tracking-wide grow whitespace-nowrap">
                        22 April 2021
                      </div>
                    </span>
                    <span className="flex justify-between gap-1.5 items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a0d4f00b0bb903079dc8edc3b0ad472a6fa8161f8111b96645b52df1f7bd94?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                        className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-neutral-500 text-xs leading-4 tracking-wide self-stretch grow whitespace-nowrap">
                        10 comments
                      </div>
                    </span>
                  </div>
                  <span className="items-stretch flex justify-between gap-2.5 mt-2.5 pr-5">
                    <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide grow shrink basis-auto">
                      Learn More
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db20bdda15b7005b1d0e555c8e8f68f8b18ade8a50a0be0f8955a0f7fd2d79d?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                      className="aspect-[0.56] object-contain object-center w-[9px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-stretch w-[33.333%] max-md:w-full max-md:ml-0">
              <div className="items-stretch shadow-sm bg-white flex grow flex-col w-full max-md:mt-2.5">
                <div className="flex-col overflow-hidden relative flex aspect-[1.1266666666666667] w-full pl-2.5 pr-16 pt-5 pb-12 items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    src="/post-image-2.png"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <span className="relative text-white text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap items-stretch shadow-sm bg-red-500 aspect-[2.4166666666666665] justify-center mb-40 px-2.5 rounded max-md:mb-10">
                    NEW
                  </span>
                </div>
                <span className="items-stretch flex flex-col pl-4 pr-6 py-8 max-md:pr-5">
                  <span className="items-stretch flex gap-4">
                    <div className="text-blue-300 text-xs leading-4 tracking-wide">
                      Google
                    </div>
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                      Trending
                    </div>
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                      New
                    </div>
                  </span>
                  <div className="text-slate-800 text-xl leading-8 tracking-wide mt-2.5">
                    Loudest à la Madison #1 <br />
                    (L&apos;integral)
                  </div>{" "}
                  <div className="text-neutral-500 text-sm leading-5 tracking-wide mt-2.5">
                    We focus on ergonomics and meeting <br />
                    you where you work. It&apos;s only a <br />
                    keystroke away.
                  </div>
                  <div className="justify-between items-stretch flex w-full gap-5 mt-2.5 py-4">
                    <span className="items-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/519c52cc4eb41ce247b70d202c3befa3cab54400e9f9df9445e37a3f14ca4a7f?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                        className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-neutral-500 text-xs leading-4 tracking-wide grow whitespace-nowrap">
                        22 April 2021
                      </div>
                    </span>
                    <span className="flex justify-between gap-1.5 items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a0d4f00b0bb903079dc8edc3b0ad472a6fa8161f8111b96645b52df1f7bd94?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                        className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-neutral-500 text-xs leading-4 tracking-wide self-stretch grow whitespace-nowrap">
                        10 comments
                      </div>
                    </span>
                  </div>
                  <span className="items-stretch flex justify-between gap-2.5 mt-2.5 pr-5">
                    <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide grow shrink basis-auto">
                      Learn More
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db20bdda15b7005b1d0e555c8e8f68f8b18ade8a50a0be0f8955a0f7fd2d79d?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                      className="aspect-[0.56] object-contain object-center w-[9px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-stretch w-[33.333%] max-md:w-full max-md:ml-0">
              <div className="items-stretch shadow-sm bg-white flex grow flex-col w-full max-md:mt-2.5">
                <div className="flex-col overflow-hidden relative flex aspect-[1.1266666666666667] w-full pl-2.5 pr-16 pt-5 pb-12 items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    src="/post-image-3.png"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <span className="relative text-white text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap items-stretch shadow-sm bg-red-500 aspect-[2.4166666666666665] justify-center mb-40 px-2.5 rounded max-md:mb-10">
                    NEW
                  </span>
                </div>
                <span className="items-stretch flex flex-col pl-4 pr-6 py-8 max-md:pr-5">
                  <span className="items-stretch flex gap-4">
                    <div className="text-blue-300 text-xs leading-4 tracking-wide">
                      Google
                    </div>
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                      Trending
                    </div>
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                      New
                    </div>
                  </span>
                  <div className="text-slate-800 text-xl leading-8 tracking-wide mt-2.5">
                    Loudest à la Madison #1 <br />
                    (L&apos;integral)
                  </div>{" "}
                  <div className="text-neutral-500 text-sm leading-5 tracking-wide mt-2.5">
                    We focus on ergonomics and meeting <br />
                    you where you work. It&apos;s only a <br />
                    keystroke away.
                  </div>
                  <div className="justify-between items-stretch flex w-full gap-5 mt-2.5 py-4">
                    <span className="items-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/519c52cc4eb41ce247b70d202c3befa3cab54400e9f9df9445e37a3f14ca4a7f?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                        className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-neutral-500 text-xs leading-4 tracking-wide grow whitespace-nowrap">
                        22 April 2021
                      </div>
                    </span>
                    <span className="flex justify-between gap-1.5 items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a0d4f00b0bb903079dc8edc3b0ad472a6fa8161f8111b96645b52df1f7bd94?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                        className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-neutral-500 text-xs leading-4 tracking-wide self-stretch grow whitespace-nowrap">
                        10 comments
                      </div>
                    </span>
                  </div>
                  <span className="items-stretch flex justify-between gap-2.5 mt-2.5 pr-5">
                    <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide grow shrink basis-auto">
                      Learn More
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db20bdda15b7005b1d0e555c8e8f68f8b18ade8a50a0be0f8955a0f7fd2d79d?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                      className="aspect-[0.56] object-contain object-center w-[9px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </span>
                </span>
              </div>
            </div>

            {/* <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2dd7a1b7f6c0e6a9fb0e9ebb5c6bfad546354eb97b1a4a0ee989227434235c5b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd7a1b7f6c0e6a9fb0e9ebb5c6bfad546354eb97b1a4a0ee989227434235c5b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd7a1b7f6c0e6a9fb0e9ebb5c6bfad546354eb97b1a4a0ee989227434235c5b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd7a1b7f6c0e6a9fb0e9ebb5c6bfad546354eb97b1a4a0ee989227434235c5b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd7a1b7f6c0e6a9fb0e9ebb5c6bfad546354eb97b1a4a0ee989227434235c5b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd7a1b7f6c0e6a9fb0e9ebb5c6bfad546354eb97b1a4a0ee989227434235c5b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd7a1b7f6c0e6a9fb0e9ebb5c6bfad546354eb97b1a4a0ee989227434235c5b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd7a1b7f6c0e6a9fb0e9ebb5c6bfad546354eb97b1a4a0ee989227434235c5b?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                className="aspect-[0.57] object-contain object-center w-full items-start shadow-sm overflow-hidden grow max-md:mt-2.5"
              />
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch shadow-sm bg-white flex grow flex-col w-full max-md:mt-2.5">
                <div className="flex-col overflow-hidden relative flex aspect-[1.13] w-full pl-5 pr-16 pt-5 pb-12 items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ce86feaff67972207477c94e6a4f89822e7f477eb3e71586c0d1fb2a6ed1319?apiKey=4b2ed2e70df748bbaca313761bff9232&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce86feaff67972207477c94e6a4f89822e7f477eb3e71586c0d1fb2a6ed1319?apiKey=4b2ed2e70df748bbaca313761bff9232&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce86feaff67972207477c94e6a4f89822e7f477eb3e71586c0d1fb2a6ed1319?apiKey=4b2ed2e70df748bbaca313761bff9232&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce86feaff67972207477c94e6a4f89822e7f477eb3e71586c0d1fb2a6ed1319?apiKey=4b2ed2e70df748bbaca313761bff9232&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce86feaff67972207477c94e6a4f89822e7f477eb3e71586c0d1fb2a6ed1319?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce86feaff67972207477c94e6a4f89822e7f477eb3e71586c0d1fb2a6ed1319?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce86feaff67972207477c94e6a4f89822e7f477eb3e71586c0d1fb2a6ed1319?apiKey=4b2ed2e70df748bbaca313761bff9232&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce86feaff67972207477c94e6a4f89822e7f477eb3e71586c0d1fb2a6ed1319?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <span className="relative text-white text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap items-stretch shadow-sm bg-red-500 aspect-[2.4166666666666665] justify-center mb-40 px-2.5 rounded max-md:mb-10">
                    NEW
                  </span>
                </div>
                <span className="items-stretch flex flex-col pl-6 pr-4 py-8 max-md:pl-5">
                  <span className="items-stretch flex gap-4">
                    <div className="text-blue-300 text-xs leading-4 tracking-wide">
                      Google
                    </div>
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                      Trending
                    </div>
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                      New
                    </div>
                  </span>
                  <div className="text-slate-800 text-xl leading-8 tracking-wide mt-2.5">
                    Loudest à la Madison #1 <br />
                    (L&apos;integral)
                  </div>{" "}
                  <div className="text-neutral-500 text-sm leading-5 tracking-wide mt-2.5">
                    We focus on ergonomics and meeting <br />
                    you where you work. It&apos;s only a <br />
                    keystroke away.
                  </div>
                  <div className="justify-between items-stretch flex w-full gap-5 mt-2.5 py-4">
                    <span className="items-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99252c3baaf1d87f5e1a92d576728d802ff43523fe22171e3ff11563837d6907?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                        className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-neutral-500 text-xs leading-4 tracking-wide grow whitespace-nowrap">
                        22 April 2021
                      </div>
                    </span>
                    <span className="flex justify-between gap-1.5 items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7b6802ecede12732bd12558063378c3886e7ac4e199a3f7ad681a1ab993a0?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                        className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-neutral-500 text-xs leading-4 tracking-wide self-stretch grow whitespace-nowrap">
                        10 comments
                      </div>
                    </span>
                  </div>
                  <span className="items-stretch flex justify-between gap-2.5 mt-2.5 pr-5">
                    <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide grow shrink basis-auto">
                      Learn More
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/274091c6ac85bf1f72e74a3d5a597f70ba776ec44523eb7138e7bd4e347abb3b?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                      className="aspect-[0.56] object-contain object-center w-[9px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </span>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSection;
