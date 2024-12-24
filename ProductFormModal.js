import React, { useState } from "react";

function ProductFormModal({ product, onSave, onClose }) {
  const [formData, setFormData] = useState(
    product || { name: "", price: "", type: "", image: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product ? "Edit Product" : "Add Product"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Type:
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Image URL:
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductFormModal;
