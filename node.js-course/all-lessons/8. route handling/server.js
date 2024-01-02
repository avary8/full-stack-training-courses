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

// serve static files
// in the html files, the paths to css files begin with the folder 'css' . do not need to provide any '../'
app.use(express.static(path.join(__dirname, '/public')));
app.use('/subdir', express.static(path.join(__dirname, '/public')));


/*-----------------------Routes-----------------------*/
app.use('/', require('./routes/root'));
app.use('/subdir', require('./routes/subdir'));
app.use('/employees', require('./routes/api/employees'));


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


app.use(errorHandler);




app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));