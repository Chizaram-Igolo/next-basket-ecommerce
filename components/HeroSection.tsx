import React from "react";

export default function CustomComponent() {
  return (
    <div className="justify-center items-center self-stretch bg-white flex flex-col px-16 pt-8 pb-8 max-md:px-5">
      <div className="w-full max-w-[1146px] mt-9 mb-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3561a505ef06638b65165a9b50c376d64d39904b8ae57fead4ae78d9fdc61bf5?apiKey=4b2ed2e70df748bbaca313761bff9232&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3561a505ef06638b65165a9b50c376d64d39904b8ae57fead4ae78d9fdc61bf5?apiKey=4b2ed2e70df748bbaca313761bff9232&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3561a505ef06638b65165a9b50c376d64d39904b8ae57fead4ae78d9fdc61bf5?apiKey=4b2ed2e70df748bbaca313761bff9232&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3561a505ef06638b65165a9b50c376d64d39904b8ae57fead4ae78d9fdc61bf5?apiKey=4b2ed2e70df748bbaca313761bff9232&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3561a505ef06638b65165a9b50c376d64d39904b8ae57fead4ae78d9fdc61bf5?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3561a505ef06638b65165a9b50c376d64d39904b8ae57fead4ae78d9fdc61bf5?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3561a505ef06638b65165a9b50c376d64d39904b8ae57fead4ae78d9fdc61bf5?apiKey=4b2ed2e70df748bbaca313761bff9232&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3561a505ef06638b65165a9b50c376d64d39904b8ae57fead4ae78d9fdc61bf5?apiKey=4b2ed2e70df748bbaca313761bff9232&"
              className="aspect-[0.73] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-4"
            />
            {/* <a
              href="#"
              className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start max-md:mb-10 max-md:px-5 z-50"
            >
              <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                5 Items
              </div>
              <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
                FURNITURE
              </div>
              <div className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5">
                Read More
              </div>
            </a> */}
          </div>
          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-4">
              <div className="bg-white flex flex-col justify-center items-stretch max-md:max-w-full">
                <div className="flex-col overflow-hidden relative flex min-h-[300px] w-full items-stretch pb-12 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ebba2d9225b68eb4d41649a31df230730f84cc5a243da21f2fd627ecdb5b750?apiKey=4b2ed2e70df748bbaca313761bff9232&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ebba2d9225b68eb4d41649a31df230730f84cc5a243da21f2fd627ecdb5b750?apiKey=4b2ed2e70df748bbaca313761bff9232&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ebba2d9225b68eb4d41649a31df230730f84cc5a243da21f2fd627ecdb5b750?apiKey=4b2ed2e70df748bbaca313761bff9232&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ebba2d9225b68eb4d41649a31df230730f84cc5a243da21f2fd627ecdb5b750?apiKey=4b2ed2e70df748bbaca313761bff9232&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ebba2d9225b68eb4d41649a31df230730f84cc5a243da21f2fd627ecdb5b750?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ebba2d9225b68eb4d41649a31df230730f84cc5a243da21f2fd627ecdb5b750?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ebba2d9225b68eb4d41649a31df230730f84cc5a243da21f2fd627ecdb5b750?apiKey=4b2ed2e70df748bbaca313761bff9232&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ebba2d9225b68eb4d41649a31df230730f84cc5a243da21f2fd627ecdb5b750?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                    className="absolute h-full w-full object-cover object-center inset-0 z-0"
                  />
                  <a
                    href="#"
                    className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start max-md:mb-10 max-md:px-5 z-50"
                  >
                    <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                      5 Items
                    </div>
                    <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
                      FURNITURE
                    </div>
                    <div className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5">
                      Read More
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-4 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="bg-white flex grow flex-col justify-center items-stretch w-full max-md:mt-4">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.1066666666666667] w-full items-stretch pb-12">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32b2d212a3536318a58079241666fc53490fa8f2f861e9bff01218cd33160f9b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b2d212a3536318a58079241666fc53490fa8f2f861e9bff01218cd33160f9b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b2d212a3536318a58079241666fc53490fa8f2f861e9bff01218cd33160f9b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b2d212a3536318a58079241666fc53490fa8f2f861e9bff01218cd33160f9b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b2d212a3536318a58079241666fc53490fa8f2f861e9bff01218cd33160f9b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b2d212a3536318a58079241666fc53490fa8f2f861e9bff01218cd33160f9b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b2d212a3536318a58079241666fc53490fa8f2f861e9bff01218cd33160f9b?apiKey=4b2ed2e70df748bbaca313761bff9232&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b2d212a3536318a58079241666fc53490fa8f2f861e9bff01218cd33160f9b?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <a
                          href="#"
                          className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start max-md:mb-10 max-md:px-5"
                        >
                          <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                            5 Items
                          </div>
                          <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
                            FURNITURE
                          </div>
                          <div className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5">
                            Read More
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-white flex grow flex-col justify-center items-stretch w-full max-md:mt-4">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.1033333333333333] w-full items-stretch pb-12">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cdabbd9c0604062d54c422841c0d4bf0e4f7cf2d9099c19fe3da30973dd6b4bc?apiKey=4b2ed2e70df748bbaca313761bff9232&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdabbd9c0604062d54c422841c0d4bf0e4f7cf2d9099c19fe3da30973dd6b4bc?apiKey=4b2ed2e70df748bbaca313761bff9232&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdabbd9c0604062d54c422841c0d4bf0e4f7cf2d9099c19fe3da30973dd6b4bc?apiKey=4b2ed2e70df748bbaca313761bff9232&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdabbd9c0604062d54c422841c0d4bf0e4f7cf2d9099c19fe3da30973dd6b4bc?apiKey=4b2ed2e70df748bbaca313761bff9232&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdabbd9c0604062d54c422841c0d4bf0e4f7cf2d9099c19fe3da30973dd6b4bc?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdabbd9c0604062d54c422841c0d4bf0e4f7cf2d9099c19fe3da30973dd6b4bc?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdabbd9c0604062d54c422841c0d4bf0e4f7cf2d9099c19fe3da30973dd6b4bc?apiKey=4b2ed2e70df748bbaca313761bff9232&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdabbd9c0604062d54c422841c0d4bf0e4f7cf2d9099c19fe3da30973dd6b4bc?apiKey=4b2ed2e70df748bbaca313761bff9232&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <a
                          href="#"
                          className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start max-md:mb-10 max-md:px-5"
                        >
                          <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                            5 Items
                          </div>
                          <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
                            FURNITURE
                          </div>
                          <div className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5">
                            Read More
                          </div>
                        </a>
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
