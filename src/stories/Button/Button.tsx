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
  $disabled: boolean;
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
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 0.2s;
  background-color: ${({ theme }) => theme.color.base200};
  color: ${({ theme }) => theme.color.baseContent};
  border-radius: ${({ theme }) => theme.borders.roundedLg};
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.base300};
    &:active {
      animation: button-pop 0s ease-out;
      transform: scale(0.95);
    }
  }

  ${(props) =>
    props.$size === SIZES.LARGE &&
    css`
      height: 4rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      min-height: 4rem;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.$size === SIZES.SMALL &&
    css`
      height: 2rem;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      min-height: 2rem;
      font-size: 0.875rem;
    `}

  ${(props) =>
    props.$size === SIZES.TINY &&
    css`
      height: 1.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      min-height: 1.5rem;
      font-size: 0.75rem;
    `}

  ${(props) =>
    props.$type === TYPES.NEUTRAL &&
    css`
      background-color: ${({ theme }) => theme.color.base.neutral};
      color: ${({ theme }) => theme.color.base.neutralContent};

      &:hover {
        background-color: ${({ theme }) => theme.color.base.neutralFocus};
      }
    `}

  ${(props) =>
    props.$type === TYPES.PRIMARY &&
    css`
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.primaryContent};

      &:hover {
        background-color: ${({ theme }) => theme.color.primaryFocus};
      }
    `}
  ${(props) =>
    props.$type === TYPES.SECONDARY &&
    css`
      background-color: ${({ theme }) => theme.color.secondary};
      color: ${({ theme }) => theme.color.secondaryContent};

      &:hover {
        background-color: ${({ theme }) => theme.color.secondaryFocus};
      }
    `}
  ${(props) =>
    props.$type === TYPES.ACCENT &&
    css`
      background-color: ${({ theme }) => theme.color.accent};
      color: ${({ theme }) => theme.color.accentContent};

      &:hover {
        background-color: ${({ theme }) => theme.color.accentFocus};
      }
    `}
  ${(props) =>
    props.$type === TYPES.GHOST &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.color.base.content};

      &:hover {
        background-color: ${({ theme }) => theme.color.base.content + "33"};
      }
    `}
  ${(props) =>
    props.$type === TYPES.LINK &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.color.primary};

      &:hover {
        background-color: ${({ theme }) => theme.color.base300};
      }
    `}
  ${(props) =>
    props.$disabled &&
    css`
      background-color: ${({ theme }) => theme.color.base.neutral + "33"};
      color: ${({ theme }) => theme.color.base.content + "33"};
      pointer-events: none;
    `}
`;

const Button = ({
  children,
  $type,
  $size,
  $disabled,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton $type={$type} $size={$size} $disabled={$disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
