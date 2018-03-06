const express = require('express')
const app = express();

app.use('/', (req, res, next) => {
    console.log(req.method);
    next();
});


app.get('/-is-anybbody', (req, res, next) => { res.send('hello world!');
    // console.log('request type', req.method);
    next();
});

app.listen(2999, () => console.log('Example app listening on port 2999!'));
