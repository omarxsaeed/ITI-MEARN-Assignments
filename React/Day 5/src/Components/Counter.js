import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "../Redux/counterSlice";

function Counter() {
    const dispatch = useDispatch();
    let counter = useSelector((state) => state.counterReducer.counter);
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h2>Counter App</h2>
            <div>
                <div className="d-flex gap-3 fs-4">
                    <button
                        onClick={() => dispatch(decreaseCounter())}
                        className="btn btn-dark p-2 d-inline bi bi-dash"
                    ></button>
                    <p>{counter}</p>
                    <button
                        onClick={() => dispatch(increaseCounter())}
                        className="btn btn-dark p-2 d-inline bi bi-plus"
                    ></button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
