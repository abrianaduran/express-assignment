const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('common'));
app.use(cors()); 

const apps = require('./playstore.js')

//sort	'rating' or 'app'	sort the list by either rating or app, 
//any other value results in an error, if no value provided do not 
//perform a sort.

// genres	one of ['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 
//'Card']	If present the value must be one of the list otherwise an 
// error is returned. Filter the list by the given value.

app.get('/apps', (req, res) => {
    const { genres, sort } = req.query; 

    if(sort) {
        if(!['rating', 'app'].includes(sort)) {
            return res
                .status(400)
                .send('Sort must be one of app or rating')
        }
    }
    let results = apps.map(app => app);
    let results = apps.filter(app => app.app);
    if(sort) {
        if(!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(sort)) {
            return res 
                .status(400)
                .send('Genre must be one of Action, Puzzle, Strategy, Casual, Arcade, or Card')
        }
        results.sort((a, b) => {
            return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
        });
    }
    res.json(results);
});

module.exports = app;

//By default return the complete list of apps in the array.