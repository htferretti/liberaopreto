import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

import setor from "../assets/setor.png";
import note from "../assets/note.jpg";
import b2c from "../assets/b2c.jpg";

type Slide6Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide6 = ({ onPrevious, onNext }: Slide6Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Div>
          <Title>Modelo de negócio</Title>
          <div>
            <Card img={setor}>
              Setor Secundário
            </Card>
            <Card white img={b2c}>
              B2C
            </Card>
            <Card img={note}>
              Bens duráveis
            </Card>
          </div>
        </Div>
    </Container>
  )
}

export default Slide6;


const Div = styled.div`

    div {
      display: flex;
      gap: 16px;
    }
`;

const Card = styled.div<{ img: string, white?: boolean }>`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    width: 300px;
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