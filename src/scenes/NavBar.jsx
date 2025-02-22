import Link from "../components/Link";

export default function Navbar({ selectedPage, setSelectedPage, isTopOfPage }) {
  const navBackground = isTopOfPage ? "bg-blue" : "bg-deep-blue";
  return (
    <nav
      className={`${navBackground} w-full fixed top-0 p-2 sm:px-0 sm:py-6 z-40`}
    >
      <div className="flex items-center justify-between mx-auto w-11/12 sm:w-5/6">
        <div className="text-lg sm:text-3xl font-opensans font-bold">GŁ</div>
        <div className="flex gap-4 sm:gap-16 font-poppins font-semibold text-sm sm:text-base">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </nav>
  );
}
