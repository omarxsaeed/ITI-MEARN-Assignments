import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function Movies() {
    let [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/movie/popular?api_key=eb03df251074313f6e24c705f23a1cdc")
            .then((res) => {
                setMovies(res.data.results);
            });
    }, []);
    return (
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
}

export default Movies;
