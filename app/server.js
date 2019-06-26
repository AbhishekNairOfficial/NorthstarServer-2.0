const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const dbConfig = require('../configs/database.config.js');
const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) =>{
    res.json({message : "Welcom to node server of northStar application"});
});

app.listen(8080, ()=>{
    console.log("Listening on port 8080")
});
