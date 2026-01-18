var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert_default,
  Badge: () => Badge_default,
  Button: () => Button_default,
  Card: () => Card_default,
  Container: () => Container_default,
  Input: () => Input_default,
  Modal: () => Modal_default,
  Navbar: () => Navbar_default
});
module.exports = __toCommonJS(index_exports);

// src/lib/ui/button/Button.jsx
var import_react = __toESM(require("react"));
var import_styled_components = __toESM(require("styled-components"));
var StyledButton = import_styled_components.default.button`
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

  ${({ variant }) => variant === "primary" && import_styled_components.css`
    background: #00367e;
    color: #fff;
    &:hover:not(:disabled) { background: #002a61; }
  `}

  ${({ variant }) => variant === "outline" && import_styled_components.css`
    background: transparent;
    color: #00367e;
    border: 2px solid #00367e;
    &:hover:not(:disabled) { background: #00367e; color: #fff; }
  `}

  ${({ variant }) => variant === "danger" && import_styled_components.css`
    background: #e11d48;
    color: #fff;
    &:hover:not(:disabled) { background: #be123c; }
  `}

  ${({ variant }) => variant === "warning" && import_styled_components.css`
    background: #f59e0b;
    color: #fff;
    &:hover:not(:disabled) { background: #d97706; }
  `}

  ${({ variant }) => variant === "ghost" && import_styled_components.css`
    background: transparent;
    color: #64748b;
    &:hover:not(:disabled) { background: #f1f5f9; color: #0f172a; }
  `}
`;
var Button = import_react.default.forwardRef(({ variant = "primary", className, ...props }, ref) => {
  return /* @__PURE__ */ import_react.default.createElement(StyledButton, { ref, variant, className, ...props });
});
Button.displayName = "Button";
var Button_default = Button;

// src/lib/ui/card/Card.jsx
var import_react2 = __toESM(require("react"));
var import_styled_components2 = __toESM(require("styled-components"));
var StyledCard = import_styled_components2.default.div`
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${({ variant }) => variant === "elevated" && import_styled_components2.css`
    background: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    &:hover { transform: translateY(-4px); }
  `}

  ${({ variant }) => variant === "bordered" && import_styled_components2.css`
    border: 1px solid #e2e8f0;
    background: #fff;
  `}

  ${({ variant }) => variant === "gradient" && import_styled_components2.css`
    background: linear-gradient(135deg, #00367e 0%, #0070f3 100%);
    color: #fff;
  `}

  ${({ variant }) => variant === "dark" && import_styled_components2.css`
    background: #1e293b;
    color: #f8fafc;
  `}

  ${({ variant }) => variant === "soft" && import_styled_components2.css`
    background: #f8fafc;
    border: 1px dashed #cbd5e1;
  `}
`;
var Card = import_react2.default.forwardRef(({ variant = "bordered", className, children, ...props }, ref) => {
  return /* @__PURE__ */ import_react2.default.createElement(StyledCard, { ref, variant, className, ...props }, children);
});
Card.displayName = "Card";
var Card_default = Card;

// src/lib/ui/modal/Modal.jsx
var import_react3 = __toESM(require("react"));
var import_styled_components3 = __toESM(require("styled-components"));
var ModalOverlay = import_styled_components3.default.div`
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
var ModalDialog = import_styled_components3.default.div`
  width: 100%;
  max-width: 500px;
  margin: 1.75rem;
  display: flex;
  align-items: center;
  min-height: calc(100% - 3.5rem);
`;
var StyledModalContent = import_styled_components3.default.div`
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
  ${({ variant }) => variant === "standard" && import_styled_components3.css`
    border: 1px solid #dee2e6;
  `}

  ${({ variant }) => variant === "glass" && import_styled_components3.css`
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  `}

  ${({ variant }) => variant === "dark" && import_styled_components3.css`
    background: #1e293b;
    color: #f8fafc;
    .modal-header { border-bottom: 1px solid #334155; }
    .modal-footer { border-top: 1px solid #334155; }
  `}

  ${({ variant }) => variant === "clean" && import_styled_components3.css`
    border-radius: 0;
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    .modal-header, .modal-footer { border: none; }
  `}

  ${({ variant }) => variant === "soft-blue" && import_styled_components3.css`
    background: #f0f7ff;
    border: 1px solid #00367e;
    .modal-header { background: #00367e; color: #fff; }
  `}
`;
var ModalHeader = import_styled_components3.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #dee2e6;
`;
var ModalBody = import_styled_components3.default.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1.5rem;
`;
var ModalFooter = import_styled_components3.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  gap: 0.5rem;
  border-top: 1px solid #dee2e6;
`;
var CloseButton = import_styled_components3.default.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
  color: inherit;
  opacity: 0.5;
  &:hover { opacity: 1; }
`;
var Modal = import_react3.default.forwardRef(({
  isOpen,
  onClose,
  title,
  children,
  footer,
  variant = "standard",
  ...props
}, ref) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ import_react3.default.createElement(ModalOverlay, { onClick: onClose }, /* @__PURE__ */ import_react3.default.createElement(ModalDialog, { onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ import_react3.default.createElement(StyledModalContent, { ref, variant, ...props }, /* @__PURE__ */ import_react3.default.createElement(ModalHeader, { className: "modal-header" }, /* @__PURE__ */ import_react3.default.createElement("h5", { style: { margin: 0 } }, title), /* @__PURE__ */ import_react3.default.createElement(CloseButton, { onClick: onClose }, "\xD7")), /* @__PURE__ */ import_react3.default.createElement(ModalBody, { className: "modal-body" }, children), footer && /* @__PURE__ */ import_react3.default.createElement(ModalFooter, { className: "modal-footer" }, footer))));
});
Modal.displayName = "Modal";
var Modal_default = Modal;

// src/lib/ui/navbar/Navbar.jsx
var import_react4 = __toESM(require("react"));
var import_styled_components4 = __toESM(require("styled-components"));
var StyledNavbar = import_styled_components4.default.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;

  ${({ variant }) => variant === "fixed" && import_styled_components4.css`
    position: fixed;
    top: 0;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  `}

  ${({ variant }) => variant === "glassmorphism" && import_styled_components4.css`
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

  ${({ variant }) => variant === "dark" && import_styled_components4.css`
    background: #0f172a;
    color: #fff;
  `}

  ${({ variant }) => variant === "bordered" && import_styled_components4.css`
    border-bottom: 1px solid #e2e8f0;
    background: transparent;
  `}

  ${({ variant }) => variant === "sticky" && import_styled_components4.css`
    position: sticky;
    top: 0;
    background: #fff;
  `}
`;
var Navbar = import_react4.default.forwardRef(({ variant = "fixed", className, children, ...props }, ref) => {
  return /* @__PURE__ */ import_react4.default.createElement(StyledNavbar, { ref, variant, className, ...props }, children);
});
Navbar.displayName = "Navbar";
var Navbar_default = Navbar;

// src/lib/ui/badge/Badge.jsx
var import_react5 = __toESM(require("react"));
var import_styled_components5 = __toESM(require("styled-components"));
var StyledBadge = import_styled_components5.default.span`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  ${({ variant }) => variant === "success" && import_styled_components5.css`
    background: #dcfce7;
    color: #166534;
  `}

  ${({ variant }) => variant === "error" && import_styled_components5.css`
    background: #fee2e2;
    color: #991b1b;
  `}

  ${({ variant }) => variant === "warning" && import_styled_components5.css`
    background: #fef3c7;
    color: #92400e;
  `}

  ${({ variant }) => variant === "info" && import_styled_components5.css`
    background: #dbeafe;
    color: #1e40af;
  `}

  ${({ variant }) => variant === "neutral" && import_styled_components5.css`
    background: #f1f5f9;
    color: #475569;
  `}
`;
var Badge = import_react5.default.forwardRef(({ variant = "neutral", className, children, ...props }, ref) => {
  return /* @__PURE__ */ import_react5.default.createElement(StyledBadge, { ref, variant, className, ...props }, children);
});
Badge.displayName = "Badge";
var Badge_default = Badge;

// src/lib/ui/input/Input.jsx
var import_react6 = __toESM(require("react"));
var import_styled_components6 = __toESM(require("styled-components"));
var StyledInput = import_styled_components6.default.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  outline: none;
  font-family: inherit;

  ${({ variant }) => variant === "default" && import_styled_components6.css`
    border: 1px solid #cbd5e1;
    &:focus { border-color: #00367e; box-shadow: 0 0 0 3px rgba(0, 54, 126, 0.1); }
  `}

  ${({ variant }) => variant === "filled" && import_styled_components6.css`
    background: #f1f5f9;
    border: 1px solid transparent;
    &:focus { background: #fff; border-color: #00367e; }
  `}

  ${({ variant }) => variant === "error" && import_styled_components6.css`
    border: 1px solid #ef4444;
    background: #fef2f2;
    &:focus { border-color: #dc2626; }
  `}

  ${({ variant }) => variant === "success" && import_styled_components6.css`
    border: 1px solid #10b981;
    &:focus { border-color: #059669; }
  `}

  ${({ variant }) => variant === "flushed" && import_styled_components6.css`
    border: none;
    border-bottom: 2px solid #e2e8f0;
    border-radius: 0;
    padding-left: 0;
    &:focus { border-bottom-color: #00367e; }
  `}
`;
var Input = import_react6.default.forwardRef(({ variant = "default", className, ...props }, ref) => {
  return /* @__PURE__ */ import_react6.default.createElement(StyledInput, { ref, variant, className, ...props });
});
Input.displayName = "Input";
var Input_default = Input;

// src/lib/ui/alert/Alert.jsx
var import_react7 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));
var StyledAlert = import_styled_components7.default.div`
  padding: 1rem;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ variant }) => variant === "info" && import_styled_components7.css`
    background: #eff6ff;
    color: #1d4ed8;
    border: 1px solid #bfdbfe;
  `}

  ${({ variant }) => variant === "success" && import_styled_components7.css`
    background: #f0fdf4;
    color: #15803d;
    border: 1px solid #bbf7d0;
  `}

  ${({ variant }) => variant === "destructive" && import_styled_components7.css`
    background: #fef2f2;
    color: #b91c1c;
    border: 1px solid #fecaca;
  `}

  ${({ variant }) => variant === "warning" && import_styled_components7.css`
    background: #fffbeb;
    color: #b45309;
    border: 1px solid #fef3c7;
  `}

  ${({ variant }) => variant === "accent" && import_styled_components7.css`
    background: #00367e;
    color: #fff;
    border-left: 6px solid #00a4ff;
  `}
`;
var Alert = import_react7.default.forwardRef(({ variant = "info", className, children, ...props }, ref) => {
  return /* @__PURE__ */ import_react7.default.createElement(StyledAlert, { ref, variant, className, ...props }, children);
});
Alert.displayName = "Alert";
var Alert_default = Alert;

// src/lib/ui/container/Container.jsx
var import_react8 = __toESM(require("react"));
var import_styled_components8 = __toESM(require("styled-components"));
var StyledContainer = import_styled_components8.default.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  transition: all 0.3s ease;

  ${({ variant }) => variant === "standard" && import_styled_components8.css`
    max-width: 1280px;
  `}

  ${({ variant }) => variant === "narrow" && import_styled_components8.css`
    max-width: 800px;
  `}

  ${({ variant }) => variant === "wide" && import_styled_components8.css`
    max-width: 1536px;
  `}

  ${({ variant }) => variant === "full" && import_styled_components8.css`
    max-width: 100%;
  `}

  ${({ variant }) => variant === "fluid" && import_styled_components8.css`
    max-width: 100%;
    padding: 0 2rem;
  `}
`;
var Container = import_react8.default.forwardRef(({ variant = "standard", className, children, ...props }, ref) => {
  return /* @__PURE__ */ import_react8.default.createElement(StyledContainer, { ref, variant, className, ...props }, children);
});
Container.displayName = "Container";
var Container_default = Container;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Badge,
  Button,
  Card,
  Container,
  Input,
  Modal,
  Navbar
});
//# sourceMappingURL=index.js.map