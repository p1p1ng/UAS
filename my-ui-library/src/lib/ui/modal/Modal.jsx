"use client";
import React from "react";
import styled, { css } from "styled-components";

/* =====================
   Styled Component
===================== */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const ModalDialog = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 1.75rem;
  display: flex;
  align-items: center;
  min-height: calc(100% - 3.5rem);
`;

const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  outline: 0;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  /* Variasi Styling */
  ${({ variant }) => variant === "standard" && css`
    border: 1px solid #dee2e6;
  `}

  ${({ variant }) => variant === "glass" && css`
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  `}

  ${({ variant }) => variant === "dark" && css`
    background: #1e293b;
    color: #f8fafc;
    .modal-header { border-bottom: 1px solid #334155; }
    .modal-footer { border-top: 1px solid #334155; }
  `}

  ${({ variant }) => variant === "clean" && css`
    border-radius: 0;
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    .modal-header, .modal-footer { border: none; }
  `}

  ${({ variant }) => variant === "soft-blue" && css`
    background: #f0f7ff;
    border: 1px solid #00367e;
    .modal-header { background: #00367e; color: #fff; }
  `}
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #dee2e6;
`;

const ModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1.5rem;
`;

const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  gap: 0.5rem;
  border-top: 1px solid #dee2e6;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
  color: inherit;
  opacity: 0.5;
  &:hover { opacity: 1; }
`;

/* =====================
   Wrapper Library Safe
===================== */
const Modal = React.forwardRef(({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer, 
  variant = "standard", 
  ...props 
}, ref) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalDialog onClick={(e) => e.stopPropagation()}>
        <StyledModalContent ref={ref} variant={variant} {...props}>
          
          <ModalHeader className="modal-header">
            <h5 style={{ margin: 0 }}>{title}</h5>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </ModalHeader>

          <ModalBody className="modal-body">
            {children}
          </ModalBody>

          {footer && (
            <ModalFooter className="modal-footer">
              {footer}
            </ModalFooter>
          )}

        </StyledModalContent>
      </ModalDialog>
    </ModalOverlay>
  );
});

Modal.displayName = "Modal";

export default Modal;