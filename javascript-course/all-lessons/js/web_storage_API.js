// Web Storage API

/*
    Not part of the DOM - refers to the Window API
    Available to JS via the global var: Window

    we do not have to type window. it is implied
*/

console.clear();

// same thing
// window.alert(window.location);
// alert(location);


const myArr = ["eat", "sleep", "code"];

const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function(){
        console.log(this.name);
    }
};



/*
session storage only keeps data when session is active. once you close tab, data goes away
local storage will store persistent data and continues to store in browser and not attached to tab. if you close tab, data will not go away. 

stored as strings (JSON) -- remember JSON does not keep methods 
*/


/*-----------------------------------------------------------------------------------*/
// Session Storage

sessionStorage.setItem("mySessionStore", JSON.stringify(myObj));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);


sessionStorage.setItem("storedArray", JSON.stringify(myArr));
const mySessionData2 = JSON.parse(sessionStorage.getItem("storedArray"));
console.log(mySessionData2);




/*-----------------------------------------------------------------------------------*/
// Local Storage

localStorage.setItem("myLocalStore", JSON.stringify(myObj));

const key = localStorage.key(0);
console.log("key: " + key);

//remove item
localStorage.removeItem("myLocalStore")
//clear entire storage
localStorage.clear();

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);



localStorage.setItem("localStoredArray", JSON.stringify(myArr));
const myLocalData2 = JSON.parse(localStorage.getItem("localStoredArray"));
console.log(myLocalData2);

// get length of entire local storage
const localStoreLength = localStorage.length;
console.log("local store length: " + localStoreLength);











