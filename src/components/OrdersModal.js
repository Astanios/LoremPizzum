import React from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "800px"
  }
};

const OrdersModal = ({ isOpen, closeModal, order, confirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal">
      {order && (
        <div>
          <h1>Confirm your order:</h1>
          {Object.entries(order).map((pizza, i) => {
            return (parseInt(pizza[1], 10) > 0 ?
              (<p>{pizza[0]}: {pizza[1]}</p>)
              :
              (null)
            );
          })}
          <button onClick={closeModal}>close</button>
          <button onClick={confirm}>confirm</button>
        </div>
      )}
    </Modal>
  );
};
export default OrdersModal;
