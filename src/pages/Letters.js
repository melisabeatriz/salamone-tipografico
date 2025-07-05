import { useState } from "react";
import "./Letters.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import aMmChillar from "../img/as/A_mmChillar37.svg";
import picMmChillar from "../img/pic-01_mmChillar37.jpg";

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
];

const LetterModal = ({ closeModal, modalInfo }) => (
  <div className="letter-modal">
    <p>{modalInfo.place}</p>
    <span>{modalInfo.letterReference}</span>
    <button onClick={() => closeModal()}>x</button>
    <img src={modalInfo.originalPhoto} />
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
      <img src={letterSrc} width="400" alt={letterReference} />
    </div>
  );
};

const Letters = () => {
  const [modalInfo, setModalInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="letters-container">
      <NavBar show />
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
      {isModalVisible && (
        <LetterModal closeModal={closeModal} modalInfo={modalInfo} />
      )}
      <Footer />
    </div>
  );
};

export default Letters;
