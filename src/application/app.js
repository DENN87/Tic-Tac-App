//Require module
//NODE.JS DOESNT SUPPORT ES6 IMPORT/EXPORT ONLY ES5
// ES5 import style
const express = require('express');
const es5_allgames = require('./controllers/games');
const es5_allplayers = require('./controllers/players');
const es5_home = require('./controllers/home');

//ES6 Import Style
// import allgames from './controllers/games'; 
// import allplayers from './controllers/players';
// import allplayers from './controllers/players';

// Express Initialize
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('listen port 3000');
});

//create API
app.get('/', es5_home);
app.get('/games', es5_allgames);
app.get('/players', es5_allplayers);

