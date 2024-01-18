// import { IProduct } from "@/app/types";
// import Feature from "./Feature";

// const features = [
//   {
//     id: 1,
//     heading: "Easy Wins",
//     text: "Get your best looking smile now!",
//     image: "/bx_bxs-book-reader.svg",
//   },
//   {
//     id: 2,
//     heading: "Concrete",
//     text: "Defalcate is most focused in helping you discover your most beautiful smile",
//     image: "/carbon_book.svg",
//   },
//   {
//     id: 3,
//     heading: "Hack Growth",
//     text: "Overcame any hurdle or any other problem.",
//     image: "/uil_arrow-growth.svg",
//   },
// ];

// export default function FeatureSection() {
//   return (
//     <div className="desktop-features">
//       <div className="container-3">
//         <div className="main-content-wrapper">
//           <div className="main-content">
//             <div className="section-title">Featured Products</div>
//             <div className="h-section-title">THE BEST SERVICES</div>
//             <p className="paragraph">
//               Problems trying to resolve the conflict between
//             </p>
//           </div>
//         </div>
//         <div className="row-3">
//           {features.map((f) => (
//             <Feature
//               heading={f.heading}
//               text={f.text}
//               image={f.image}
//               key={f.id}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function FeatureSection() {
  return (
    <div className="justify-center items-center bg-white flex flex-col pb-4 px-16 max-md:px-5">
      <header className="items-center flex w-full max-w-[1050px] flex-col py-12 max-md:max-w-full">
        <div className="items-center flex w-[691px] max-w-full flex-col justify-center mt-8 px-16 max-md:px-5">
          <span className="flex flex-col items-stretch">
            <div className="text-neutral-500 text-center text-xl leading-8 tracking-wide self-center whitespace-nowrap">
              Featured Products
            </div>
            <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-center whitespace-nowrap mt-2.5">
              THE BEST SERVICES
            </div>
            <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide whitespace-nowrap mt-2.5">
              Problems trying to resolve the conflict between{" "}
            </div>
          </span>
        </div>
        <form className="justify-center self-stretch mt-20 mb-8 px-1.5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <span className="items-center flex flex-col px-10 py-9 max-md:mt-10 max-md:px-5">
                <a
                  href="#"
                  className="aspect-square object-contain object-center w-[72px] justify-center items-center overflow-hidden max-w-full"
                >
                  <img
                    loading="lazy"
                    src="/bx_bxs-book-reader.svg"
                    alt="Featured Product 1"
                  />
                </a>
                <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-stretch whitespace-nowrap mt-5">
                  Easy Wins
                </div>
                <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide self-stretch mt-5">
                  Get your best looking smile now!
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-center flex grow flex-col px-10 py-9 max-md:mt-10 max-md:px-5">
                <a
                  href="#"
                  className="aspect-square object-contain object-center w-[72px] justify-center items-center overflow-hidden max-w-full"
                >
                  <img
                    loading="lazy"
                    src="/carbon_book.svg"
                    alt="Featured Product 2"
                  />
                </a>
                <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-stretch whitespace-nowrap mt-5">
                  Concrete
                </div>
                <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide self-stretch mt-5">
                  Defalcate is most focused in helping you discover your most
                  beautiful smile
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-center flex flex-col px-10 py-9 max-md:mt-10 max-md:px-5">
                <a
                  href="#"
                  className="aspect-square object-contain object-center w-[72px] justify-center items-center overflow-hidden max-w-full"
                >
                  <img
                    loading="lazy"
                    src="/uil_arrow-growth.svg"
                    alt="Featured Product 3"
                  />
                </a>
                <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-stretch whitespace-nowrap mt-5">
                  Hack Growth
                </div>
                <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide self-stretch mt-5">
                  Overcame any hurdle or any other problem.
                </div>
              </span>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}
