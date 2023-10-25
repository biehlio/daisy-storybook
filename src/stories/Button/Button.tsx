import React from "react";
import styled, { css } from "styled-components";

export const TYPES = {
  DEFAULT: "default",
  NEUTRAL: "neutral",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ACCENT: "accent",
  GHOST: "ghost",
  LINK: "link",
};

export const SIZES = {
  NORMAL: "normal",
  LARGE: "large",
  SMALL: "small",
  TINY: "tiny",
};

interface WrapperProps {
  $type: (typeof TYPES)[keyof typeof TYPES];
  $size: (typeof SIZES)[keyof typeof SIZES];
}

export interface ButtonProps extends WrapperProps {
  children: string;
  onClick: () => void;
}

const StyledButton = styled.button<WrapperProps>`
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  height: 3rem;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 3rem;
  line-height: 1em;
  gap: 0.5rem;
  font-weight: 400;
  text-decoration-line: none;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.base200};
  border-radius: ${({ theme }) => theme.borders.roundedLg};
  color: ${({ theme }) => theme.color.baseContent};
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.base300};
  }

  ${(props) => props.$type === TYPES.PRIMARY && css``}
`;

const Button = ({ children, $type, $size, ...props }: ButtonProps) => {
  return (
    <StyledButton $type={$type} $size={$size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
