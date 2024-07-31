import { ComponentProps } from "react";

import { DefaultButton } from "./Button.styles";

interface ButtonProps extends ComponentProps<'button'>{
    variant: 'lightPurple' | 'lightYellow' | 'darkPurple' | 'yellow'
}

export const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <DefaultButton {...props} variant={variant} />
  )
}