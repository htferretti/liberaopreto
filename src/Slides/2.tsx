import styled from "styled-components";
import Container from "../Components/Container"

type Slide2Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide2 = ({ onPrevious, onNext }: Slide2Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <NameList>
          <li>Henrique Tammenhain Ferretti</li>
          <li>Pedro Amaral Rodrigues</li>
          <li>Rene Martins Clini</li>
          <li>Tiago Noronha Sein</li>
          <li>Yan de Ruijter</li>
        </NameList>
    </Container>
  )
}

export default Slide2;


const NameList = styled.ul`
      li {
        font-size: 24px;
        margin: 16px 0;
        list-style: decimal;
      }

  @media (max-width: 1224px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    li {
      font-size: 20px;
    }
  }
`;