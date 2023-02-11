import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../Redux/cartSlice";
import "./cart.css";

function Cart() {
    const dispatch = useDispatch();
    let cart = useSelector((state) => state.cartReducer.cart);
    return (
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <h2>Shopping Cart</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Poster</th>
                        <th scope="col">Movie Name</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((movie, index) => (
                        <tr key={index}>
                            <th scope="row">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                    style={{ width: "6rem" }}
                                />
                            </th>
                            <td>{movie.title}</td>
                            <td>{Math.round(movie.vote_average)}</td>
                            <td>
                                <div className="d-flex gap-3 fs-4">
                                    <button
                                        onClick={() => dispatch(decreaseQuantity(index))}
                                        className="btn btn-dark p-2 d-inline bi bi-dash"
                                    ></button>
                                    <p>{movie.quantity}</p>
                                    <button
                                        onClick={() => dispatch(increaseQuantity(index))}
                                        className="btn btn-dark p-2 d-inline bi bi-plus"
                                    ></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
