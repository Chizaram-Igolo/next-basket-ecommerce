export default function BannerBar() {
  return (
    <header className="justify-center items-stretch bg-teal-700 flex flex-col pt-2.5">
      <span className="justify-between items-center flex w-full gap-5 px-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="items-stretch self-stretch flex justify-between gap-2.5 py-px">
          <a
            href="tel:(225) 555-0118"
            className="items-center shadow-sm flex justify-between gap-1.5 p-2.5 rounded-md"
            aria-label="Phone Number"
            role="link"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d6b81201b162fed63ccdeed112c1878a69cc1a4c783eb37204f62d98c0d8515?apiKey=4b2ed2e70df748bbaca313761bff9232&"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
              alt="Phone Icon"
            />
            <div className="text-white text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
              (225) 555-0118
            </div>
          </a>
          <a
            href="mailto:michelle.rivera@example.com"
            className="items-center flex justify-between gap-1.5 p-2.5 rounded-md"
            aria-label="Email Address"
            role="link"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f962c81d22cdf4fad746c4e87c87601f68a55ea1de7b165fe713a4d5103e90b7?apiKey=4b2ed2e70df748bbaca313761bff9232&"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
              alt="Email Icon"
            />
            <div className="text-white text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
              michelle.rivera@example.com
            </div>
          </a>
        </div>
        <div className="text-white text-sm font-bold leading-6 tracking-wide grow shrink basis-auto my-auto">
          Follow Us and get a chance to win 80% off
        </div>
        <div className="self-stretch flex justify-between gap-2.5 p-2.5 items-start">
          <div className="text-white text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
            Follow Us :
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2992767a87761d743fb122ddcfaa122875ae2399b2d752159c448dad3f3713b?apiKey=4b2ed2e70df748bbaca313761bff9232&"
            className="aspect-[4.62] object-contain object-center w-[120px] justify-center items-start overflow-hidden self-stretch shrink-0 max-w-full"
            alt="Follow Us Image"
          />
        </div>
      </span>
    </header>
  );
}
