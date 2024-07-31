import styled, { css } from "styled-components";

export const CheckOutContainer = styled.form`
    display: flex;
    gap: 2rem;
    padding: 2.5rem 0.5rem;
    margin: 0 auto;
    width: 100%;
    max-width: 70rem;

    h2 {
        color: var(--brown-400);
        font-size: 1.125rem;
        font-family: "Baloo 2", sans-serif;
    }

    >div:first-of-type {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        //ToDo: Fix Text Alignment
        h2 {
            @media (max-width: 768px) {
                width: 68%;
                margin: 0 auto;
                text-align: left;
            }
        }
    }

    @media (max-width: 1280px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const CheckouMainContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: var(--gray-200);
    padding: 2.5rem;
    width: 100%;
    max-width: calc(40rem - 2rem - 2.5rem);
    border-radius: 6px;

    @media (max-width: 640px) {
        padding: 2.5rem 1rem ;
        width: fit-content;
        margin: 0 auto;
    }
`;

interface WrapperProps {
    svgColor: keyof typeof svgColors
}

const svgColors = {
    darkYellow: '--yellow-700',
    purple: '--purple-500'
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    gap: 0.5rem;
    font-weight: 500;
    color: var(--brown-300);

    div {
        display: flex;
        flex-direction: column;
        :nth-child(2) {
            font-weight: 400;
            font-size: 0.875rem;
        }
    }

    svg {
        position: relative;
        ${props => {
            if(props.svgColor === 'darkYellow') {
                return css`
                    color: ${css`var(${svgColors[props.svgColor]})`};
                    border-bottom: 1px solid ${css`var(${svgColors[props.svgColor]})`};
                `;
            } else {
                return css`
                    color: ${css`var(${svgColors[props.svgColor]})`};
                `
            }
        }}
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        gap: 0.75rem;

        @media (max-width: 768px) {
            flex-direction: column;

            button {
                width: fit-content;
            }
        }
    }

    @media (max-width: 640px) {
        margin: 0 auto;
    }
`;

export const OptionalInputDiv = styled.div`
    position: relative;
    width: 100%;

    span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.75rem;
        font-size: 0.75rem;
        color: var(--brown-200);
        transition: opacity 0.1s;
        pointer-events: none;
    }

    input:focus + span,
    input:not(:placeholder-shown) + span {
        opacity: 0;
    }

    @media (max-width: 640px) {
        width: 16rem;
    }
`;

interface baseInputProps {
    width?: string,
    error?: boolean
}

export const BaseInput = styled.input<baseInputProps>`
    background-color: var(--gray-400);
    border: 1px solid var(--gray-400);
    border-radius: 4px;
    padding: 0.75rem;
    flex-grow: 1;
    color: var(--brown-200);

    &:disabled {
        opacity: 0.8;
    }

    &:focus {
        outline: 1px solid var(--purple-500);
    }

    &::placeholder {
        color: var(--brown-200);
    }

    ${props => {
        if(props.error) {
            return css`
                border: 1px solid var(--rose-500);
                &:focus {
                    outline: none;
                }
                max-width: ${props.width};
            `;
        }

        if(props.width){
            return css`
                max-width: ${props.width};
            `;
        } else {
            return css`
                max-width: 100%;
            `;
        }
    }}

    @media (max-width: 640px) {
        max-width: 14rem;
    }
`;

export const PaymentMethodContainer = styled(CheckouMainContent)`
    >:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.75rem;

        @media (max-width: 768px) {
            width: fit-content;
            justify-content: center;
        }
    }
`;

interface paymentMethodButtonProps {
    isSelected?: boolean
}

export const PaymentMethodButton = styled.button<paymentMethodButtonProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-radius: 6px;
    padding: 1rem;
    color: var(--brown-300);
    font-size: 0.75rem;
    width: 11.25rem;
    white-space: nowrap;
    cursor: pointer;

    svg {
        flex-shrink: 0;
        color: var(--purple-500);
    }

    ${props => {
        return css`
            border: ${props.isSelected ? "1px solid var(--purple-500)" : "1px solid transparent"};
            background-color: ${props.isSelected ?  css`var(--purple-200)` : css`var(--gray-300)`}
        `;
    }}
`;
