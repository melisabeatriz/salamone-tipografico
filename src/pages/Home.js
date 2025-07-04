import "./Home.css";
import signature from "../img/salamone_firma.png";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <img src={signature} width="900px" alt="salamone" />
        <h1>proyecto de investigación</h1>
        <p>
          Cartografía formal de la letra en torno a la obra de
          <b>Francisco Salamone</b> durante la década de 1930 en la provincia de
          Buenos Aires.
        </p>
        <p className="italic">
          Un acercamiento a los contextos del patrimonio cultural.
        </p>
        <p>Universidad Nacional de Lanús, Buenos Aires, Argentina</p>
      </div>
    </div>
  );
};

export default Home;
