import styled from "styled-components";
import SlideButton from "./SlideButton";

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <SlideContainer>
            {children}
            <SlideButton direction="left" />
            <SlideButton direction="right" />
        </SlideContainer>
    )
}

export default Container;


const SlideContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;