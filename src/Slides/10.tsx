import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

type Slide10Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide10 = ({ onPrevious, onNext }: Slide10Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Tema>Sobre a empresa</Tema>
        <Grid>
          <Box>
            <h2>Unidades e operação</h2>
            <p>+ de 500 lojas físicas.</p>
            <p>Operação em + de 100 países.</p>
          </Box>
          <Box>
            <h2>Internacionalização</h2>
            <p>Varejo próprio e parceiros locais.</p>
            <p>Adaptação cultural e regulatória.</p>
          </Box>
          <Box>
            <h2>Pessoas</h2>
            <p>~160 mil funcionários.</p>
            <p>~2,38 milhões de receita por funcionário em 2024.</p>
          </Box>
          <Box $green>
            <h2>Projetos socioambientais</h2>
            <p>Apple 2030 para neutralidade carbónica.</p>
            <p>Redução de emissões de gases estufa em 55% em 2015.</p>
          </Box>
        </Grid>
    </Container>
  )
}

export default Slide10;


const Tema = styled.h1`
    position: absolute;
    left: 0;
    top: 0;
    font-size: 30px;
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

const Box = styled.div<{ $green?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 16px;
  border: 2px solid ${props => props.$green ? COLORS.green : COLORS.black};
  cursor: pointer;

  &:hover {
    scale: 1.05;
    border-color: ${props => props.$green ? COLORS.green : COLORS.blue};
  }

  h2 {
    padding-bottom: 16px;
    color: ${props => props.$green ? COLORS.green : COLORS.black};
  }

  p {
    margin-top: 16px;
  }

  @media (max-width: 1223px) {
    padding: 14px;
    border-radius: 10px;

    &:hover {
      scale: 1;
      border-color: ${props => props.$green ? COLORS.green : COLORS.black};
    }

    h2 {
      padding-bottom: 8px;
      font-size: 18px;
    }

    p {
      margin-top: 8px;
      font-size: 14px;
      line-height: 1.35;
    }
  }
`;