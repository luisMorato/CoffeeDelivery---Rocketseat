import styled, { css } from "styled-components";

export const SuccessContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 5rem auto;
    width: 100%;
    max-width: 70rem;

    h1 {
        color: var(--yellow-700);
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;

        @media (max-width: 640px) {
            font-size: 1.5rem;
        }
    }

    p {
        color: var(--brown-400);
        font-size: 1.25rem;

        @media (max-width: 640px) {
            font-size: 1rem;
        }
    }

    &>div:last-of-type {
        display: flex;
        justify-content: space-between;

        @media (max-width: 1024px) {
            align-items: center;
            flex-direction: column-reverse;
            gap: 1rem;
            padding: 0 3rem;
        }

        @media (max-width: 640px) {
            img {
                width: 22rem;
                height: 14rem;
            }
        }
    }
`;

export const PurchaseDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    background-color: var(--gray-100);
    padding: 2.5rem;
    position: relative;
    width: 100%;
    max-width: calc(33rem - 2.5rem);
    min-width: fit-content;

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        border-radius: 6px;
        border-top-right-radius: calc(36px + 1px);
        border-bottom-left-radius: calc(36px + 1px);
        background: linear-gradient(125deg, var(--yellow-500), var(--purple-500));
        z-index: -1;
    }

    @media (max-width: 640px) {
        padding: 1.5rem;
    }
`;

interface detailsItemProps {
    bgColor: keyof typeof colors
}

const colors = {
    purple: '--purple-500',
    yellow: '--yellow-500',
    darkYellow: '--yellow-700'
}

export const DetailsItem = styled.div<detailsItemProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &>div:first-of-type {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => css`var(${colors[props.bgColor]})`};
        color: var(--gray-200);
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
    }
`;

