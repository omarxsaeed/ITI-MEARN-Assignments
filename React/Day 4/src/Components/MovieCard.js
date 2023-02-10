import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <Link to={`/movies/${movie.id}`}>
            <Card style={{ width: "18rem" }}>
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
            </Card>
        </Link>
    );
}

export default MovieCard;
