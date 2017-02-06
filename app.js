//load modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//set view engine to ejs
app.set('view engine', 'ejs');

//set upp public directory to serve static files
app.use(express.static('public'));

//Initiate bodyParser to parse request body
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Define the root route
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cameras', (req, res) => {
    res.render('cameras');
});


console.log("Server running...");
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
