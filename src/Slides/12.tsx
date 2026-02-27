import { useState } from "react";
import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

import foxconn from "../assets/manufactors/foxconn.png";
import Pegatron from "../assets/manufactors/pegatron.png";
import corning from "../assets/manufactors/corning.png";
import luxshare from "../assets/manufactors/luxshare.png";
import samsung from "../assets/manufactors/samsung.png";
import sony from "../assets/manufactors/sony.png";
import tsmc from "../assets/manufactors/tsmc.png";

type Slide12Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide12 = ({ onPrevious, onNext }: Slide12Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const suppliers = [
    {
      title: "Montagem",
      logos: [
        { src: foxconn, alt: "Foxconn" },
        { src: Pegatron, alt: "Pegatron" }
      ]
    },
    {
      title: "Processadores e semicondutores",
      logos: [{ src: tsmc, alt: "TSMC" }]
    },
    {
      title: "Baterias, memórias DRAM e NAND, e displays",
      logos: [{ src: samsung, alt: "Samsung" }]
    },
    {
      title: "Câmeras",
      logos: [{ src: sony, alt: "Sony" }]
    },
    {
      title: "Estrutura do aparelho e vidro",
      logos: [
        { src: corning, alt: "Corning" },
        { src: luxshare, alt: "Luxshare" }
      ]
    }
  ];

  const handlePreviousCard = () => {
    setActiveIndex((current) => (current === 0 ? suppliers.length - 1 : current - 1));
  };

  const handleNextCard = () => {
    setActiveIndex((current) => (current === suppliers.length - 1 ? 0 : current + 1));
  };

  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
      <Tema>Cadeia de fornecedores</Tema>
      <Carousel>
        <Track $activeIndex={activeIndex}>
          {suppliers.map((item, index) => (
            <Card key={`${item.title}-${index}`}>
              <h2>{item.title}</h2>
              <LogosWrapper>
                {item.logos.map((logo) => (
                  <Logo key={logo.alt} src={logo.src} alt={logo.alt} />
                ))}
              </LogosWrapper>
            </Card>
          ))}
        </Track>
      </Carousel>
      <Controls>
        <ControlButton type="button" onClick={handlePreviousCard} aria-label="Card anterior">
          Anterior
        </ControlButton>
        <ControlButton type="button" onClick={handleNextCard} aria-label="Próximo card">
          Próximo
        </ControlButton>
      </Controls>
    </Container>
  )
}

export default Slide12;


const Tema = styled.h1`
    position: absolute;
    left: 0;
    top: 0;
    font-size: 30px;
    font-weight: 400;
    margin: 16px;
  `;

const Carousel = styled.div`
  width: min(520px, 90vw);
  overflow: hidden;
`;

const Track = styled.div<{ $activeIndex: number }>`
  display: flex;
  align-items: stretch;
  transition: transform 280ms ease;
  transform: translateX(${({ $activeIndex }) => `-${$activeIndex * 100}%`});
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: min(520px, 90vw);
  min-height: 220px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 16px;
  border: 2px solid ${COLORS.black};

  h2 {
    font-size: 22px;
    font-weight: 500;
    color: ${COLORS.black};
    margin-bottom: 16px;
  }

`;

const LogosWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  gap: 20px;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  max-width: 125px;
  width: auto;
  height: auto;
  object-fit: contain;
`;

const Controls = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const ControlButton = styled.button`
  border: none;
  border-radius: 999px;
  background: ${COLORS.black};
  color: ${COLORS.white};
  padding: 10px 18px;
  font-size: 15px;

  &:hover {
    background: ${COLORS.blue};
    cursor: pointer;
  }
`;