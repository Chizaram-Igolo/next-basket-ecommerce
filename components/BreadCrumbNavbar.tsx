export default function BreadCrumbNavbar() {
  return (
    <header className="bg-neutral-50 flex flex-col justify-center px-16 py-6 items-start max-md:px-5">
      <nav
        aria-label="Main Navigation"
        className="items-center flex gap-4 ml-36 py-2.5 max-md:ml-2.5"
      >
        <a
          href="/"
          className="text-slate-800 text-center text-sm font-bold leading-6 tracking-wide self-stretch"
        >
          {" "}
          Home{" "}
        </a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5422296368b8cfcdb259bae1492107f340518b5a7c8f7a1faea106acf39dcf4d?apiKey=4b2ed2e70df748bbaca313761bff9232&"
          className="aspect-[0.56] object-contain object-center w-[9px] overflow-hidden shrink-0 max-w-full my-auto"
          alt="Logo"
        />
        <a
          href="/shop"
          className="text-stone-300 text-center text-sm font-bold leading-6 tracking-wide self-stretch"
        >
          {" "}
          Shop{" "}
        </a>
      </nav>
    </header>
  );
}
