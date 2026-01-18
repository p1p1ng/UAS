"use client";
import React from "react";
import styled, { css } from "styled-components";

/* =====================
   Styled Component
===================== */
const StyledButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ variant }) => variant === "primary" && css`
    background: #00367e;
    color: #fff;
    &:hover:not(:disabled) { background: #002a61; }
  `}

  ${({ variant }) => variant === "outline" && css`
    background: transparent;
    color: #00367e;
    border: 2px solid #00367e;
    &:hover:not(:disabled) { background: #00367e; color: #fff; }
  `}

  ${({ variant }) => variant === "danger" && css`
    background: #e11d48;
    color: #fff;
    &:hover:not(:disabled) { background: #be123c; }
  `}

  ${({ variant }) => variant === "warning" && css`
    background: #f59e0b;
    color: #fff;
    &:hover:not(:disabled) { background: #d97706; }
  `}

  ${({ variant }) => variant === "ghost" && css`
    background: transparent;
    color: #64748b;
    &:hover:not(:disabled) { background: #f1f5f9; color: #0f172a; }
  `}
`;

/* =====================
   Wrapper Library Safe
===================== */
const Button = React.forwardRef(({ variant = "primary", className, ...props }, ref) => {
  return <StyledButton ref={ref} variant={variant} className={className} {...props} />;
});

Button.displayName = "Button";
export default Button;