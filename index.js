const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

var session = require('express-session');
const PizzaApp = require('./PizzaService');
const pizza = PizzaApp();


const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
}));
const PORT = process.env.PORT || 3030;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let counter = 0;


app.get('/', function(req, res) {
    console.log(pizza.smallsTotal() + 'gggggg')
    res.render('index', {

        smallT: pizza.smallsTotal(),
        mediumT: pizza.mediumsTotal(),
        largeT: pizza.largerTotal()
    });
});

app.post('/small', function(req, res) {


    pizza.smallPizza(req.body.size)
    pizza.Total(req.body.size)
    res.redirect('/');
})

app.post('/medium', function(req, res) {
    pizza.Total(req.body.size)
    pizza.mediumPizza(req.body.size)
    res.redirect('/');
})

app.post('/large', function(req, res) {
    pizza.Total(req.body.size)
    pizza.largePizza(req.body.size)
    res.redirect('/');
})

app.get('/order', function(req, res) {
    res.render('index', {

    })

})
app.post('/order', function(req, res) {


    res.render('index');
})

app.get('/info', function(req, res) {
    res.render('names', {

    })
})
app.get('/add', function(req, res) {
    res.render('info', {

    })
})
app.post('/add', function(req, res) {
    res.redirect('/info');
})

app.get('/edit', function(req, res) {
    res.render('info');

})
app.post('/edit', function(req, res) {
        res.redirect('/info');
    })
    // start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
    console.log(`App started on port ${PORT}`)
});