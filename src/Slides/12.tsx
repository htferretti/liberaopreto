import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

type Slide12Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide12 = ({ onPrevious, onNext }: Slide12Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
      <Tema>Cadeia de fornecedores</Tema>
      <Grid>
        <Box>
          <h2>Montagem</h2>
          <p>Foxconn e Pegatron Corporation.</p>
        </Box>

        <Box>
          <h2>Processadores e semicondutores</h2>
          <p>Taiwan Semiconductor Manufacturing Company (TSMC).</p>
        </Box>

        <Box>
          <h2>Baterias, memórias DRAM e NAND, e displays</h2>
          <p>Samsung.</p>
        </Box>

        <Box>
          <h2>Câmeras</h2>
          <p>Sony Corporation (sensores das câmeras principal e traseira).</p>
        </Box>

        <Box>
          <h2>Estrutura do aparelho e vidro</h2>
          <p>Corning Incorporated e Luxshare Precision Industry.</p>
        </Box>
      </Grid>
    </Container>
  )
}

export default Slide12;


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
  grid-template-columns: repeat(2, minmax(320px, 1fr));
  grid-auto-rows: 1fr;
  gap: 24px;
  width: min(980px, 88vw);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 24px;
  border-radius: 16px;
  border: 2px solid ${COLORS.black};
  cursor: pointer;

  &:hover {
    border-color: ${COLORS.blue};
    scale: 1.03;
  }

  h2 {
    font-size: 22px;
    font-weight: 500;
    color: ${COLORS.black};
  }

  p {
    margin-top: 12px;
    font-size: 18px;
    color: ${COLORS.black};
    line-height: 1.35;
  }
`;