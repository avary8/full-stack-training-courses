const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

//built-in middleware for urlencoded data (form data). 
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, '/public')));

/*-----------------------Routes-----------------------*/
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
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