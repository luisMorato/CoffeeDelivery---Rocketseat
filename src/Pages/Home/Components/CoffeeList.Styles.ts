import styled from "styled-components";

export const CoffeeListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    max-width: 70rem;

    >h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 2rem;
    }

    @media (max-width: 1024px) {
        h2 {
            padding: 0 0.5rem;
        }
    }
`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 1124px) {
        justify-content: center;
    }
`;

export const CoffeeCardSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--gray-200);
    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    padding: 0 1.25rem;
    width: calc(16rem - 2.5rem);
    height: 20rem;

    img {
        transform: translateY(-1.25rem);
    }

    >div:first-of-type {
        display: flex;
        gap: 0.25rem;

        span {
            padding: 0.25rem 0.5rem;
            background-color: var(--yellow-200);
            color: var(--yellow-700);
            font-size: 0.625rem;
            font-weight: bold;
            margin: 0 0 1rem;
            border-radius: 100px;
        }
    }
`;

export const CoffeeCardDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;

    h2 {
        font-size: 1.25rem;
        font-family: "Baloo 2", sans-serif;
    }

    p {
        text-align: center;
        font-size: 0.875rem;
        color: var(--brown-200);
    }
`;

export const CoffeeCardBuy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    width: 100%;

    :nth-child(2){
        display: flex;
        gap: 0.5rem;
    }
`;

export const Price = styled.div`
    display: flex;
    align-items: baseline;
    color: var(--brown-300);
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;

    :first-child {
        font-size: 0.875rem;
        font-weight: 200;
    }
`;

export const CoffeeCardAction = styled.div`
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: var(--gray-300);

    button {
        background-color: transparent;
        border: none;
        color: var(--purple-500);
        cursor: pointer;
    }
`;