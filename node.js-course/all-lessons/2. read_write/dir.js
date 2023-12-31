const fs = require('fs');

// create 'new' dir if it dne 
if (!fs.existsSync('./new')){ 
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory Created');
    })
}

// if 'new' dir exists, remove it
if (fs.existsSync('./new')){ 
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory Removed');
    })
}
