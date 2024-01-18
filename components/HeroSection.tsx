import React from "react";

export default function CustomComponent() {
  return (
    <div className="justify-center items-center self-stretch bg-white flex flex-col px-16 pt-8 pb-8 max-md:px-5">
      <div className="w-full max-w-[1146px] mt-9 mb-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
            <div className="bg-white flex flex-col justify-center items-stretch">
              <header className="flex-col overflow-hidden relative flex min-h-[600px] w-full items-stretch pb-12">
                <img
                  loading="lazy"
                  src="/hero-card-img-1.jpg"
                  className="absolute h-full w-full object-cover object-center inset-0"
                  alt="Furniture"
                />
                <section className="relative justify-center flex w-full flex-col mb-80 pl-6 pr-20 py-6 items-start">
                  <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                    5 Items
                  </div>
                  <h1 className="text-slate-800 text-4xl font-bold leading-[50px] tracking-wide whitespace-nowrap mt-1.5">
                    FURNITURE
                  </h1>
                  <a
                    href="..."
                    className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5"
                  >
                    Read More
                  </a>
                </section>
              </header>
            </div>
          </div>

          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col">
              <header className="bg-white flex w-full flex-col justify-center items-stretch px-px max-md:max-w-full">
                <div className="flex-col overflow-hidden relative flex min-h-[300px] items-stretch pb-12 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="/hero-card-img-2.jpg"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <span className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start max-md:max-w-full max-md:mb-10 max-md:px-5">
                    <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                      5 Items
                    </div>
                    <h2 className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
                      FURNITURE
                    </h2>
                    <a
                      href="#"
                      className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5"
                    >
                      Read More
                    </a>
                  </span>
                </div>
              </header>
              <div className="w-full mt-4 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="bg-white flex grow flex-col justify-center items-stretch w-full max-md:mt-4">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.1066666666666667] w-full items-stretch pb-12">
                        <img
                          loading="lazy"
                          src="/hero-card-img-3.jpg"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <span className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start max-md:mb-10 max-md:px-5">
                          <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                            5 Items
                          </div>
                          <h2 className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
                            FURNITURE
                          </h2>
                          <a
                            href="#"
                            className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5"
                          >
                            Read More
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-white flex grow flex-col justify-center items-stretch w-full px-px max-md:mt-4">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.1033333333333333] items-stretch pb-12">
                        <img
                          loading="lazy"
                          src="/hero-card-img-4.jpg"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <span className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start max-md:mb-10 max-md:px-5">
                          <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                            5 Items
                          </div>
                          <h2 className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
                            FURNITURE
                          </h2>
                          <a
                            href="#"
                            className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5"
                          >
                            Read More
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
