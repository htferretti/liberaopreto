import styled from "styled-components";
import Container from "../Components/Container"

import img from "../assets/sb.png";

type Slide16Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide16 = ({ onPrevious, onNext }: Slide16Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Agradecimentos>
          <h1>Obrigado pela atenção!</h1>
          <div>SPICY BOYS<img src={img} alt="Pimenta" /></div>
          <p>Nosso trabalho merece o preto do plinio?</p>
        </Agradecimentos>
    </Container>
  )
}

export default Slide16;


const Agradecimentos = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;

    @media (max-width: 1223px) {
      display: none;
    }
  }

  p {
    display: none;

    @media (max-width: 1223px) {
      display: block;
    }
  }

  img {
    width: 74px;
  }

  h1 {
    font-size: 60px;

    @media (max-width: 1223px) {
      display: none;
    }
  }
`;