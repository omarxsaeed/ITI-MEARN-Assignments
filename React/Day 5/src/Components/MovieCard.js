import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

function MovieCard({ movie }) {
    const dispatch = useDispatch();
    return (
        <Card style={{ width: "18rem" }}>
            <Link to={`/movies/${movie.id}`}>
                <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    style={{ width: "100%" }}
                />
                <Card.Body className="d-flex justify-content-between">
                    <Card.Title className="w-75">{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.vote_average}
                        <i className="bi bi-star-fill text-warning"></i>
                    </Card.Text>
                </Card.Body>
            </Link>
            <Button variant="success" onClick={() => dispatch(addToCart({ ...movie, quantity: 1 }))}>
                Add to Cart
            </Button>
        </Card>
    );
}

export default MovieCard;
