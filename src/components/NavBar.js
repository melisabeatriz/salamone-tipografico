import "./NavBar.css";
import homeIcon from "../img/home-icon.svg";

const NavBar = ({ y }) => {
  const findOpacity = () => {
    if (y < 100) return 100;
    return 200 - y;
  };
  return (
    <div>
      <nav>
        <a href="/">
          <img src={homeIcon} width="50px" alt="Inicio" />
        </a>
        <ul style={{ opacity: `${findOpacity()}%` }}>
          <li>
            <a href="/about">acerca del proyecto</a>
          </li>
          <li>
            <a href="/cartografia">cartografía letras</a>
          </li>
          <li>
            <a href="/mapa">mapa</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
