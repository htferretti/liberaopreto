import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

type Slide8Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide8 = ({ onPrevious, onNext }: Slide8Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Tema>Dados financeiros</Tema>
        <Grid>
          <Box>
            <h2>Faturamento</h2>
            <h1>US$ 416,16 bilhões</h1>
            <p>Receita anual de 2025</p>
          </Box>
          <Box>
            <h2>Stock Value</h2>
            <h1>US$ ~4 trilhões</h1>
            <p>Market cap aproximado</p>
          </Box>
        </Grid>
    </Container>
  )
}

export default Slide8;


const Tema = styled.h1`
    position: absolute;
    left: 0;
    top: 0;
    font-size: 32px;
    font-weight: 400;
    margin: 16px;

    @media (max-width: 1223px) {
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-size: 22px;
      margin: 10px 0;
      width: 90vw;
    }
  `;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 1223px) {
    width: 95vw;
    margin-top: 42px;
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  border-radius: 16px;
  color: ${COLORS.white};
  background: ${COLORS.black};
  cursor: pointer;

  &:hover {
    background: ${COLORS.blue};
    scale: 1.05;
  }

  h2 {
    padding-bottom: 16px;
    border-bottom: 1px solid ${COLORS.white};
  }

  h1 {
    margin-top: 16px;
  }

  @media (max-width: 1223px) {
    padding: 14px;
    border-radius: 10px;

    &:hover {
      background: ${COLORS.black};
      scale: 1;
    }

    h2 {
      font-size: 18px;
      padding-bottom: 8px;
    }

    h1 {
      margin-top: 10px;
      font-size: 24px;
      line-height: 1.2;
    }

    p {
      margin-top: 6px;
      font-size: 14px;
    }
  }
`;