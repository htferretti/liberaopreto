import styled from "styled-components";
import Container from "../Components/Container"

type Slide2Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide2 = ({ onPrevious, onNext }: Slide2Props) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Pedro>
          <Title>Integrantes</Title>
          <NameList>
            <li>Henrique Tammenhain Ferretti</li>
            <li>Pedro Amaral Rodrigues</li>
            <li>Rene Martins Clini</li>
            <li>Tiago Noronha Sein</li>
            <li>Yan de Ruijter</li>
          </NameList>
        </Pedro>
    </Container>
  )
}

export default Slide2;

const Pedro = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Title = styled.div`
    font-size: 64px;
    font-weight: 800;
`;

const NameList = styled.ul`
      li {
        font-size: 30px;
        margin: 16px 0;
        font-weight: 500;
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