import React from "react"
import { IButtonProps } from "./Button.types"
import { ButtonWrapper } from "./Button.styled"

export const Button: React.FC<IButtonProps> = React.forwardRef(({ clickHandler, buttonName }, ref) => (
  <ButtonWrapper
    role="button"
    aria-label={buttonName}
    onClick={clickHandler}
    onKeyDown={clickHandler}
    tabIndex={0}
    ref={ref}
  >
    {buttonName}
  </ButtonWrapper>
))
