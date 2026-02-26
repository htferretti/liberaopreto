import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';

import styled from 'styled-components';
import { COLORS } from '../style';

type SlideButtonProps = {
    direction: 'left' | 'right';
    onClick: () => void;
};

const SlideButton = ({ direction, onClick }: SlideButtonProps) => {
    return (
        <Button
            type="button"
            $direction={direction}
            onClick={onClick}
            aria-label={direction === 'left' ? 'Voltar slide' : 'Avançar slide'}
        >
            {direction === 'left' ? <CaretLeftFill /> : <CaretRightFill />}
        </Button>
    );
};

export default SlideButton;


const Button = styled.button<{ $direction: 'left' | 'right' }>`
    position: absolute;
    margin: 16px;
    ${({ $direction }) => ($direction === 'left' ? 'left: 0;' : 'right: 0;')}
    bottom: 0;
    background: ${COLORS.black};
    border: none;
    border-radius: 50%;
    color: ${COLORS.white};
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;

    &:hover {
        background: ${COLORS.blue};
        cursor: pointer;
    }
`;