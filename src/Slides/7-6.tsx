import styled from "styled-components";
import Container from "../Components/Container"

import { COLORS } from "../style";

import img from "../assets/76.jpeg";

type Slide67Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide67 = ({ onPrevious, onNext }: Slide67Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Nome>Michael Porter</Nome>
        <Grid>
          <ul>
            <li>Marca</li>
            <li>Design</li>
            <li>Experiência</li>
            <li>Privacidade</li>
          </ul>
          <img src={img} alt="76" />
        </Grid>
        <Lockin>Lock-in</Lockin>
    </Container>
  )
}

export default Slide67;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 220px;

    li {
      margin: 16px 0;
      list-style: disc;
      font-size: 22px;
    }
  }

  img {
    width: 80%;
    border-radius: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      scale: 1.05;
    }
  }
`;

const Nome = styled.h1`
    position: absolute;
    top: 0;
    font-size: 24px;
    font-weight: 400;
    margin: 32px;
    color: ${COLORS.blue};
    font-weight: 500;
  `;

    const Lockin = styled.div`
    position: absolute;
    bottom: 0;
    margin: 16px;
    padding: 8px 32px;
    border-radius: 32px;
    font-size: 18px;
    color: ${COLORS.white};
    background: ${COLORS.black};
`;