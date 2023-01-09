const fs = require("fs");
const http = require("http");
/***************************************** TASK 1 *****************************************/
const { json } = require("stream/consumers");

let productsDB = JSON.parse(fs.readFileSync("products.json", "utf-8"));

console.log(productsDB);
/***************************************** TASK 1 *****************************************/

/***************************************** TASK 2 *****************************************/

let server = http.createServer((req, res) => {
    let params = req.url.split("/").length;

    if (req.url == "/home") {
        res.write("<strong>Welcome to our APIs</strong>");
    } else if (req.url == "/products") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                data: productsDB,
            })
        );
    } else if (params == 3 && req.url.split("/")[2] != "" && req.url.split("/")[2] > 0) {
        let id = req.url.split("/")[2] - 1;
        console.log(id);
        console.log("Test");
        // if (req.url.split("/")[2]) {
        //     id = req.url.split("/")[2];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                data: productsDB[id],
            })
        );
        // }
        // let id = req.url.split("=")[0];
    } else {
        res.write("<h1>Not found 404</h1>");
    }
});

server.listen(7000, () => {
    console.log("listening on: http://localhost:7000/");
});
/***************************************** TASK 2 *****************************************/
/***************************************** TASK 3 *****************************************/

/* npm is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers
 easily share packaged modules of code. */

/* to install a package using npm we use => npm install <package_name> to install a package locally and if we want it installed globaly
 we add the -g flag */
/***************************************** TASK 3 *****************************************/
