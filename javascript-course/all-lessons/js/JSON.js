// JSON - Javascript Object Notation

console.clear();

const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function(){
        console.log("Hello!")
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

// stringify the Object to JSON
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

console.log(sendJSON.name);//inaccessible this way

// parse JSON back to Object 
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);






