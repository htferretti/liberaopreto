import styled from "styled-components";
import Container from "../Components/Container"

import img from "../assets/mordida.png";

type Slide14Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide14 = ({ onPrevious, onNext }: Slide14Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Tema>Curiosidades e inovações no setor</Tema>
        <Curiosidades>
          <img src={img} alt="Mordida da maçã" />
          <p>?</p>
        </Curiosidades>
    </Container>
  )
}

export default Slide14;


const Tema = styled.h1`
    position: absolute;
    left: 0;
    top: 0;
    font-size: 24px;
    font-weight: 400;
    margin: 16px;
  `;


const Curiosidades = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  font-size: 160px;
`;