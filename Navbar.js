import React from "react";
import { Navbar, Container, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const AppNavbar = ({ totalPrice }) => (
  <Navbar bg="light" className="mb-4">
    <Container className="d-flex justify-content-between">
      <Navbar.Brand className="text-success fw-bold">
        GFG Fruit & Vegetable Market
      </Navbar.Brand>
      <div className="d-flex align-items-center">
        <span className="me-3 fw-bold">Total Price: {totalPrice} Rs</span>
        <FaShoppingCart size={24} className="text-success" />
        <Badge bg="danger" className="ms-2">0</Badge>
      </div>
    </Container>
  </Navbar>
);

export default AppNavbar;