import React, { useState } from "react";
import headImg from "../head.png";
import tailImg from "../tail.png";
function CoinFlip() {
    const [totalFlips, setTotalFlips] = useState(0);
    const [headsCount, setHeadsCount] = useState(0);
    const [tailsCount, setTailsCount] = useState(0);
    const [currFace, setCurrFace] = useState();

    function flip() {
        let coinProbability = 0.5;
        if (Math.random() < coinProbability) {
            setHeadsCount(headsCount + 1);
            setCurrFace(headImg);
        } else {
            setTailsCount(tailsCount + 1);
            setCurrFace(tailImg);
        }
        setTotalFlips(totalFlips + 1);
    }

    return (
        <div className="container-fluid d-flex align-items-center flex-column gap-3">
            <h1>Let's flip a coin</h1>
            {currFace && <img src={currFace} alt="Coin" />}
            <button className="btn btn-secondary" onClick={() => flip()}>
                Flip Me!
            </button>
            <p>
                Out of {totalFlips} flips, there have been {headsCount} heads and {tailsCount} tails.
            </p>
        </div>
    );
}

export default CoinFlip;
