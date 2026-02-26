import { useState } from "react";
import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

import imgGlass from "../assets/glass.jpg";

import img2012 from "../assets/timeline/2012.png";
import img2014 from "../assets/timeline/2014.png";
import img2015 from "../assets/timeline/2015.png";
import img2016 from "../assets/timeline/2016.png";
import img2018 from "../assets/timeline/2018.png";
import img2019 from "../assets/timeline/2019.png";
import img2020 from "../assets/timeline/2020.png";
import img2021 from "../assets/timeline/2021.png";
import img2022 from "../assets/timeline/2022.png";
import img2023 from "../assets/timeline/2023.png";
import img2024 from "../assets/timeline/2024.png";

type Slide5Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const timelineItems = [
  { year: "2012", image: img2012, hoverText: "2012 — Guerra de patentes com Samsung" },
  { year: "2014", image: img2014, hoverText: "2014 — Lançamento do Apple Pay" },
  { year: "2015", image: img2015, hoverText: "2015 — Lançamento do Apple Watch" },
  { year: "2016", image: img2016, hoverText: "2016 — Fim da entrada P2 + AirPods" },
  { year: "2018", image: img2018, hoverText: "2018 — 1 empresa a atingir US$ 1 trilhão" },
  { year: "2019", image: img2019, hoverText: "2019 — Lançamento do Apple TV + foco em serviços" },
  { year: "2020", image: img2020, hoverText: "2020 — Pandemia + chip M1" },
  { year: "2021", image: img2021, hoverText: "2021 — Política forte de privacidade (ATT)" },
  { year: "2022", image: img2022, hoverText: "2022 — Crise da produção na China" },
  { year: "2023", image: img2023, hoverText: "2023 — Lançamento do Apple Vision Pro" },
  { year: "2024", image: img2024, hoverText: "2024 — Entrada forte em IA generativa" },
];

const Slide5 = ({ onPrevious, onNext }: Slide5Props) => {
  const [hoverText, setHoverText] = useState<string | null>(null);

  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Title>TIMELINE 2012 - 2024</Title>
        <Line>
          {timelineItems.map((item) => (
            <li
              key={item.year}
              onMouseEnter={() => setHoverText(item.hoverText)}
              onMouseLeave={() => setHoverText(null)}
            >
              <Img><img src={item.image} alt={item.year} /></Img>
              <Year>{item.year}</Year>
            </li>
          ))}
        </Line>

        {hoverText && <Hover>{hoverText}</Hover>}
    </Container>
  )
}

export default Slide5;


const Title = styled.h1`
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 16px;
`;

const Line = styled.ul`
  width: 95%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 8px;

    background-image: url(${imgGlass});
    background-size: cover;
    background-position: center;
    padding: 8px;
    border-radius: 8px;

    li {
      position: relative;
      z-index: 1;
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      padding: 16px 8px;
      border-radius: 8px;

      &:hover {
        background: ${COLORS.black};
        color: ${COLORS.white};
      }
    }
`;

const Img = styled.span`
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
`;

const Year = styled.p`
    font-size: 18px;
    margin-top: 8px;
`;

const Hover = styled.div`
    position: absolute;
    bottom: 0;
    margin: 16px;
    padding: 8px 32px;
    border-radius: 32px;
    font-size: 18px;
    color: ${COLORS.white};
    background: ${COLORS.black};
`;