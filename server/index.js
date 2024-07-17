const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
express.use(express.json());
app.use(cors());


const Port = process.env.port || 5500;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});