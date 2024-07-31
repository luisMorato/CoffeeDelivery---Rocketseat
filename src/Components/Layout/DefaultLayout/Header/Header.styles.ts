import styled, { css } from "styled-components";

interface headerContainerProps {
    currentPathName: string
}

export const HeaderContainer = styled.header<headerContainerProps>`
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: ${props => props.currentPathName === '/' ? css`0 4px 4px rgba(0, 0, 0, 0.25)` : "none"};
    width: 100%;
`;

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem;
    width: 100%;
    max-width: 90rem;

    a {
        img {
            width: 5.25rem;
            height: 2.5rem;
        }
    }

    div {
        display: flex;
        gap: 0.75rem;
    }
`;

export const CartWrapper = styled.div`
    position: relative;
`;

export const CartQuantity = styled.div`
    position: absolute;
    background-color: var(--yellow-700);
    border-radius: 50%;
    color: var(--gray-200);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    top: -10px;
    right: -10px;
    width: 1.25rem;
    height: 1.25rem;
    z-index: 10;
`;