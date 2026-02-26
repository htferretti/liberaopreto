import styled from "styled-components";
import { useState } from "react";
import Container from "../Components/Container"

import { COLORS } from "../style";

import Acessorios from "../assets/products/Acessórios.png";
import AirPods from "../assets/products/AirPods.png";
import AirTag from "../assets/products/AirTag.png";
import AppleTv from "../assets/products/AppleTv.png";
import AppleWatch from "../assets/products/AppleWatch.png";
import Mac from "../assets/products/Mac.png";
import iPad from "../assets/products/iPad.png";
import iPhone from "../assets/products/iPhone.png";


type Slide7Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const Slide7 = ({ onPrevious, onNext }: Slide7Props) => {
  const [hoveredProduct, setHoveredProduct] = useState("");

  const products = [
    { name: "Acessórios", image: Acessorios },
    { name: "AirPods", image: AirPods },
    { name: "AirTag", image: AirTag },
    { name: "Apple TV", image: AppleTv },
    { name: "Apple Watch", image: AppleWatch },
    { name: "Mac", image: Mac },
    { name: "iPad", image: iPad },
    { name: "iPhone", image: iPhone },
  ];

  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Text>Porfifólio de produtos</Text>
        {/* <Text $right>Michael Porter</Text> */}
        <Circle>
          {products.map((product, index) => (
            <Item
              key={product.name}
              style={{ ["--i" as string]: index }}
              onMouseEnter={() => setHoveredProduct(product.name)}
              onMouseLeave={() => setHoveredProduct("")}
            >
              <ProductImage src={product.image} alt={product.name} />
            </Item>
          ))}
          <CenterLabel $visible={Boolean(hoveredProduct)}>{hoveredProduct}</CenterLabel>
        </Circle>
        {/* <List>
          <li>Marca</li>
          <li>Design</li>
          <li>Experiência</li>
          <li>Privacidade</li>
        </List> */}
    </Container>
  )
}

export default Slide7;


const Text = styled.h1<{ $right?: boolean }>`
    position: absolute;
  left: ${(props) => (props.$right ? "auto" : "0")};
  right: ${(props) => (props.$right ? "0" : "auto")};
  color: ${(props) => (props.$right ? COLORS.blue : COLORS.black)};
    top: 0;
    font-size: 24px;
    font-weight: 400;
    margin: 16px;
  `;

    const Circle = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      width: 520px;
      height: 520px;
      transform: translate(-50%, -50%);
    `;

    const Item = styled.div`
      --radius: 200px;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 124px;
      height: 124px;
      transform: rotate(calc(var(--i) * 45deg)) translate(var(--radius)) rotate(calc(var(--i) * -45deg));
      transform-origin: center;
      margin: -62px;
      transition: transform 0.25s ease;

      &:hover {
        transform: rotate(calc(var(--i) * 45deg)) translate(var(--radius)) rotate(calc(var(--i) * -45deg)) scale(1.2);
        z-index: 2;
      }
    `;

    const ProductImage = styled.img`
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    `;

    const CenterLabel = styled.div<{ $visible: boolean }>`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 28px;
      font-weight: 600;
      color: ${COLORS.blue};
      opacity: ${(props) => (props.$visible ? 1 : 0)};
      transition: opacity 0.2s ease;
      pointer-events: none;
      text-align: center;
      width: 220px;
    `;