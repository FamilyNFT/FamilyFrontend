import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  },
};

export default function Modal({
  __isOpen,
  dispatchModal,
  children,
}: {
  __isOpen: boolean;
  dispatchModal: () => void;
  children: any;
}) {
  const closeModal = () => {
    dispatchModal();
  };
  return (
    <ReactModal
      isOpen={__isOpen}
      className="overflow-y-auto overflow-x-hidden fixed top-5 right-0 left-0 w-full md:inset-0 h-modal md:h-full z-[1000] bg-transparent  flex justify-center items-center"
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      // style={customStyles}
    >
      {children}
    </ReactModal>
  );
}
