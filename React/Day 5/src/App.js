import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import MovieDetails from "./Components/MovieDetails";
import Movies from "./Components/Movies";
import Products from "./Components/Products";
import { store } from "./Redux/Store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <div className="container my-4">
                    {/* <Movies /> */}
                    <Routes>
                        <Route path="/" element={<Movies />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/movies/:movieId" element={<MovieDetails />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<Navigate to="/products" />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default App;
