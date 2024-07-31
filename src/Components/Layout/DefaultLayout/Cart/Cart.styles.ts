import styled, { css, keyframes } from "styled-components";

interface cartContainerProps {
    isCartOpen: boolean
}

const fadeIn = keyframes`
    from {
        opacity: 0;
        width: 0;
        visibility: hidden;
    }
    to {
        opacity: 1;
        width: calc(25rem - 1.75rem);
        visibility: visible;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        width: calc(25rem - 1.75rem);
        visibility: visible;
    }
    to {
        opacity: 0;
        width: 0;
        visibility: hidden;
    }
`;

export const CartContainer = styled.aside<cartContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--gray-200);
    position: fixed;
    padding: 1rem;
    top: 0;
    right: 0;
    height: 100dvh;
    z-index: 50;

    animation: ${props => props.isCartOpen ? css`${fadeIn}` : css`${fadeOut}`} 0.4s forwards;

    &>div:last-of-type {
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
        margin-bottom: 2.5rem;
        width: 100%;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            width: inherit;
            height: 2.75rem;
            font-size: 1rem;
        }
    }

    @media (max-width: 500px) {
        max-width: 320px;
    }
`;

export const CartHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--gray-300);

    h2 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
    }

    button {
        border: none;
        background-color: transparent;
        color: var(--brown-500);
        cursor: pointer;

        &:hover {
            color: var(--purple-500);
        }
    }
`;

interface cartContentProps {
    productsLength: number
}

export const CartContent = styled.div<cartContentProps>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 1rem;

    &>span:first-of-type {
        font-size: 1.25rem;
    }

    &>span:last-of-type {
        color: var(--brown-200);
    }

    &::-webkit-scrollbar {
        width: 0.25rem;
    }

    &::-webkit-scrollbar-track {
        border-radius: 16px;
        background: var(--purple-200);
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 16px;
        background: var(--purple-500);
    }

    ${props => {
        if(props.productsLength > 4) {
            return css`
                padding-right: 0.5rem;
                max-height: 46rem;
                overflow-y: scroll;
            `;
        }
    }}
`;