const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', "hbs");

app.use((req, res, next) => {
    var now = new Date();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => err ? console.log(err) : "");
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs', {
//         pageTitle: 'Maintenance',
//         welcomeMessage: 'The Page is Under Maintenance'
//     })
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})


app.get('/', (req, res) => {
    // res.send({
    //     name: 'Ashish',
    //     likes: ['Biking', 'Playing']
    // });

    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'        
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to fulfill the request'
    });
});

app.listen(3000, () => {
    console.log("Server is up at port 3000");
});