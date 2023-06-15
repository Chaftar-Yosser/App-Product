import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rdeux-toolkit/slices/products-slice";
import { addToCart } from "../rdeux-toolkit/slices/cart-slices";

function Products() {
  const products = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [0]);

  return (
    <Container className="py-5">
      <Row className="py-5">
        {products.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img  style={{ height: "300px" }} variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}$</Card.Text>
                <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
