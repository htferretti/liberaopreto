import styled from "styled-components";
import Container from "../Components/Container"

import { Apple } from "react-bootstrap-icons";
import { COLORS } from "../style";

type Slide3Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide3 = ({ onPrevious, onNext }: Slide3Props) => {
  const handleOpenVideo = () => {
    window.open("https://www.youtube.com/watch?v=-ueUb6PNwbs", "_blank", "noopener,noreferrer");
  };

  const handleOpenKahoot = () => {
    window.open("https://kahoot.it/");
  };
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <AppleIcon onClick={handleOpenVideo} />
        <Text>Kahoot time!!!</Text>
        <Subtext onClick={handleOpenKahoot}>clique aqui!</Subtext>
        
    </Container>
  )
}

export default Slide3;


const AppleIcon = styled(Apple)`
    font-size: 150px;
    cursor: pointer;

    &:hover {
        color: ${COLORS.blue};
        scale: 1.1;
    }

    @media (max-width: 1224px) {
        display: none;
    }
  `;

const Text = styled.p`
    display: none;

    @media (max-width: 1224px) {
        display: block;
        font-size: 30px;
        font-weight: 700;
    }
`;

const Subtext = styled.p`
    display: none;

    @media (max-width: 1224px) {
        display: block;
        font-size: 20px;
        font-weight: 500;
        margin-top: 16px;
        text-align: center;
        color: ${COLORS.blue};
        text-decoration: underline;
    }
`;