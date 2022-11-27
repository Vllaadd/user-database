const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const app = expresss();

const DUMMY_PRODUCTS = []; //not a database, just some in-memory storage for now 

app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-server communication 
app.use((req, res, next) =>{
    res.seHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Method',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});


app.get('/products', (req, res, next) => {
    res.status(200).json({products: DUMMY_PRODUCTS});
});

app.post('/product', (req, res, next)=>{
    const{title, price} = req.body;
    if(!title || title.trim().length === 0 || !price || price <=0){
        return res.status(422).json({
            message: 'Invalid input, please enter a valid title and price.'
        });
    }

    const createProduct = {
        id: uuid(),
        title,
        price
    };
    DUMMY_PRODUCTS.push(createProduct);

    res
        .status(201)
        .json({message: 'Created new product.' , product: createProduct});
});

app.listen(5000); //start Node + Express server on port 5000