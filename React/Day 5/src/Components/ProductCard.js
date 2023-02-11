import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ product }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.thumbnail} style={{ height: "15rem" }} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <Button variant="success">Add to Cart</Button>
        </Card>
    );
}

export default ProductCard;
