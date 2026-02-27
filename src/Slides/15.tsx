import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

import img1 from "../assets/ino1.png";
import img2 from "../assets/ino2.png";
import img3 from "../assets/ino3.jpg";

type Slide15Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide15 = ({ onPrevious, onNext }: Slide15Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Div>
          <Title>Inovações no setor</Title>
          <div>
            <Card img={img1}>
              <p>Integração de IA em programas voltados para desenvolvimento de software como o XCode 16 e a apple intelligence na área de ia generativa e assistente virtual.</p>
            </Card>
            <Card img={img2}>
              <p>Integração de dispositivos diversos da apple com o Swift 6, destacando seus wearables e seu monitoramento de saúde.</p>
            </Card>
            <Card img={img3}>
              <p>Fortes tendências no aspecto da sustentabilidade, reforçando a reciclagem de seus produtos e redução bruta de emissões de CO2 até 2030. Essa abordagem pode ser analisada como uma resposta às acusações de obsolescência programada, direcionadas ao excesso de produção e baixa vida útil.</p>
            </Card>
          </div>
        </Div>
    </Container>
  )
}

export default Slide15;


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
  overflow: hidden;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    height: 400px;
    padding: 16px;
    color: ${COLORS.white};
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 72%);
      pointer-events: none;
    }

    ${props => props.white && `
        color: ${COLORS.black};
        border: 2px solid ${COLORS.black};

        &::before {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 72%);
        }
    `}

    p {
      position: relative;
      z-index: 1;
      font-size: 20px;
      font-weight: 600;
      text-align: justify;
    }

    &:hover {
      scale: 1.05;
    } 
`;

const Title = styled.h1`
    position: absolute;
    left: 0;
    top: 0;
    font-size: 30px;
    font-weight: 400;
    margin: 16px;
`;