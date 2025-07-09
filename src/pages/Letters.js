import { useState } from "react";
import "./Letters.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import aMmChillar from "../img/as/A_mmChillar37.svg";
import picMmChillar from "../img/pic-01_mmChillar37.jpg";
import ammGuamini37 from "../img/as/A-mmGuamini37.svg";
import ammLaprida37 from "../img/as/A-mmLaprida37.svg";
import apmAlberti37 from "../img/as/A-pmAlberti37.svg";

const lettersMapping = [
  {
    letterSrc: aMmChillar,
    letterReference: "Matadero Municipal",
    place: "Chillar",
    year: 1937,
    originalPhoto: picMmChillar,
    isInvidualLetter: true,
    isDrawnLetter: false,
    category: "A",
    description: "Realizada en hormigón",
  },
  {
    letterSrc: ammGuamini37,
    letterReference: "Matadero Municipal",
    place: "Chillar",
    year: 1937,
    originalPhoto: picMmChillar,
    isInvidualLetter: true,
    isDrawnLetter: false,
    category: "A",
    description: "Realizada en hormigón",
  },
  {
    letterSrc: ammLaprida37,
    letterReference: "Matadero Municipal",
    place: "Chillar",
    year: 1937,
    originalPhoto: picMmChillar,
    isInvidualLetter: true,
    isDrawnLetter: false,
    category: "A",
    description: "Realizada en hormigón",
  },
  {
    letterSrc: apmAlberti37,
    letterReference: "Matadero Municipal",
    place: "Chillar",
    year: 1937,
    originalPhoto: picMmChillar,
    isInvidualLetter: true,
    isDrawnLetter: false,
    category: "A",
    description: "Realizada en hormigón",
  },
];

const LetterModal = ({ closeModal, modalInfo }) => (
  <div className="layover">
    <div className="letter-modal">
      <button onClick={() => closeModal()}>x</button>
      <p>
        <b>{`${modalInfo.letterReference} • ${modalInfo.place}`}</b>
      </p>
      <p>{modalInfo.year}</p>
      <span>{modalInfo.description}</span>
      <img width="600" src={modalInfo.originalPhoto} />
    </div>
  </div>
);

const Letter = ({
  letterSrc,
  info,
  setModalInfo,
  letterReference,
  showModal,
}) => {
  return (
    <div
      className="mapping-letter"
      onClick={() => {
        setModalInfo(info);
        showModal();
      }}
    >
      <img src={letterSrc} alt={letterReference} />
    </div>
  );
};

const Letters = () => {
  const [modalInfo, setModalInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="mapping-page">
      <NavBar show />
      <div className="letters-container">
        {lettersMapping.map((letter, i) => (
          <Letter
            key={i}
            letterSrc={letter.letterSrc}
            letterReference={letter.letterReference}
            originalPhoto={letter.originalPhoto}
            info={letter}
            setModalInfo={setModalInfo}
            showModal={showModal}
          />
        ))}
      </div>
      {isModalVisible && (
        <LetterModal closeModal={closeModal} modalInfo={modalInfo} />
      )}
      <Footer />
    </div>
  );
};

export default Letters;
