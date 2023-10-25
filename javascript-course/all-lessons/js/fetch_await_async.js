// Fetch / Await / Async


console.clear();

/*-----------------------------------------------------------------------------------*/
// Callbacks
/*

function firstFunction(parameters, callback){
    // do stuff
    callback();
}


// AKA "callback hell"

firstFunction(para, function() {
    //do stuff
    secondFunction(para, function(){
        thirdFunction(para, function(){

        });
    });
});

// can get very convoluted
*/

/*-----------------------------------------------------------------------------------*/
// Promises

/* 3 states:
        1. Pending
        2. Fulfilled
        3. Rejected
*/

const myPromise = new Promise((resolve, reject) => {
    const error = true;
    if (!error){
        resolve("Yes! Resolved the promise");
    } else {
        reject("No! Rejected the promise");
    }
});

console.log(myPromise);

const myPromiseFalse = new Promise((resolve, reject) => {
    const error = false;
    if (!error){
        resolve("Yes! Resolved the promise");
    } else {
        reject("No! Rejected the promise");
    }
});


/*-----------------------------------------------------------------------------------*/
// Thenable

// Fulfilled state
myPromise.then(value =>{
    console.log(value);
    return value+1;
}).then(newValue =>{
    console.log(newValue);
}).catch(err =>{
    console.error(err);
});

// Rejected state
myPromiseFalse.then(value =>{
    console.log(value);
    return value+1;
}).then(newValue =>{
    console.log(newValue);
}).catch(err =>{
    console.error(err);
});



// example to show that setting a timeout will not prohibit following lines to also wait 
const nextPromise = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve("nextPromise resolved after 3 seconds");
    }, 3000);//3 seconds
});

nextPromise.then(value =>{
    console.log(value);
});


myPromiseFalse.then(value =>{
    console.log(value);
});



// pending state
const users = fetch("https://jsonplaceholder.typicode.com/users"); 
console.log(users); // will return pending

const usersFetched = fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
    // console.log(response); // body is readable stream.. we need to make it json 
    return response.json();
}).then(data => {
    console.log(data);
    data.forEach(user =>{
        console.log(user);
    })
});


console.log(usersFetched); // will still return pending because it runs before fetch



/*-----------------------------------------------------------------------------------*/
// Async / Await

const myUsers = {
    userList: []
};

/*
one way to create async function

const myFunc = async()=>{

} 

*/

// another way to create async func
async function myFunc() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

myFunc();

async function myFunc2() {
    const data = await myFunc();
    console.log("Data inside async function 2");
    console.log(data);
    myUsers.userList = data;
}

myFunc2();

console.log(myUsers.userList); // you get empty array because it is allowed to run before functions that are waiting 




/*-----------------------------------------------------------------------------------*/
// Examples

//------------workflow function

async function getAllUserEmails(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    
    const userEmailArr = jsonUserData.map(user => {
        return user.email;
    });

    //console.log(userEmailArr);
    //1 return userEmailArr;
    postToWebPage(userEmailArr);
}
//console.log(getAllUserEmails()); //1 you get pending status 

function postToWebPage(data){
    console.log(data);
}

getAllUserEmails();


//------------2nd parameter of fetch is an object

async function getDadJoke(){
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers:{
            Accept: "application/json"
        } 
    });

    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
}

getDadJoke();


// instead of json, we can get text plain data
async function getDadJokeText(){
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers:{
            Accept: "text/plain"
        } 
    });

    const textJokeData = await response.text();
    console.log(textJokeData);
}

getDadJokeText();


// post data to api 
const jokeObj = { 
    id: "qrHJ69M7hFd", 
    joke: "What cheese can never be yours? Nacho cheese." 
};

async function postData(jokeObj){
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });

    const jsonResponse = await response.json();
    console.log("Posting data to api");
    console.log(jsonResponse);
}

postData(jokeObj);



// insert data into the api via url
async function requestJoke(firstName, lastName){
    const response = await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);

    const jsonResponse = await response.json();
    console.log(jsonResponse.value);
}

requestJoke("Clint", "Eastwood");




//------------abstract into functions
// use functions to achieve above example

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo={requestData.categories}`;
}


async function requestJoke2(url){
    const response = await fetch(url);
    const jsonResponse = await response.json();

    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) =>{
    console.log(joke);
}

// procedural workflow function
async function processJokeRequest (){
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke2(requestUrl);
    console.log("finished");
}


processJokeRequest();

