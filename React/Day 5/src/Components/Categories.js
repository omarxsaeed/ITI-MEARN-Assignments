function Categories({ filter }) {
    let categories = JSON.parse(localStorage.getItem("categories"));

    return (
        <div>
            <h2>Categories</h2>
            <div className="d-flex flex-wrap gap-3 my-3">
                <button key={0} className="btn btn-secondary" onClick={() => filter("all")}>
                    All
                </button>
                {categories.map((category, index) => (
                    <button key={index + 1} className="btn btn-secondary" onClick={() => filter(category)}>
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Categories;
