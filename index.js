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
const PORT = process.env.PORT || 3017;

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
    res.render('index', {
        counter

    });

});

app.post('/count', function(req, res) {
    counter++;

    res.redirect('/')
});

app.get('/Buy', function(req, res) {
    res.render('index', {
        counter,
        list: pizza.listAll()
    })

})
app.post('/Buy', function(req, res) {

    // console.log(pizza.listAll(req.body.size))
    pizza.listAll(req.body.size)

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