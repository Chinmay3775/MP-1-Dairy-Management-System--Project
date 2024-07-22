// server.js
const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'dairyfarm',
});

app.use(express.json());

app.post('/api/register', (req, res) => {
    const { farmerName, farmName, location, livestockType, milkProductionCapacity, otherDetails } = req.body;
    const query = `INSERT INTO farmers (farmer_name, farm_name, location, livestock_type, milk_production_capacity, other_details) VALUES (?,?,?,?,?,?)`;
    db.query(query, [farmerName, farmName, location, livestockType, milkProductionCapacity, otherDetails], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send({ message: 'Error registering farmer' });
        } else {
            res.send({ message: 'Farmer registered successfully' });
        }
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM farmers WHERE username =? AND password =?`;
    db.query(query, [username, password], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send({ message: 'Error logging in' });
        } else if (results.length === 0) {
            res.status(401).send({ message: 'Invalid username or password' });
        } else {
            res.send({ message: 'Login successful' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});