import "./NavBar.css";
import homeIcon from "../img/home-icon.svg";

const navigationItems = [
  { url: "/about", description: "acerca del proyecto" },
  { url: "/cartografia", description: "cartografía letras" },
  { url: "/mapa", description: "mapa" },
  { url: "/", description: "inicio" },
];

const NavBarItem = ({ url, description }) => {
  const currentItem = window.location.pathname;
  const isCurrentItem = currentItem === url;
  return (
    <li>
      <a
        style={{
          fontWeight: isCurrentItem ? 900 : 500,
          ...(isCurrentItem && { pointerEvents: "none" }),
          ...(isCurrentItem && { borderBottom: "transparent 1.5px solid" }),
        }}
        href={url}
      >
        {description}
      </a>
    </li>
  );
};

const NavBar = ({ show }) => {
  return (
    <nav style={{ opacity: show ? "100%" : "0" }}>
      <a href="/">
        <img src={homeIcon} width="50px" alt="Inicio" />
      </a>
      <ul>
        {navigationItems.map((item, i) => (
          <NavBarItem key={i} url={item.url} description={item.description} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
