import styled from "styled-components";
import Container from "../Components/Container"

import img from "../assets/sb.png";

type Slide15Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide15 = ({ onPrevious, onNext }: Slide15Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Agradecimentos>
          <h1>Obrigado pela atenção!</h1>
          <div>SPICY BOYS<img src={img} alt="Pimenta" /></div>
        </Agradecimentos>
    </Container>
  )
}

export default Slide15;


const Agradecimentos = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }

  img {
    width: 74px;
  }

  h1 {
    font-size: 60px;
  }
`;