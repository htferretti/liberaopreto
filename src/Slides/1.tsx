import styled from "styled-components";

import Container from "../Components/Container";
import { COLORS } from "../style";

import logo from "../assets/sb.png"

const Slide1 = () => {
    return (
        <Container>
            <ImgLogo src={logo} />
            <Title>SPICY BOYS</Title>
            <Link>liberaopreto.vercel.app</Link>
        </Container>
    )
}

export default Slide1;


const ImgLogo = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
`;

const Title = styled.h1`
    font-size: 54px;
    color: ${COLORS.black};
`;

const Link = styled.p`
    font-size: 26px;
    color: ${COLORS.blue};
    text-decoration: underline;
    letter-spacing: 1.5px;
    margin-top: 1rem;
`;
