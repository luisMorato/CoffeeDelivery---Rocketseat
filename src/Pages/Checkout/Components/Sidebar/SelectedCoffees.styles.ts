import styled, { css } from "styled-components";

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 28rem;
    /* min-width: calc(22.5rem - 5rem); */

    @media (max-width: 768px) {
        margin-left: 1rem;
        width: fit-content;
    }
`;

export const SidebarContent = styled.div`
    background-color: var(--gray-200);
    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    padding: 2.5rem;
    width: 100%;

    @media (max-width: 640px) {
        width: fit-content;
    }
`;

interface wrapperColProps {
    productsLength: number
}

export const WrapperCol = styled.div<wrapperColProps>`
    display: flex;
    flex-direction: column;

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
        if(props.productsLength > 2) {
            return css`
                padding-right: 0.5rem;
                max-height: 13rem;
                overflow-y: scroll;
            `;
        }
    }}
`;

export const TotalContainer = styled.div`
    width: 100%;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        width: inherit;
        height: 2.75rem;
    }
`;

export const TotalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem 0;

    div {
        display: flex;
        justify-content: space-between;
        font-size: 0.875rem;
    }

    :last-child span {
        font-size: 1.25rem;
        font-weight: bold;
    }
`;