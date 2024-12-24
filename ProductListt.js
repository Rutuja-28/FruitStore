import React, { useState } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";

const ProductListt = ({ onAddToCart , onEdit, onDelete }) => {
  const [products] = useState([
    { id: 1, name: "Apple", price: 150, type: "Fruit", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Fuji_apple.jpg" },
    { id: 2, name: "Banana", price: 76, type: "Fruit", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/1200px-Bananas.jpg" },
    { id: 3, name: "Broccoli", price: 175, type: "Vegetable", image: "https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg" },
    { id: 4, name: "Carrot", price: 100, type: "Vegetable", image: "https://img.freepik.com/free-photo/raw-carrot-kitchen_52683-111745.jpg" },
    { id: 5, name: "Cucumber", price: 130, type: "Vegetable", image: "https://img.freepik.com/premium-photo/cucumber-vegetable-isolated-white-background_42033-135.jpg" },
  ]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handleFilter = () => {
    return products
      .filter((product) => {
        if (minPrice && product.price < minPrice) return false;
        if (maxPrice && product.price > maxPrice) return false;
        if (typeFilter && product.type !== typeFilter) return false;
        return true;
      })
      .sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));
  };

  return (
    <>
    <div>
      <Row className="mb-3">
        <Col sm={3}>
          <Form.Control
            type="number"
            placeholder="Min Price"
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </Col>
        <Col sm={3}>
          <Form.Control
            type="number"
            placeholder="Max Price"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </Col>
        <Col sm={3}>
          <Form.Select onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Form.Select>
        </Col>
        <Col sm={3}>
          <Form.Select onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="">Filter by Type</option>
            <option value="Fruit">Fruit</option>
            <option value="Vegetable">Vegetable</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        {handleFilter().map((product) => (
          <Col sm={12} md={6} lg={4} key={product.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} style={{ height: "250px", width: "auto" }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: {product.price} Rs/Kg</Card.Text>
                <Button variant="success" onClick={() => onAddToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    <div>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Type</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.type}</td>
                <td>
                  <img src={product.image} alt={product.name} height="50" />
                </td>
                <td>
                  <button onClick={() => onEdit(product)}>Edit</button>
                  <button onClick={() => onDelete(product)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default ProductListt;