import styled from "styled-components";
import Container from "../Components/Container"

import { Apple } from "react-bootstrap-icons";
import { COLORS } from "../style";

type Slide3Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide3 = ({ onPrevious, onNext }: Slide3Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Tema>Tema sorteado: <span>bens duráveis</span></Tema>
        <AppleIcon />
    </Container>
  )
}

export default Slide3;


const Tema = styled.h1`
    position: absolute;
    left: 0;
    top: 0;
    font-size: 24px;
    font-weight: 400;
    margin: 16px;

    span {
      color: ${COLORS.blue};
      font-weight: 500;
    }

    @media (max-width: 1224px) {
        display: none;
    }
  `;

const AppleIcon = styled(Apple)`
    font-size: 150px;
    cursor: pointer;

    &:hover {
        color: ${COLORS.blue};
        scale: 1.1;
    }
  `;