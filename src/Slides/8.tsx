import styled from "styled-components";
import Container from "../Components/Container"

import { Apple } from "react-bootstrap-icons";
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
    font-size: 24px;
    font-weight: 400;
    margin: 16px;
  `;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
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
`;