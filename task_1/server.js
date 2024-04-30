const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/process_order', (req, res) => {
    const product = req.body.product;
    const material = req.body.material;
    const quantity = req.body.quantity;

    res.send(`
        <h1>Ваше замовлення прийнято</h1>
        <p>Замовлено виріб: ${product}</p>
        <p>Матеріал: ${material}</p>
        <p>Кількість: ${quantity}</p>
    `);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
