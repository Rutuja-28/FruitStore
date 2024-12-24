import React, { useState } from "react";
import AppNavbar from "./components/Navbar";
import ProductListt from "./components/ProductListt";
import { Container } from "react-bootstrap";
// import ProductList from "./components/ProductListt";
import ProductFormModal from "./components/ProductFormModal";
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";


const App = () => {
  const [cart, setCart] = useState([]);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const [products, setProducts] = useState("");
  const [modalData, setModalData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const openFormModal = (product = null) => setModalData(product);
  const closeFormModal = () => setModalData(null);
  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };
  const closeDeleteModal = () => setShowDeleteModal(false);

  const saveProduct = (product) => {
    if (product.id) {
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      const newProduct = { ...product, id: Date.now() };
      setProducts((prev) => [...prev, newProduct]);
    }
    closeFormModal();
  };

  const deleteProduct = () => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== productToDelete.id)
    );
    closeDeleteModal();
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
    <AppNavbar totalPrice={totalPrice} />
    <div style={{ padding: "20px" }}>
    <Container>
        <h1 className="text-center">Product List</h1>
      </Container>
    <button onClick={() => openFormModal()} style={{ marginBottom: "20px" }}>
      Add Product
    </button>
    <ProductListt onAddToCart={handleAddToCart} 
      products={products}
      onEdit={openFormModal}
      onDelete={openDeleteModal}
    />
    {modalData && (
      <ProductFormModal
        product={modalData}
        onSave={saveProduct}
        onClose={closeFormModal}
      />
    )}
    {showDeleteModal && (
      <DeleteConfirmationModal
        product={productToDelete}
        onDelete={deleteProduct}
        onClose={closeDeleteModal}
      />
    )}
  </div>
  </>
  );
};

export default App;