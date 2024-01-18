export default function SinglePost() {
  return (
    <div className="justify-center items-stretch self-stretch bg-white flex flex-col pb-12">
      <header className="justify-center items-center bg-white flex w-full flex-col px-16 py-2 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1049px] flex-col items-center max-md:max-w-full">
          <span className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-neutral-500 text-center text-sm font-semibold leading-6 tracking-wide self-center whitespace-nowrap my-auto">
              Description
            </div>
            <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide my-auto">
              Additional Information
            </div>
            <span className="justify-between items-stretch flex gap-2 p-6 max-md:px-5">
              <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
                Reviews
              </div>
              <div className="text-teal-700 text-center text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
                (0)
              </div>
            </span>
          </span>
          <div className="bg-gray-200 self-stretch shrink-0 h-px max-md:max-w-full" />
        </div>
      </header>
      <div className="self-center w-full max-w-[1056px] mt-10 max-md:max-w-full max-md:mt-10">
        <form className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col pb-6 px-5 rounded-lg max-md:max-w-full max-md:mt-8">
              <h2 className="text-slate-800 text-2xl font-bold leading-8 tracking-normal max-md:max-w-full">
                the quick fox jumps over{" "}
              </h2>
              <p className="text-neutral-500 text-sm leading-5 tracking-wide mt-8 max-md:max-w-full">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <span className="text-neutral-500 text-sm leading-5 tracking-wide items-stretch justify-center mt-8 pl-6 max-md:max-w-full max-md:pl-5">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </span>
              <p className="text-neutral-500 text-sm leading-5 tracking-wide mt-8 max-md:max-w-full">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a78613c1d6784870a2e6581f2635201c8847db56011313c002a9036ac49b8d3a?apiKey=4b2ed2e70df748bbaca313761bff9232&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78613c1d6784870a2e6581f2635201c8847db56011313c002a9036ac49b8d3a?apiKey=4b2ed2e70df748bbaca313761bff9232&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78613c1d6784870a2e6581f2635201c8847db56011313c002a9036ac49b8d3a?apiKey=4b2ed2e70df748bbaca313761bff9232&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78613c1d6784870a2e6581f2635201c8847db56011313c002a9036ac49b8d3a?apiKey=4b2ed2e70df748bbaca313761bff9232&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78613c1d6784870a2e6581f2635201c8847db56011313c002a9036ac49b8d3a?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78613c1d6784870a2e6581f2635201c8847db56011313c002a9036ac49b8d3a?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78613c1d6784870a2e6581f2635201c8847db56011313c002a9036ac49b8d3a?apiKey=4b2ed2e70df748bbaca313761bff9232&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78613c1d6784870a2e6581f2635201c8847db56011313c002a9036ac49b8d3a?apiKey=4b2ed2e70df748bbaca313761bff9232&"
              className="aspect-[1.09] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
