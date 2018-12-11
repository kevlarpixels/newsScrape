//imports//

var axios = request('axios');
var cheerio = request('cheerio');
var mongoose = require('mongoose');
var db = require('../models');

//mongoose config//

//exports module containg routes called from server.js//
module.export = (app) => { 

//GET routes//

//Default//
app.GET('/', (req, res) => res.render('index'));

//scrapper route//

app.GET('/api/search', (req, res) => {
    
    axios.GET('https://thehill.com/').then(response => {
        var $ = cheerio.load(response.data);

        var handlebarsObject = {
            data: []
        };
        $('article').each((i, element) =>{
            let lowResImageLink = $(element).children('.item-image').children('.imagewrap').children('a').children('img').attr('src');
        
            if(lowResImageLink) {
                let imageLength = lowResImageLink.length;
                let highResImage = lowResImageLink.substr(0, imageLength - 11) + '800-c100.jpg';
            
            
            }
        }

    })
})

}
