import styled, { keyframes } from "styled-components";
import Container from "../Components/Container"

import img1 from "../assets/competidors/acer.png";
import img2 from "../assets/competidors/adobe.png";
import img3 from "../assets/competidors/amazon.png";
import img4 from "../assets/competidors/asus.png";
import img5 from "../assets/competidors/dell.png";
import img6 from "../assets/competidors/google.png";
import img7 from "../assets/competidors/hp.png";
import img8 from "../assets/competidors/huawei.png";
import img9 from "../assets/competidors/lenovo.png";
import img10 from "../assets/competidors/microsoft.png";
import img11 from "../assets/competidors/motorola.png";
import img12 from "../assets/competidors/nvidia.png";
import img13 from "../assets/competidors/samsung.png";
import img14 from "../assets/competidors/xiaomi.png";

type Slide11Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide11 = ({ onPrevious, onNext }: Slide11Props) => {
  const logos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14
  ];

  const carouselItems = [...logos, ...logos];

  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
      <Tema>Concorrentes</Tema>
      <Carousel>
        <Track>
          {carouselItems.map((logo, index) => (
            <LogoCard key={`${logo}-${index}`}>
              <Logo src={logo} alt={`Concorrente ${index % logos.length + 1}`} />
            </LogoCard>
          ))}
        </Track>
      </Carousel>
    </Container>
  )
}

export default Slide11;


const Tema = styled.h1`
    position: absolute;
    top: 0;
    font-size: 40px;
    font-weight: 900;
    margin: 16px;
  `;

const Carousel = styled.div`
  width: 100%;
  overflow: hidden;
`;

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  animation: ${scroll} 24s linear infinite;
`;

const LogoCard = styled.div`
  flex: 0 0 auto;
  width: 180px;
  height: 110px;
  margin: 0 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 12px;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;