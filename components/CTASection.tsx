export default function CTASection() {
  return (
    <form className="flex-col overflow-hidden relative flex min-h-[640px] w-full items-center px-20 py-12 max-md:max-w-full max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/88d9b2e98869b6064b89f65841b206eeba1d41ffa763effd6b3ac93d978f89f9?apiKey=4b2ed2e70df748bbaca313761bff9232&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/88d9b2e98869b6064b89f65841b206eeba1d41ffa763effd6b3ac93d978f89f9?apiKey=4b2ed2e70df748bbaca313761bff9232&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88d9b2e98869b6064b89f65841b206eeba1d41ffa763effd6b3ac93d978f89f9?apiKey=4b2ed2e70df748bbaca313761bff9232&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/88d9b2e98869b6064b89f65841b206eeba1d41ffa763effd6b3ac93d978f89f9?apiKey=4b2ed2e70df748bbaca313761bff9232&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/88d9b2e98869b6064b89f65841b206eeba1d41ffa763effd6b3ac93d978f89f9?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88d9b2e98869b6064b89f65841b206eeba1d41ffa763effd6b3ac93d978f89f9?apiKey=4b2ed2e70df748bbaca313761bff9232&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/88d9b2e98869b6064b89f65841b206eeba1d41ffa763effd6b3ac93d978f89f9?apiKey=4b2ed2e70df748bbaca313761bff9232&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/88d9b2e98869b6064b89f65841b206eeba1d41ffa763effd6b3ac93d978f89f9?apiKey=4b2ed2e70df748bbaca313761bff9232&"
        className="absolute h-full w-full object-cover object-center inset-0"
        alt="Image"
      />
      <header className="relative text-sky-500 text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap mt-28 max-md:mt-10">
        Designing Better Experience
      </header>
      <h1 className="relative text-slate-800 text-center text-4xl font-bold leading-[50px] tracking-wide max-w-[571px] mt-8 max-md:max-w-full">
        Problems trying to resolve <br /> the conflict between{" "}
      </h1>
      <div className="relative text-neutral-500 text-center text-sm leading-5 tracking-wide max-w-[447px] mt-8 max-md:max-w-full">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:{" "}
      </div>
      <h2 className="relative text-teal-700 text-center text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-8">
        $16.48
      </h2>
      <a
        href="#"
        className="relative text-white text-center text-sm font-bold leading-5 tracking-wide whitespace-nowrap items-stretch bg-sky-500 justify-center mt-8 mb-10 px-10 py-4 rounded-md max-md:px-5"
      >
        ADD YOUR CALL TO ACTION
      </a>
    </form>
  );
}
