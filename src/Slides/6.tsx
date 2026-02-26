import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

import img from "../assets/slide6.jpeg";

type Slide6Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide6 = ({ onPrevious, onNext }: Slide6Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <ImgBackground>
          <Title>Modelo de negócio:</Title>
          <Text>Setor secundário</Text>
          <Text>B2C</Text>
          <Text>Bens duráveis</Text>
        </ImgBackground>
    </Container>
  )
}

export default Slide6;


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
    font-size: 32px;
    font-weight: 600;
    color: ${COLORS.blue};
    margin-bottom: 8px;
    text-shadow: 0px 4px 4px rgb(255, 255, 255);
  `;