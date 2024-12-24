import React from "react";

function DeleteConfirmationModal({ product, onDelete, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Delete Product</h2>
        <p>Are you sure you want to delete {product.name}?</p>
        <div>
          <button onClick={onDelete}>Yes, Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
