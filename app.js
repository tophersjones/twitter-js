const express = require('express')
const app = express();
const nunjucks = require('nunjucks')
const routes = require('./routes');

app.use('/', routes);

app.use('/', (req, res, next) => {
    console.log(req.method);
    next();
});
app.use(express.static('public'));
app.get('/stylesheets/style.css', (req, res, next) => {
    // var fileName = req.params.file;
    res.sendFile('public/stylesheets/style.css');
})
var locals = {
    title: "Twitter list",
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};




app.listen(2999, () => console.log('Example app listening on port 2999!'));

// nunjucks.configure('views', {noCache: true});

nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});