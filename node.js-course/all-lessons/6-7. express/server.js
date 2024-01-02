const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 3500;

/*-----------------------Custom Middleware Logger-----------------------*/
app.use(logger);

/*-----------------------3rd Party Middleware-----------------------*/
/* Cross Origin Resource Sharing
    put websites <that you want> that should have access to this api 
    make sure to remove certain sites from whitelist after development 
*/
const allowedOrigins = ['https://www.yourWebsite.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) != -1 || !origin){ // remove !origin after development
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

/*-----------------------Built-in Middleware-----------------------*/
/*  to handle urlencoded data (form data). 
    'content-type: application/x-www-form-urlencoded' 
*/
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// built-in middleware for static files
// in the html files, the paths to css files begin with the folder 'css' . do not need to provide any '../'
app.use(express.static(path.join(__dirname, '/public')));

/*----------------------------------------------*/

app.get('^/$|/index(.html)?', (req, res) => {
    // 2 ways to load in file
    // res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); // sends 302 by default . we want a 301
});


// using next: we can chain a function immediately after 
app.get('/hello(html)?', (req, res, next) => {
    console.log("attempted to load hello.html");
    next();
}, (req, res) => {
    res.send("Hello")
});


// using next(): we can provide functions in an array
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('three');
    res.send('Finished')
}

app.get('/chain(.html)?', [one, two, three]);


// express looks for routes from top to bottom, so we can add a default at the bottom
/* app.use('/') another way to call 404 
    app.use is usually used for middleware

    app.all() will apply to all http methods at once
    app.all() is usually used for routing
------------------changing app.get() to app.all()----------------
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
*/
app.all('*', (req, res) => {
    // can chain 404 status code with send file
    res.status(404);
    if (req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')){
        res.json({error: "404: Not Found"});
    } else {
        res.type('txt').send("404: Not Found");
    }
});


// add custom error handler 
// ensure this is at the bottom.. even below the 404 
    
/* convert this to a function in middleware folder
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
});
*/
app.use(errorHandler);




app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

