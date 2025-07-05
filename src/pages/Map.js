import "./Map.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Map = () => (
  <>
    <div className="map-container">
      <NavBar show />
      <iframe
        title="Mapa de obras de Salamone realizadas durante la década de 1930 en la provincia de Buenos Aires"
        src="https://www.google.com/maps/d/embed?mid=1lLlue7EAPHHLwfROzfTBCFDifOLRsdA&ehbc=2E312F"
        width="1000"
        height="700"
      />
      <Footer />
    </div>
  </>
);

export default Map;
