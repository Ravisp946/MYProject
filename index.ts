import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('My Server'));

app.listen(port, () => {
    console.log("Server is up and running");
})