import React from "react";
import styled, { css } from "styled-components";

/* =====================
   Styled Component
===================== */
const StyledCard = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${({ variant }) => variant === "elevated" && css`
    background: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    &:hover { transform: translateY(-4px); }
  `}

  ${({ variant }) => variant === "bordered" && css`
    border: 1px solid #e2e8f0;
    background: #fff;
  `}

  ${({ variant }) => variant === "gradient" && css`
    background: linear-gradient(135deg, #00367e 0%, #0070f3 100%);
    color: #fff;
  `}

  ${({ variant }) => variant === "dark" && css`
    background: #1e293b;
    color: #f8fafc;
  `}

  ${({ variant }) => variant === "soft" && css`
    background: #f8fafc;
    border: 1px dashed #cbd5e1;
  `}
`;

/* =====================
   Wrapper Library Safe
===================== */
const Card = React.forwardRef(({ variant = "bordered", className, children, ...props }, ref) => {
  return <StyledCard ref={ref} variant={variant} className={className} {...props}>{children}</StyledCard>;
});

Card.displayName = "Card";
export default Card;