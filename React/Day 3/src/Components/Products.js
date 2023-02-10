import React, { useState } from "react";
import { useEffect } from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Sort from "./Sort";
import Search from "./Search";
import { setIn } from "formik";

function Products() {
    // useEffect(() => {
    //     fetch("https://dummyjson.com/products").then((res) => {
    //         res.json().then((data) => localStorage.setItem("products", JSON.stringify(data.products)));
    //     });
    // }, []);
    let products = JSON.parse(localStorage.getItem("products"));

    let [productsList, setProductsList] = useState(products);

    const filter = (category) => {
        if (category === "all") {
            setProductsList(products);
        } else {
            let filteredProductList = products.filter((product) => product.category === category);
            setProductsList(filteredProductList);
        }
    };

    const comparePrices = (order) => {
        return function innerSort(a, b) {
            if (order === "asc") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        };
    };

    const sortProducts = (order) => {
        let sortedProductList = productsList.sort(comparePrices(order));
        setProductsList(sortedProductList);
    };

    const [inputText, setInputText] = useState("");
    const searchText = (input) => {
        setInputText(input);
    };

    productsList = productsList.filter((product) => {
        if (inputText === "") {
            return product;
        } else {
            return product.title.toLowerCase().includes(inputText);
        }
    });
    // let categories = [];
    // products.forEach((product) => {
    //     if (!categories.includes(product.category)) {
    //         categories.push(product.category);
    //     }
    // });
    // localStorage.setItem("categories", JSON.stringify(categories));

    return (
        <div>
            <h1>Products</h1>
            <Categories filter={filter} />
            <Sort sort={sortProducts} />
            <Search searchText={searchText} />
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
                {productsList.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;
