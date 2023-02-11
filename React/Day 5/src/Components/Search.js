function Search({ searchText }) {
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        searchText(lowerCase);
    };

    return (
        // <div>
        //     <div className="input-group">
        //         <div className="form-outline">
        //             <input type="search" id="form1" className="form-control" />
        //             <label className="form-label" htmlFor="form1">
        //                 Search
        //             </label>
        //         </div>
        //         <button type="button" className="btn btn-primary">
        //             <i class="bi bi-search"></i>
        //         </button>
        //     </div>
        // </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" onChange={inputHandler} />
            <button className="btn btn-secondary" type="button">
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
}

export default Search;
