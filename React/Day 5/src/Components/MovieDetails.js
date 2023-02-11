import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/cartSlice";

function MovieDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    let [movie, setMovie] = useState({});
    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=eb03df251074313f6e24c705f23a1cdc&language=en-US`
            )
            .then((res) => {
                setMovie(res.data);
            });
    }, [params.movieId]);

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            <h3>The Plot</h3>
            <p>{movie.overview}</p>
            <button className="btn btn-info" onClick={() => dispatch(addToCart({ ...movie, quantity: 1 }))}>
                Add To Cart
            </button>
        </div>
    );
}

export default MovieDetails;
