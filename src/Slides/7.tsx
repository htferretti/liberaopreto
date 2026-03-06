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
    { name: "Acessórios", image: Acessorios, link: "https://www.apple.com/br/shop/accessories/all" },
    { name: "AirPods", image: AirPods, link: "https://www.apple.com/br/airpods/" },
    { name: "AirTag", image: AirTag, link: "https://www.apple.com/br/airtag/" },
    { name: "Apple TV", image: AppleTv, link: "https://www.apple.com/br/apple-tv-4k/" },
    { name: "Apple Watch", image: AppleWatch, link: "https://www.apple.com/br/apple-watch/" },
    { name: "Mac", image: Mac, link: "https://www.apple.com/br/mac/" },
    { name: "iPad", image: iPad, link: "https://www.apple.com/br/ipad/" },
    { name: "iPhone", image: iPhone, link: "https://www.apple.com/br/iphone/" },
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

        <MobileGrid>
          {products.map((product) => (
            <MobileCard key={product.name} href={product.link} target="_blank" rel="noreferrer">
              <ProductImage src={product.image} alt={product.name} />
              <span>{product.name}</span>
            </MobileCard>
          ))}
        </MobileGrid>
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
    font-size: 32px;
    font-weight: 400;
    margin: 16px;

    @media (max-width: 1223px) {
      left: 50%;
      right: auto;
      transform: translateX(-50%);
      text-align: center;
      font-size: 22px;
      margin: 10px 0;
      width: 90vw;
    }
  `;

    const Circle = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      width: 520px;
      height: 520px;
      transform: translate(-50%, -50%);

      @media (max-width: 1223px) {
        display: none;
      }
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

      @media (max-width: 1223px) {
        --radius: 120px;
        width: 78px;
        height: 78px;
        margin: -39px;

        &:hover {
          transform: rotate(calc(var(--i) * 45deg)) translate(var(--radius)) rotate(calc(var(--i) * -45deg));
          z-index: 1;
        }
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

      @media (max-width: 1223px) {
        display: none;
      }
    `;

    const MobileGrid = styled.div`
      display: none;

      @media (max-width: 1223px) {
        width: 95vw;
        margin-top: 48px;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }
    `;

    const MobileCard = styled.a`
      border: 1px solid ${COLORS.black};
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-decoration: none;
      color: ${COLORS.black};
      min-height: 122px;

      span {
        font-size: 14px;
        font-weight: 600;
        text-align: center;
      }
    `;