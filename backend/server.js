const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alaa",
    database: "signup"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    return res.json("Hello from backend side");
});

app.get('/alaa', (req, res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Listening on port 8800");
});
