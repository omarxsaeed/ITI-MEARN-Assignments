import React from "react";

function Sort({ sort }) {
    return (
        <div>
            <h2>Categories </h2>
            <div className="d-flex flex-wrap gap-3 my-3">
                <button key={0} className="btn btn-secondary" onClick={() => sort("asc")}>
                    Sort by Price <i className="bi bi-caret-up-fill"></i>
                </button>
                <button key={1} className="btn btn-secondary" onClick={() => sort("des")}>
                    Sort by Price <i className="bi bi-caret-down-fill"></i>
                </button>
            </div>
        </div>
    );
}

export default Sort;
