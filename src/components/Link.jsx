import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Link({ page, selectedPage, setSelectedPage }) {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-aqua" : ""
      } hover:text-aqua transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}
