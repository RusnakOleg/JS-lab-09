const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    let response;
    if (age > 50) {
        response = `Привіт, ${name}! Ви включені в старшу групу.`;
    } else if (age > 30) {
        response = `Привіт, ${name}! Ви включені в групу середнього віку.`;
    } else {
        response = `Привіт, ${name}! Ваше ставлення до молодіжної групи.`;
    }

    res.send(response);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
