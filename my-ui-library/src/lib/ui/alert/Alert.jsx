"use client";
import React from "react";
import styled, { css } from "styled-components";

/* =====================
   Styled Component
===================== */
const StyledAlert = styled.div`
  padding: 1rem;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ variant }) => variant === "info" && css`
    background: #eff6ff;
    color: #1d4ed8;
    border: 1px solid #bfdbfe;
  `}

  ${({ variant }) => variant === "success" && css`
    background: #f0fdf4;
    color: #15803d;
    border: 1px solid #bbf7d0;
  `}

  ${({ variant }) => variant === "destructive" && css`
    background: #fef2f2;
    color: #b91c1c;
    border: 1px solid #fecaca;
  `}

  ${({ variant }) => variant === "warning" && css`
    background: #fffbeb;
    color: #b45309;
    border: 1px solid #fef3c7;
  `}

  ${({ variant }) => variant === "accent" && css`
    background: #00367e;
    color: #fff;
    border-left: 6px solid #00a4ff;
  `}
`;

/* =====================
   Wrapper Library Safe
===================== */
const Alert = React.forwardRef(({ variant = "info", className, children, ...props }, ref) => {
  return <StyledAlert ref={ref} variant={variant} className={className} {...props}>{children}</StyledAlert>;
});

Alert.displayName = "Alert";
export default Alert;