import { ReactNode } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, children, setIsOpen }: ModalProps) {
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={isOpen}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "740px",
          border: "none",
          zIndex: 5,
        },
        overlay: {
          backgroundColor: "#121214e6",
          zIndex: 5,
        },
      }}
    >
      {children}
    </ReactModal>
  );
}
