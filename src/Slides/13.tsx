import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

import consumidor from "../assets/consumidorfinal.jpg";
import perfil from "../assets/perfil.jpg";
import ck from "../assets/ck.jpg";

type Slide13Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide13 = ({ onPrevious, onNext }: Slide13Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Div>
          <Title>Público alvo</Title>
          <div>
            <Card white img={consumidor}>
              <h3>B2C</h3>
              <p>Consumidor final</p>
            </Card>
            <Card white img={perfil}>
              <h3>Perfil:</h3>
              <p>Maior poder aquisitivo e busca por status</p>
            </Card>
            <Card img={ck}>
              <h3>Comportamento</h3>
              <p>Valoriza design, desempenho e ecossistema integrado</p>
            </Card>
          </div>
        </Div>
    </Container>
  )
}

export default Slide13;


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
    display: flex;
    flex-direction: column;
    height: 400px;
    padding: 16px;
    color: ${COLORS.white};
    cursor: pointer;
    ${props => props.white && `
        color: ${COLORS.black};
        border: 2px solid ${COLORS.black};
    `}

    h3 {
      font-size: 28px;
      font-weight: 800;
    }

    p {
      font-size: 22px;
      font-weight: 600;
    }

    &:hover {
      scale: 1.05;
    } 
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 16px;
`;