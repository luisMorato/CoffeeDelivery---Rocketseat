import styled, { css } from "styled-components";

interface DefaultButtonProps {
    variant: 'lightPurple' | 'lightYellow' | 'darkPurple' | 'yellow'
}

export const DefaultButton = styled.button<DefaultButtonProps>`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border: none;
    border-radius: 6px;
    padding: 8px;
    cursor: pointer;

    ${props => {
        if(props.variant === 'lightPurple'){
            return css`
                position: relative;
                background-color: var(--purple-200);
                color: var(--purple-500);
            `;
        }

        if(props.variant === 'lightYellow'){
            return css`
            background-color: var(--yellow-200);
            color: var(--yellow-700);
        `}

        if(props.variant === 'darkPurple'){
            return css`
            border: 0.5px solid transparent;
            background-color: var(--purple-500);
            color: var(--gray-200);

            &:not(:disabled):hover {
                background-color: transparent;
                color: var(--purple-500);
                border: 1px solid var(--purple-500);
            }
        `}

        if(props.variant === 'yellow'){
            return css`
            background-color: var(--yellow-500);
            color: var(--gray-200);

            &:not(:disabled):hover {
                background-color: var(--yellow-600);
            }
        `}
    }}
`;