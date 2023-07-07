import express from "express";
import products from "./data/Products.js";

//Testando uma API
const app = express();

// buscamos todos os produtos da API
app.get("/api/products", (req,res) => {
    res.json(products)
});

// buscamos produtos por id
app.get("/api/products/:id", (req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
});


//Informa se o servidor funcionou
app.listen(5000, console.log("O servidor está executando na porta 5000"));