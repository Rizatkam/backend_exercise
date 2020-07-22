const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;
const {
    users,
    kategori,
    buku,
    orders,
    } = require('./controllers');

// middleware body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/register', users.register);
app.post('/login', users.login);

// // route kategori
// app.get('/kategori', kategori.get_list); // public api
// app.post('/kategori', middleware, kategori.create); //restricted api
// app.get('/kategori/:id', kategori.get_by_id); // public api
// app.put('/kategori/:id', middleware, kategori.update_by_id); //restricted api
// app.delete('/kategori/:id', middleware, kategori.delete_by_id);// restricted api

// //route buku
// app.get('/buku',buku.get_list);//public api
// app.post('/buku', middleware, buku.create); // restricted api
// app.get('/buku/:id',buku.get_by_id);//public api
// app.put('/buku/:id',middleware,buku.update_by_id);//restricted api
// app.delete('/buku/:id',middleware,buku.delete_by_id);//restricted api

// //route orders
// app.post('/orders', middleware, orders.create); // restricted api
// app.get('/orders/:id',middleware, orders.get_by_id); //restricted api
// app.get('/orders', middleware, orders.get_list); // restricted api

app.listen(port, () => console.log(`Example app listening at
http://localhost:${port}`));