import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

import marca from "../assets/marca.jpg";
import design from "../assets/design.jpg";
import experiencia from "../assets/experiencia.png";
import privacidade from "../assets/privacidade.png";

type Slide67Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide67 = ({ onPrevious, onNext }: Slide67Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Div>
          <Title>Lock-in</Title>
          <div>
            <Card white img={marca}>
              Marca
            </Card>
            <Card img={design}>
              Design
            </Card>
            <Card white img={experiencia}>
              Experiência
            </Card>
            <Card img={privacidade}>
              Privacidade
            </Card>
          </div>
          <p>- Michael Porter</p>
        </Div>
    </Container>
  )
}

export default Slide67;


const Div = styled.div`
    div {
      display: flex;
      gap: 16px;
    }

    p {
      font-size: 24px;
      font-weight: 600;
      margin-top: 16px;
      text-align: center;
      color: ${COLORS.blue};
    }
`;

const Card = styled.div<{ img: string, white?: boolean }>`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    width: 240px;
    position: relative;
    border-radius: 16px;
    height: 400px;
    padding: 16px;
    color: ${COLORS.white};
    font-size: 28px;
    font-weight: 800;
    cursor: pointer;
    ${props => props.white && `
        color: ${COLORS.black};
        border: 2px solid ${COLORS.black};
    `}

    &:hover {
      scale: 1.05;
    } 
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 16px;
`;