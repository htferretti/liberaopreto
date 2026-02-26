import styled from "styled-components";
import SlideButton from "./SlideButton";

type ContainerProps = {
    children: React.ReactNode;
    onPrevious?: () => void;
    onNext?: () => void;
};

const Container = ({ children, onPrevious, onNext }: ContainerProps) => {
    return (
        <SlideContainer>
            {children}
            {onPrevious && <SlideButton direction="left" onClick={onPrevious} />}
            {onNext && <SlideButton direction="right" onClick={onNext} />}
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