import { useState } from "react";
import styled from "styled-components";
import Container from "../Components/Container"
import { COLORS } from "../style";

import logo from "../assets/curiosidades/logo.png";
import atari from "../assets/curiosidades/atari.png";
import ron from "../assets/curiosidades/ron.jpg";

type Slide14Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide14 = ({ onPrevious, onNext }: Slide14Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const curiosities = [
    {
      name: "Logo",
      image: logo,
      alt: "Logo da Apple",
      text: "A primeira logo da empresa era Newton embaixo de uma macieira.",
    },
    {
      name: "Atari",
      image: atari,
      alt: "Atari",
      text: "O nome “apple” foi criado com o intuito de ficar antes da Atari na lista telefônica.",
    },
    {
      name: "Ron Wayne",
      image: ron,
      alt: "Ron Wayne",
      text: "Ronald Wayne, um dos co fundadores vendeu sua parte, 10%, por 800 dólares em 1976.",
    },
  ];

  const activeCard = curiosities[activeIndex];

  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
      <Tema>Curiosidades</Tema>
      <Card>
        <Image src={activeCard.image} alt={activeCard.alt} />
        <Text>{activeCard.text}</Text>
      </Card>

      <ButtonsRow>
        {curiosities.map((item, index) => (
          <NavButton
            key={item.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            $isActive={index === activeIndex}
          >
            {item.name}
          </NavButton>
        ))}
      </ButtonsRow>
    </Container>
  )
}

export default Slide14;


const Tema = styled.h1`
    position: absolute;
    left: 0;
    top: 0;
    font-size: 30px;
    font-weight: 400;
    margin: 16px;
  `;


const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

const NavButton = styled.button<{ $isActive: boolean }>`
  background: ${({ $isActive }) => ($isActive ? COLORS.blue : COLORS.black)};
  color: ${COLORS.white};
  border-radius: 999px;
  padding: 10px 18px;
  font-size: 15px;
  cursor: pointer;
`;

const Card = styled.div`
  width: min(720px, 88vw);
  min-height: 500px;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Image = styled.img`
  width: min(440px, 62vw);
  max-height: 300px;
  object-fit: contain;
`;

const Text = styled.p`
  color: ${COLORS.black};
  font-size: 24px;
  line-height: 1.4;
  max-width: 640px;
  text-align: center;
`;