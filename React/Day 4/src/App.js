import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import MovieDetails from "./Components/MovieDetails";
import Movies from "./Components/Movies";
import Products from "./Components/Products";

function App() {
    return (
        <div>
            <Header />
            <div className="container my-4">
                {/* <Movies /> */}
                <Routes>
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />} />
                    {/* <Route path="*" element={<Navigate to="/products" />} /> */}
                </Routes>
            </div>
        </div>
    );
}

export default App;
