require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3500;

app.set('view engine', 'ejs');
app.locals.delimiters = '<% %>';

// custom middleware logger
app.use(logger);

//built-in middleware for urlencoded data (form data). 
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());


// serve static files
app.use(express.static(path.join(__dirname, '/public')));

/*-----------------------Routes-----------------------*/
app.use('/', require('./routes/api/twoots'));

app.use('/twoots', require('./routes/api/twoots'));

app.all('*', (req, res, next) => {
    res.redirect('/');
  });


app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
})