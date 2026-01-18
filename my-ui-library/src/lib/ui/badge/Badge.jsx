"use client";
import React from "react";
import styled, { css } from "styled-components";

/* =====================
   Styled Component
===================== */
const StyledBadge = styled.span`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  ${({ variant }) => variant === "success" && css`
    background: #dcfce7;
    color: #166534;
  `}

  ${({ variant }) => variant === "error" && css`
    background: #fee2e2;
    color: #991b1b;
  `}

  ${({ variant }) => variant === "warning" && css`
    background: #fef3c7;
    color: #92400e;
  `}

  ${({ variant }) => variant === "info" && css`
    background: #dbeafe;
    color: #1e40af;
  `}

  ${({ variant }) => variant === "neutral" && css`
    background: #f1f5f9;
    color: #475569;
  `}
`;

/* =====================
   Wrapper Library Safe
===================== */
const Badge = React.forwardRef(({ variant = "neutral", className, children, ...props }, ref) => {
  return <StyledBadge ref={ref} variant={variant} className={className} {...props}>{children}</StyledBadge>;
});

Badge.displayName = "Badge";
export default Badge;