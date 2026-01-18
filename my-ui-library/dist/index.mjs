// src/lib/ui/button/Button.jsx
import React from "react";
import styled, { css } from "styled-components";
var StyledButton = styled.button`
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
var Button = React.forwardRef(({ variant = "primary", className, ...props }, ref) => {
  return /* @__PURE__ */ React.createElement(StyledButton, { ref, variant, className, ...props });
});
Button.displayName = "Button";
var Button_default = Button;

// src/lib/ui/card/Card.jsx
import React2 from "react";
import styled2, { css as css2 } from "styled-components";
var StyledCard = styled2.div`
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${({ variant }) => variant === "elevated" && css2`
    background: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    &:hover { transform: translateY(-4px); }
  `}

  ${({ variant }) => variant === "bordered" && css2`
    border: 1px solid #e2e8f0;
    background: #fff;
  `}

  ${({ variant }) => variant === "gradient" && css2`
    background: linear-gradient(135deg, #00367e 0%, #0070f3 100%);
    color: #fff;
  `}

  ${({ variant }) => variant === "dark" && css2`
    background: #1e293b;
    color: #f8fafc;
  `}

  ${({ variant }) => variant === "soft" && css2`
    background: #f8fafc;
    border: 1px dashed #cbd5e1;
  `}
`;
var Card = React2.forwardRef(({ variant = "bordered", className, children, ...props }, ref) => {
  return /* @__PURE__ */ React2.createElement(StyledCard, { ref, variant, className, ...props }, children);
});
Card.displayName = "Card";
var Card_default = Card;

// src/lib/ui/modal/Modal.jsx
import React3 from "react";
import styled3, { css as css3 } from "styled-components";
var ModalOverlay = styled3.div`
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
var ModalDialog = styled3.div`
  width: 100%;
  max-width: 500px;
  margin: 1.75rem;
  display: flex;
  align-items: center;
  min-height: calc(100% - 3.5rem);
`;
var StyledModalContent = styled3.div`
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
  ${({ variant }) => variant === "standard" && css3`
    border: 1px solid #dee2e6;
  `}

  ${({ variant }) => variant === "glass" && css3`
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  `}

  ${({ variant }) => variant === "dark" && css3`
    background: #1e293b;
    color: #f8fafc;
    .modal-header { border-bottom: 1px solid #334155; }
    .modal-footer { border-top: 1px solid #334155; }
  `}

  ${({ variant }) => variant === "clean" && css3`
    border-radius: 0;
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    .modal-header, .modal-footer { border: none; }
  `}

  ${({ variant }) => variant === "soft-blue" && css3`
    background: #f0f7ff;
    border: 1px solid #00367e;
    .modal-header { background: #00367e; color: #fff; }
  `}
`;
var ModalHeader = styled3.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #dee2e6;
`;
var ModalBody = styled3.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1.5rem;
`;
var ModalFooter = styled3.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  gap: 0.5rem;
  border-top: 1px solid #dee2e6;
`;
var CloseButton = styled3.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
  color: inherit;
  opacity: 0.5;
  &:hover { opacity: 1; }
`;
var Modal = React3.forwardRef(({
  isOpen,
  onClose,
  title,
  children,
  footer,
  variant = "standard",
  ...props
}, ref) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ React3.createElement(ModalOverlay, { onClick: onClose }, /* @__PURE__ */ React3.createElement(ModalDialog, { onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React3.createElement(StyledModalContent, { ref, variant, ...props }, /* @__PURE__ */ React3.createElement(ModalHeader, { className: "modal-header" }, /* @__PURE__ */ React3.createElement("h5", { style: { margin: 0 } }, title), /* @__PURE__ */ React3.createElement(CloseButton, { onClick: onClose }, "\xD7")), /* @__PURE__ */ React3.createElement(ModalBody, { className: "modal-body" }, children), footer && /* @__PURE__ */ React3.createElement(ModalFooter, { className: "modal-footer" }, footer))));
});
Modal.displayName = "Modal";
var Modal_default = Modal;

// src/lib/ui/navbar/Navbar.jsx
import React4 from "react";
import styled4, { css as css4 } from "styled-components";
var StyledNavbar = styled4.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;

  ${({ variant }) => variant === "fixed" && css4`
    position: fixed;
    top: 0;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  `}

  ${({ variant }) => variant === "glassmorphism" && css4`
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

  ${({ variant }) => variant === "dark" && css4`
    background: #0f172a;
    color: #fff;
  `}

  ${({ variant }) => variant === "bordered" && css4`
    border-bottom: 1px solid #e2e8f0;
    background: transparent;
  `}

  ${({ variant }) => variant === "sticky" && css4`
    position: sticky;
    top: 0;
    background: #fff;
  `}
`;
var Navbar = React4.forwardRef(({ variant = "fixed", className, children, ...props }, ref) => {
  return /* @__PURE__ */ React4.createElement(StyledNavbar, { ref, variant, className, ...props }, children);
});
Navbar.displayName = "Navbar";
var Navbar_default = Navbar;

// src/lib/ui/badge/Badge.jsx
import React5 from "react";
import styled5, { css as css5 } from "styled-components";
var StyledBadge = styled5.span`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  ${({ variant }) => variant === "success" && css5`
    background: #dcfce7;
    color: #166534;
  `}

  ${({ variant }) => variant === "error" && css5`
    background: #fee2e2;
    color: #991b1b;
  `}

  ${({ variant }) => variant === "warning" && css5`
    background: #fef3c7;
    color: #92400e;
  `}

  ${({ variant }) => variant === "info" && css5`
    background: #dbeafe;
    color: #1e40af;
  `}

  ${({ variant }) => variant === "neutral" && css5`
    background: #f1f5f9;
    color: #475569;
  `}
`;
var Badge = React5.forwardRef(({ variant = "neutral", className, children, ...props }, ref) => {
  return /* @__PURE__ */ React5.createElement(StyledBadge, { ref, variant, className, ...props }, children);
});
Badge.displayName = "Badge";
var Badge_default = Badge;

// src/lib/ui/input/Input.jsx
import React6 from "react";
import styled6, { css as css6 } from "styled-components";
var StyledInput = styled6.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  outline: none;
  font-family: inherit;

  ${({ variant }) => variant === "default" && css6`
    border: 1px solid #cbd5e1;
    &:focus { border-color: #00367e; box-shadow: 0 0 0 3px rgba(0, 54, 126, 0.1); }
  `}

  ${({ variant }) => variant === "filled" && css6`
    background: #f1f5f9;
    border: 1px solid transparent;
    &:focus { background: #fff; border-color: #00367e; }
  `}

  ${({ variant }) => variant === "error" && css6`
    border: 1px solid #ef4444;
    background: #fef2f2;
    &:focus { border-color: #dc2626; }
  `}

  ${({ variant }) => variant === "success" && css6`
    border: 1px solid #10b981;
    &:focus { border-color: #059669; }
  `}

  ${({ variant }) => variant === "flushed" && css6`
    border: none;
    border-bottom: 2px solid #e2e8f0;
    border-radius: 0;
    padding-left: 0;
    &:focus { border-bottom-color: #00367e; }
  `}
`;
var Input = React6.forwardRef(({ variant = "default", className, ...props }, ref) => {
  return /* @__PURE__ */ React6.createElement(StyledInput, { ref, variant, className, ...props });
});
Input.displayName = "Input";
var Input_default = Input;

// src/lib/ui/alert/Alert.jsx
import React7 from "react";
import styled7, { css as css7 } from "styled-components";
var StyledAlert = styled7.div`
  padding: 1rem;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ variant }) => variant === "info" && css7`
    background: #eff6ff;
    color: #1d4ed8;
    border: 1px solid #bfdbfe;
  `}

  ${({ variant }) => variant === "success" && css7`
    background: #f0fdf4;
    color: #15803d;
    border: 1px solid #bbf7d0;
  `}

  ${({ variant }) => variant === "destructive" && css7`
    background: #fef2f2;
    color: #b91c1c;
    border: 1px solid #fecaca;
  `}

  ${({ variant }) => variant === "warning" && css7`
    background: #fffbeb;
    color: #b45309;
    border: 1px solid #fef3c7;
  `}

  ${({ variant }) => variant === "accent" && css7`
    background: #00367e;
    color: #fff;
    border-left: 6px solid #00a4ff;
  `}
`;
var Alert = React7.forwardRef(({ variant = "info", className, children, ...props }, ref) => {
  return /* @__PURE__ */ React7.createElement(StyledAlert, { ref, variant, className, ...props }, children);
});
Alert.displayName = "Alert";
var Alert_default = Alert;

// src/lib/ui/container/Container.jsx
import React8 from "react";
import styled8, { css as css8 } from "styled-components";
var StyledContainer = styled8.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  transition: all 0.3s ease;

  ${({ variant }) => variant === "standard" && css8`
    max-width: 1280px;
  `}

  ${({ variant }) => variant === "narrow" && css8`
    max-width: 800px;
  `}

  ${({ variant }) => variant === "wide" && css8`
    max-width: 1536px;
  `}

  ${({ variant }) => variant === "full" && css8`
    max-width: 100%;
  `}

  ${({ variant }) => variant === "fluid" && css8`
    max-width: 100%;
    padding: 0 2rem;
  `}
`;
var Container = React8.forwardRef(({ variant = "standard", className, children, ...props }, ref) => {
  return /* @__PURE__ */ React8.createElement(StyledContainer, { ref, variant, className, ...props }, children);
});
Container.displayName = "Container";
var Container_default = Container;
export {
  Alert_default as Alert,
  Badge_default as Badge,
  Button_default as Button,
  Card_default as Card,
  Container_default as Container,
  Input_default as Input,
  Modal_default as Modal,
  Navbar_default as Navbar
};
//# sourceMappingURL=index.mjs.map