import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Home.css";
import ScrollDown from "../components/ScrollDown";
import signature from "../img/salamone_firma_vector.svg";
import homeFooterPhoto from "../img/home_footer_img.jpeg";
import aMmChillar37 from "../img/as/A_mmChillar37.svg";
import aMmChillar37Photo from "../img/as/A_mmChillar37_photo.png";
import ammGuamini37 from "../img/as/A-mmGuamini37.svg";
import ammGuamini37Photo from "../img/as/A-mmGuamini37_photo.png";
import ammLaprida37 from "../img/as/A-mmLaprida37.svg";
import ammLaprida37Photo from "../img/as/A-mmLaprida37_photo.png";
import apmAlberti37 from "../img/as/A-pmAlberti37.svg";
import apmAlberti37Photo from "../img/as/A-pmAlberti37_photo.png";
import aPmGuamini38 from "../img/as/A-PmGuamini38.svg";
import aPmGuamini38Photo from "../img/as/A-PmGuamini38_photo.png";

const letters = [
  {
    imgSrc: aMmChillar37,
    description: "Matadero Municipal • Chillar • 1937",
    photo: aMmChillar37Photo,
  },
  {
    imgSrc: ammGuamini37,
    description: "Matadero Municipal • Guaminí • 1937",
    photo: ammGuamini37Photo,
  },
  {
    imgSrc: ammLaprida37,
    description: "Matadero Municipal • Laprida • 1937",
    photo: ammLaprida37Photo,
  },
  {
    imgSrc: apmAlberti37,
    description: "Plaza • Alberti • 1937",
    photo: apmAlberti37Photo,
  },
  {
    imgSrc: aPmGuamini38,
    description: "Palacio Municipal • Guaminí • 1938",
    photo: aPmGuamini38Photo,
  },
];

const HomeLetter = ({ imgSrc, description, photo }) => (
  <div className="a-container">
    <img className="home-letter" src={imgSrc} height="500px" alt="" />
    <img className="letter-reference-photo" width="200px" src={photo} alt="" />
    <p>{description}</p>
  </div>
);

const Home = () => {
  const [y, setY] = useState(window.scrollY);
  const [showNavbar, setShowNavbar] = useState(true);
  const windowHeight = window.innerHeight;

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (window.scrollY > y) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  const findPhotoPosition = () => {
    if (y < windowHeight) return 0;
    return -(y - windowHeight);
  };
  return (
    <div className="home">
      <NavBar show={showNavbar} />
      <div className="home-welcome-screen">
        <img src={signature} width="1200px" alt="salamone" />
        <div className="title-container">
          <div className="title">
            <h1>Proyecto de investigación</h1>
            <p className="title-first-line">
              Cartografía formal de la letra en torno a la obra de
              <b> Francisco Salamone</b>
            </p>
            <p> durante la década de 1930 en la provincia de Buenos Aires.</p>
            <p>
              <i>Un acercamiento a los contextos del patrimonio cultural.</i>
            </p>
            <p>Universidad Nacional de Lanús, Buenos Aires, Argentina.</p>
            <ScrollDown />
          </div>
        </div>
      </div>
      <div
        className="home-a-catalogue-container"
        style={{
          overflow: y < windowHeight || y > 3000 ? "hidden" : "visible",
          opacity: y < 3000 ? 100 : 0,
        }}
      >
        <div
          className="home-a-catalogue"
          style={{ transform: `translateX(${findPhotoPosition()}px)` }}
        >
          {letters.map((letter, i) => (
            <HomeLetter
              imgSrc={letter.imgSrc}
              description={letter.description}
              photo={letter.photo}
              key={i}
            />
          ))}
          <a href="/cartografia">ver cartografía letras completa</a>
        </div>
        <p>dadasda</p>
      </div>
      <div className="home-closing-section-container">
        <div className="home-closing-section">
          <ul>
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
          <img src={homeFooterPhoto} alt="" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
