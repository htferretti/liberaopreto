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

  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <AppleIcon onClick={handleOpenVideo} />
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
  `;