"use client";
import React from "react";
import styled, { css } from "styled-components";

/* =====================
   Styled Component
===================== */
const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  outline: none;
  font-family: inherit;

  ${({ variant }) => variant === "default" && css`
    border: 1px solid #cbd5e1;
    &:focus { border-color: #00367e; box-shadow: 0 0 0 3px rgba(0, 54, 126, 0.1); }
  `}

  ${({ variant }) => variant === "filled" && css`
    background: #f1f5f9;
    border: 1px solid transparent;
    &:focus { background: #fff; border-color: #00367e; }
  `}

  ${({ variant }) => variant === "error" && css`
    border: 1px solid #ef4444;
    background: #fef2f2;
    &:focus { border-color: #dc2626; }
  `}

  ${({ variant }) => variant === "success" && css`
    border: 1px solid #10b981;
    &:focus { border-color: #059669; }
  `}

  ${({ variant }) => variant === "flushed" && css`
    border: none;
    border-bottom: 2px solid #e2e8f0;
    border-radius: 0;
    padding-left: 0;
    &:focus { border-bottom-color: #00367e; }
  `}
`;

/* =====================
   Wrapper Library Safe
===================== */
const Input = React.forwardRef(({ variant = "default", className, ...props }, ref) => {
  return <StyledInput ref={ref} variant={variant} className={className} {...props} />;
});

Input.displayName = "Input";
export default Input;