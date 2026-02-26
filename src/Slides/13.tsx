import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

import img from "../assets/slide13.jpg";

type Slide13Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide13 = ({ onPrevious, onNext }: Slide13Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <ImgBackground>
          <Title>Público alvo:</Title>
          <Text>B2C (consumidor final)</Text>
          <Text>Perfil: maior poder aquisitivo e busca por status</Text>
          <Text>Comportamento: valoriza design, desempenho e ecossistema integrado</Text>
        </ImgBackground>
    </Container>
  )
}

export default Slide13;


const ImgBackground = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.37);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      border: 10px solid rgba(255, 255, 255, 0.22);
    }
    
`;

const Title = styled.h1`
  position: relative;
  z-index: 1;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 32px;
    text-shadow: 0px 4px 4px rgb(255, 255, 255);
  color: ${COLORS.black};
`;

const Text = styled.h1`
  position: relative;
  z-index: 1;
    font-size: 26px;
    font-weight: 400;
    color: ${COLORS.blue};
    margin-bottom: 8px;
    text-shadow: 0px 4px 4px rgb(255, 255, 255);
  `;