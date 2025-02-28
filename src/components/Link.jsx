import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Link({ page, selectedPage, setSelectedPage }) {
  const lowerCasePage = page.toLowerCase();

  // update URL addresss
  const handleClick = () => {
    window.history.pushState(null, "", `#${lowerCasePage}`);
    setSelectedPage(lowerCasePage);
  };
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-aqua" : ""
      } hover:text-aqua transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
  );
}
