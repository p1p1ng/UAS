"use client";
import React from "react";
import styled, { css } from "styled-components";

/* =====================
   Styled Component
===================== */
const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;

  ${({ variant }) => variant === "fixed" && css`
    position: fixed;
    top: 0;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  `}

  ${({ variant }) => variant === "glassmorphism" && css`
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 1200px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  `}

  ${({ variant }) => variant === "dark" && css`
    background: #0f172a;
    color: #fff;
  `}

  ${({ variant }) => variant === "bordered" && css`
    border-bottom: 1px solid #e2e8f0;
    background: transparent;
  `}

  ${({ variant }) => variant === "sticky" && css`
    position: sticky;
    top: 0;
    background: #fff;
  `}
`;

/* =====================
   Wrapper Library Safe
===================== */
const Navbar = React.forwardRef(({ variant = "fixed", className, children, ...props }, ref) => {
  return (
    <StyledNavbar ref={ref} variant={variant} className={className} {...props}>
      {children}
    </StyledNavbar>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;