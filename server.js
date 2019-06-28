const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const dbConfig = require('./configs/database.config');
const mongoose = require('mongoose');
const route = require('./app/routes/api')

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
app.use('/api', route);
app.get('/home',(req,res)=>{
    res.send("home page u loggeds")
})


app.get('/', (req, res) =>{
    res.json({message : "Welcom to node server of northStar application"});
});

const port = process.env.port || 8000
app.listen(port, ()=>{
    console.log("Listening on port 8000")
});
