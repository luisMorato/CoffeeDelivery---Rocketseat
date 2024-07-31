import styled from "styled-components";

export const ProductCardContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--gray-300);

    &:first-of-type {
        padding-bottom: 1.5rem;
        padding-top: 0;
    }

    h3 {
        font-weight: 400;
        margin-bottom: 0.5rem;

        @media (max-width: 640px) {
            font-size: 1rem;
        }
    }
    
    &>div:first-of-type {
        display: flex;
        gap: 1.25rem;

        img {
            width: 4rem;
            height: 4rem;
        }
    }

    span {
        color: var(--brown-300);
        font-weight: bold;
        white-space: nowrap;
    }
`;

export const ProductCartActions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
        border: none;
        border-radius: 6px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        color: var(--brown-300);
        cursor: pointer;
        background-color: var(--gray-300);
        border: 1px solid transparent;
        font-size: 0.75rem;

        svg {
            color: var(--purple-500);
        }
    }

    &>button:last-of-type:hover {
        border: 1px solid var(--purple-500);
    }
`;

export const QuantitySection = styled.div`
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--brown-300);
    background-color: var(--gray-300);

    button {
        background-color: transparent;
        border: none;
        color: var(--purple-500);
        cursor: pointer;
    }

    svg {
        color: var(--purple-500);
    }
`;