//import dependencies//

var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var logger = require('morgan');
var db = require('./models');
var cheerio = require('cheerio');
var mongoose = require('mongoose');

//set up variable//
var PORT = process.env.PORT || 3000;
var app = express();

//middleware//

app.use(bodyParser.urlencoded({ extended: false})); //for form submssions
app.use(bodyParser.json());
app.use(express.static('public')); //static content from model

//routes//

require('./controllers/scrapperController')(app);

//execution//

app.listen(PORT, () =>{
    console.log(`The App is listening on PORT ${PORT}`);
})