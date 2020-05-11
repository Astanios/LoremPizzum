import React from "react";
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

const OrdersModal = ({ isOpen, closeModal, orders }) => {
    console.log("modal", orders);
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Example Modal">
            {orders && (
                <div>
                    <h1>Confirm your order:</h1>
                    {orders.map((order, i) =>
                        <div>
                            {
                                Object.entries(order).map((pizzas, i) =>
                                    <div>
                                        <p>{pizzas[0]}: {pizzas[1]}</p>
                                    </div>
                                )}
                            < br />
                        </div>
                    )}
                </div>
            )}
            <button onClick={closeModal}>close</button>

        </Modal>
    );
};
export default OrdersModal;
