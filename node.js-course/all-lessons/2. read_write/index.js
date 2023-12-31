const fs = require('fs')
const path = require('path') // use this to avoid any difficulty with path names

//fs.readFile('./files/starter.txt', (err, data) => { // hardcoding file name
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => { // using path module
    if (err) throw err;
    console.log(data); // will print buffer data
    console.log(data.toString())
});

// or write utf8 as a param to print as string
fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // will print buffer data
});

console.log('Hello...'); // this will print before file is read and printed

// this type of function layering is done to ensure each function runs after the other. since js is an asynchronous language, different processes will run at different times. To avoid this type of setup in vanilla js, we use async/await 
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hello to you', (err) => {
    if (err) throw err;
    console.log('Write complete'); // will print buffer data

    // will create if file dne. or modify existing one
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', (err) => {
        if (err) throw err;
        console.log('Append complete'); // will print buffer data

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename complete'); // will print buffer data
        });
    });
});




/*
// this will throw an uncaught error
fs.readFile('./hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // will print buffer data
});
*/

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})




/*-------------------await/async in Node.js------------------*/
const fsPromises = require('fs').promises 

const fileOps = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'async.txt'), 'utf8');
        console.log(data);

        // this will delete async.txt
        // await fsPromises.unlink(path.join(__dirname, 'files', 'async.txt'));

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nAppended text portion.');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);

    } catch (err) {
        console.error(err);
    }
}


fileOps();


