import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose, children }) {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    console.log("event.target", event.target);
    console.log("modalRef.current", modalRef.current);
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",

        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      Modal
      <div>{children}</div>
      <button onClick={onClose}>Close Modal</button>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
