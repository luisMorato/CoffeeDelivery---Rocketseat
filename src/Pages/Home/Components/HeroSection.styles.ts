import styled, { css } from "styled-components";

export const HeroSectionContainer = styled.div`
    display: flex;
    gap: 3.5rem;
    padding: 6.25rem;
    width: 70rem;
    height: calc(34rem - 12.5rem);

    img {
        width: 30rem;
        height: 22.5rem;
    }

    @media (max-width: 1124px) {
        flex-direction: column-reverse;
        align-items: center;
        height: fit-content;

        img {
            width: 22rem;
            height: 16rem;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;

    @media (max-width: 640px) {
        gap: 2rem;
    }
`;

export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h1 {
        font-family: "Baloo 2", sans-serif;
        font-size: 3rem;
    }

    p {
        font-size: 1.25rem;
    }


    //ToDo: Fix Text Wrapping
    @media (max-width: 1024px) {
        align-items: center;

        h1 {
            word-wrap: break-word;
            word-break: break-all;
            overflow-wrap: break-word;
            hyphens: auto;
            width: 80%;
        }

        p {
            word-wrap: break-word;
            word-break: break-all;
            overflow-wrap: break-word;
            hyphens: auto;
            width: 80%;
        }
    }

    @media (max-width: 640px) {
        h1 {
            font-size: 1.5rem;
            width: 56%;
        }

        p {
            width: 56%;
        }
    }
`;

export const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    max-width: 35rem;

    @media (max-width: 1024px) {
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

interface ItemProps {
    variant: keyof typeof itemVariants
}

const itemVariants = {
    darkYellow: '--yellow-700',
    yellow: '--yellow-500',
    brown: '--brown-500',
    purple: '--purple-500'
}

export const Item = styled.div<ItemProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: ${props => css`var(${itemVariants[props.variant]})`};
        color: var(--gray-100);
        width: 2rem;
        height: 2rem;

        svg {
            flex-shrink: 0;
        }
    }

    span {
        color: var(--brown-300);
        white-space: nowrap;
    }

`;