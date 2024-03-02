import React from "react";

const Modal = ({showModal, setShowModal}) => {
  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
    <dialog open={showModal} className="modal">
      <h2>title</h2>
      <p>this is modal content</p>
    </dialog>
    </>
  )
}
export default Modal
