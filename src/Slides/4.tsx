import { useState } from "react";
import styled from "styled-components";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import Container from "../Components/Container"

import { COLORS } from "../style";

import img1976 from "../assets/timeline/1976.png";
import img1980 from "../assets/timeline/1980.png";
import img1984 from "../assets/timeline/1984.png";
import img1985 from "../assets/timeline/1985.png";
import img1997 from "../assets/timeline/1997.png";
import img1998 from "../assets/timeline/1998.png";
import img2001 from "../assets/timeline/2001.png";
import img2003 from "../assets/timeline/2003.png";
import img2007 from "../assets/timeline/2007.png";
import img2008 from "../assets/timeline/2008.png";
import img2010 from "../assets/timeline/2010.png";
import img2011 from "../assets/timeline/2011.png";
import img2014 from "../assets/timeline/2014.png";
import img2015 from "../assets/timeline/2015.png";
import img2018 from "../assets/timeline/2018.png";
import img2020 from "../assets/timeline/2020.png";
import img2022 from "../assets/timeline/2022.png";
import img2023 from "../assets/timeline/2023.png";
import img2024 from "../assets/timeline/2024.png";

type Slide4Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const timelineItems = [
  { year: "1976", image: img1976, hoverText: "1976 — Fundação da Apple" },
  { year: "1980", image: img1980, hoverText: "1980 — IPO da Apple" },
  { year: "1984", image: img1984, hoverText: "1984 — Lançamento do Macintosh" },
  { year: "1985", image: img1985, hoverText: "1985 — Steve Jobs é demitido" },
  { year: "1997", image: img1997, hoverText: "1997 — Steve Jobs retorna" },
  { year: "1998", image: img1998, hoverText: "1998 — Lançamento do iMac" },
  { year: "2001", image: img2001, hoverText: "2001 — Lançamento do iPod" },
  { year: "2003", image: img2003, hoverText: "2003 — Criação da iTunes Store" },
  { year: "2007", image: img2007, hoverText: "2007 — Lançamento do iPhone" },
  { year: "2008", image: img2008, hoverText: "2008 — Criação da App Store" },
  { year: "2010", image: img2010, hoverText: "2010 — Lançamento do iPad" },
  { year: "2011", image: img2011, hoverText: "2011 — Morte de Steve Jobs" },
  { year: "2014", image: img2014, hoverText: "2014 — Lançamento do Apple Pay" },
  { year: "2015", image: img2015, hoverText: "2015 — Lançamento do Apple Watch" },
  { year: "2018", image: img2018, hoverText: "2018 — 1 empresa a atingir US$ 1 trilhão" },
  { year: "2020", image: img2020, hoverText: "2020 — Pandemia + chip M1" },
  { year: "2022", image: img2022, hoverText: "2022 — Crise da produção na China" },
  { year: "2023", image: img2023, hoverText: "2023 — Lançamento do Apple Vision Pro" },
  { year: "2024", image: img2024, hoverText: "2024 — Entrada forte em IA generativa" },
];

const Slide4 = ({ onPrevious, onNext }: Slide4Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = timelineItems[activeIndex];

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? timelineItems.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === timelineItems.length - 1 ? 0 : current + 1));
  };

  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
      <Title>TIMELINE</Title>

      <Carousel>
        <Control type="button" aria-label="Imagem anterior" onClick={handlePrevious}>
          <CaretLeftFill />
        </Control>

        <Card>
          <Img>
            <img src={activeItem.image} alt={activeItem.year} />
          </Img>
          <Year>{activeItem.year}</Year>
        </Card>

        <Control type="button" aria-label="Próxima imagem" onClick={handleNext}>
          <CaretRightFill />
        </Control>
      </Carousel>

      <Hover>{activeItem.hoverText}</Hover>

      <Years>
        {timelineItems.map((item, index) => (
          <YearButton
            key={item.year}
            type="button"
            $active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            {item.year}
          </YearButton>
        ))}
      </Years>
    </Container>
  )
}

export default Slide4;


const Title = styled.h1`
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const Carousel = styled.div`
  width: min(92vw, 880px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: ${COLORS.background};
  color: ${COLORS.black};
  padding: 18px;
  border-radius: 12px;
`;

const Control = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${COLORS.white};
  background: ${COLORS.black};
  cursor: pointer;

  &:hover {
    background: ${COLORS.blue};
  }
`;

const Card = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 80px;
`;

const Img = styled.div`
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        scale: 1.5;
      }
    }
`;

const Year = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin-top: 32px;
`;

const Hover = styled.div`
    margin: 32px 0;
    padding: 10px 28px;
    border-radius: 32px;
    font-size: 24px;
    color: ${COLORS.white};
    background: ${COLORS.black};
`;

const Years = styled.div`
  width: min(92vw, 880px);
  margin-top: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const YearButton = styled.button<{ $active: boolean }>`
  padding: 6px 12px;
  border-radius: 20px;
  background: ${({ $active }) => ($active ? COLORS.black : COLORS.white)};
  color: ${({ $active }) => ($active ? COLORS.white : COLORS.black)};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: ${COLORS.blue};
    color: ${COLORS.white};
  }
`;