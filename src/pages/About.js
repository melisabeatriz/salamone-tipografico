import { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import { ScrollContext } from "../App";
import Footer from "../components/Footer";
import aMmChillar from "../img/A_mmChillar37.svg";
import picMmChillar from "../img/pic-01_mmChillar37.jpg";
import picPmGonzalesChaves from "../img/pic-01_PmGonzalesChaves39.jpg";

import "./About.css";

const members = [
  { memberName: "Diana Corvalán", memberTitle: "Directora" },
  { memberName: "Marcelo N. Weissel", memberTitle: "Codirector" },
  { memberName: "Aritz Recalde", memberTitle: "Docente Investigador" },
  { memberName: "Natalia Acosta", memberTitle: "Docente Investigadora" },
  { memberName: "M. Fernanda Aleixo", memberTitle: "Docente Investigadora" },
  {
    memberName: "Andrea Soledad Baffigi",
    memberTitle: "Docente Investigadora",
  },
  { memberName: "Sheila Covas", memberTitle: "Docente Investigadora" },
  { memberName: "Melisa Cerda", memberTitle: "Docente Investigadora" },
  {
    memberName: "Sonia Mabel Bizzotto",
    memberTitle: "Investigadora no docente",
  },
  { memberName: "Estefanía Pietras", memberTitle: "Investigadora graduada" },
  {
    memberName: "Franco Maximiliano Rolón",
    memberTitle: "Adscripto estudiante",
  },
];

const ScrollDown = () => <div className="scroll-down"></div>;

const Member = ({ name, title }) => (
  <div className="member">
    <p className="member-name">{name}</p>
    <p className="member-title">{title}</p>
  </div>
);

const About = () => {
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  const findPhotoOpacity = () => {
    if (y < 200) return 100;
    return 100 - (y - 200) / 5;
  };

  const findLetterPosition = () => {
    if (y < 800) return -100;
    return -100 - (y - 800) * 2;
  };

  const findLinkOpacity = () => {
    if (y < 800) return 0;
    if (y < 900) return y - 800;
    return 100;
  };

  const findPhotoPosition = () => {
    if (y < 1750) return -100;
    if (y > 2180) return -312.25;
    return -100 - (y - 1750) / 2;
  };

  return (
    <>
      <NavBar y={y} />
      <div className="about-page">
        <div className="about-description">
          <div
            className="about-description-photo-container"
            style={{ opacity: `${findPhotoOpacity()}%` }}
          >
            <img
              className="about-description-photo"
              src={picMmChillar}
              alt="Matadero Municipal de Chillar, obra construida por Salamone"
              width="700px"
            />
            <p>Matadero Municipal Chillar - 1937</p>
            <span>Foto: Luis Savio (gentileza)</span>
            <ScrollDown />
          </div>
          <div className="about-description-paragraph-container">
            <p className="about-description-paragraph">
              <span>
                La letra para Salamone representa una declaración de principios.
                La llanura y su horizonte continuo, donde el cielo y la tierra
                se unen, le ofreció una línea base donde escribir con letras
                modernas, innovadoras, que cumplen a la perfección su función:
              </span>
              <b> transmitir ideas.</b>
            </p>
            <p>
              <a
                href="https://www.instagram.com/salamone.tipografico"
                target="_blank"
                rel="noreferrer"
                style={{ opacity: `${findLinkOpacity()}%` }}
              >
                @salamone.tipografico
              </a>
            </p>
          </div>
          <img
            className="about-description-letter"
            style={{ right: `${findLetterPosition()}px` }}
            src={aMmChillar}
            alt="A encontrada en el Matadero Municipal de Chillar, construido en 1937"
            width="600px"
          />
          <span className="about-description-heading about-tooltip">
            Matadero Municipal Chillar - 1937
          </span>
        </div>
        <div className="about-photos">
          <div className="about-content-image-container">
            <img
              className="about-content-image"
              src={picPmGonzalesChaves}
              alt="Palacio Municipal Gonzales Chaves"
              style={{ transform: `translateX(${findPhotoPosition()}px)` }}
            />
            <span className="about-photos-heading about-tooltip">
              Municipalidad Gonzales Chaves - 1939 <br /> Foto: Luis Savio
            </span>
          </div>
        </div>
        <div className="about-content-container">
          <div className="about-content">
            <h2>proyecto de investigación</h2>
            <div className="about-unla">
              <p>LAD Laboratorio de Diseño</p>
              <p>Departamento de Humanidades y Artes</p>
              <p>Universidad Nacional de Lanús</p>
            </div>
            <p className="about-content-paragraph">
              El aspecto menos estudiado de la obra del arquitecto e ingeniero
              Francisco Salamone es el universo formal de las letras, no solo en
              sus monumentales fachadas, sino también en sus firmas y en sus
              planos y dibujos técnicos. <br /> Para estudiar este universo
              formal tipográfico, tan disruptivo como prolífico, es necesario
              analizar la morfología y la materialidad, su preservación y sus
              posibles aplicaciones. La letra para Salamone representa una
              declaración de principios. En las obras más icónicas del período
              utiliza la geometría como lenguaje formal, así como hicieron las
              vanguardias europeas.
              <br /> Este proyecto incluye evaluar la situación de la obra en el
              uso social contemporáneo, estudiar la conservación arquitectónica
              patrimonial, generar espacio de colaboración, debate y guarda de
              datos y colecciones.
              <br /> También brindar una mirada especializada sobre la
              morfología de la letra. Una parte del equipo de investigación está
              formado por docentes expertos en tipografía, que pueden aportar
              una nueva categoría de análisis en el conocimiento y difusión de
              la obra de Salamone.
              <br /> Para su estudio nos proponemos realizar una cartografía
              aplicando el método warburgiano y así encontrar anacronismos,
              pervivencias e incluir la letra de Salamone en paneles
              tipográficos que, como un <i>Atlas Mnemosyne</i> de las pampas,
              conecte las formas de las letras trascendiendo su tiempo y
              materialidad.
              <br /> Las letras de Francisco Salamone, despiertan la curiosidad,
              son tomadas como símbolo de identidad y se usan en distintas
              piezas gráficas relacionadas directa o indirectamente con las
              locaciones donde se emplazan sus obras. <br />
              Es uno de los objetivos que los resultados de la investigación
              provean nuevos recursos para su apreciación. Así como también
              brindar una formación básica en criterios de uso tipográfico para
              quienes estén interesados en utilizar la morfología de la letra
              salamónica.
              <br /> En una etapa posterior de carácter proyectual, se planteará
              el diseño de una serie de fuentes tipográficas, de acceso libre,
              también las pautas de dibujo para letras rotuladas y la guía
              caligráfica para las letras trazadas.
            </p>
            <h3>Algunas de las actividades propuestas</h3>
            <ul>
              <li>
                Encuentros de investigación e intercambio en el LAD |
                laboratorio de diseño
              </li>
              <li>
                Artículos y ponencias en jornadas académicas nacionales e
                internacionales.
              </li>
              <li>
                Dictado de taller de escritura caligráfica basados en los
                modelos Salamónicos.
              </li>
              <li>
                Producción de publicación digital compilando los resultados de
                la investigación a disposición de la comunidad académica y de
                los museos, centros de interpretación, intendencias municipales
                y público en general.
              </li>
              <li>
                Clases especiales en materias afines a la temática tipográfica,
                turismo y patrimonio.
              </li>
            </ul>
            {/* <button onClick={() => console.log(y)}>ddsfds</button> */}
            <h3>Equipo de investigación</h3>
            <p>
              integrado por docentes, estudiantes y graduados de la Lic. en
              Diseño y Comunicación visual
            </p>
            {members.map((member, i) => (
              <Member
                key={i}
                name={member.memberName}
                title={member.memberTitle}
              />
            ))}
            <h3>Colaborador externo</h3>
            <div className="member">
              <p className="member-name">Luis Savio</p>
              <a
                href="https://www.instagram.com/salamone_planet"
                target="_blank"
                rel="noreferrer"
              >
                @salamone_planet
              </a>
            </div>

            <p className="closing-info">
              Inicio en marzo de 2025 • plazo de finalización marzo 2027
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
