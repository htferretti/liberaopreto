import { useState } from "react";
import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

import imgGlass from "../assets/glass.jpg";

import img1976 from "../assets/timeline/1976.png";
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

type Slide4Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const timelineItems = [
  { year: "1976", image: img1976, hoverText: "1976 — Fundação da Apple" },
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
];

const Slide4 = ({ onPrevious, onNext }: Slide4Props) => {
  const [hoverText, setHoverText] = useState<string | null>(null);

  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Title>TIMELINE 1976 - 2011</Title>
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

export default Slide4;


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
    background-position: top;
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