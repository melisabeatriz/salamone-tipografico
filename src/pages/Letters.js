import "./Letters.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import aMmChillar from "../img/as/A_mmChillar37.svg";
import picMmChillar from "../img/pic-01_mmChillar37.jpg";

const lettersMapping = [
  {
    letterSrc: aMmChillar,
    letterReference: "Matadero Municipal Chillar • 1937",
    originalPhoto: picMmChillar,
    category: "individualLetterA",
  },
];

const Letter = ({ letterSrc, letterReference, originalPhoto }) => (
  <div className="mapping-letter">
    <img src={letterSrc} width="400" alt={letterReference} />
    <span>{letterReference}</span>
    <img src={originalPhoto} />
  </div>
);

const Letters = () => (
  <div className="letters-container">
    <NavBar show />
    {lettersMapping.map((letter, i) => (
      <Letter
        key={i}
        letterSrc={letter.letterSrc}
        letterReference={letter.letterReference}
        originalPhoto={letter.originalPhoto}
      />
    ))}
    <Footer />
  </div>
);

export default Letters;
