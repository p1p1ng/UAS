"use client";
import React from "react";
import styled, { css } from "styled-components";

/* =====================
   Styled Component
===================== */
const StyledContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  transition: all 0.3s ease;

  ${({ variant }) => variant === "standard" && css`
    max-width: 1280px;
  `}

  ${({ variant }) => variant === "narrow" && css`
    max-width: 800px;
  `}

  ${({ variant }) => variant === "wide" && css`
    max-width: 1536px;
  `}

  ${({ variant }) => variant === "full" && css`
    max-width: 100%;
  `}

  ${({ variant }) => variant === "fluid" && css`
    max-width: 100%;
    padding: 0 2rem;
  `}
`;

/* =====================
   Wrapper Library Safe
===================== */
const Container = React.forwardRef(({ variant = "standard", className, children, ...props }, ref) => {
  return (
    <StyledContainer ref={ref} variant={variant} className={className} {...props}>
      {children}
    </StyledContainer>
  );
});

Container.displayName = "Container";
export default Container;