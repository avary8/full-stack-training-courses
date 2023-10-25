# HTML-CSS Course 
Tutorial from https://youtu.be/EfAl9bwzVZk?si=HUIrpbR8rjClzBCC 

Timestamps Progression\
2 hr 5 min  - 10-11-23 (basics)\
3 hr 14 min - 10-16-23 (Arrays + Objects)\
4 hr 7 min  - 10-17-23 (Class, JSON, Error Handling)\
5 hr 21 min - 10-18-23 (DOM + Event Listeners)\
5 hr 56 min - 10-23-23 (Web Storage API + Modules)\
7 hr 55 min - 10-24-23 (Higher Order Functions, Promises/Fetch/Async/Await + regex)\
Finished 

# Some notable info 
- variables are created like this "let someName"
-  Ternary Operator syntax: condition ? ifTrue : ifFalse;
-  alert(""); will create an alert popup in browser
-  confirm("Ok === True\nCancel === False"); will create a popup that lets user click one of 2 buttons
-  prompt("some prompt"); will create a popup that takes typed response from user  
  
### Function syntax
similar to c++   
&nbsp; &nbsp; &nbsp; &nbsp; or   
``` 
const functioName = (varName) => {  
        doStuff;  
        return a constant;  
}
```

- blocks are: "{code}"
- var is not used anymore 
- var is function scoped and can be changed inside a block
- let and const is block scoped and will only change inside block but go back to prev value outside of block

### Array Methods
- an array can hold diff types
- "push" adds to end
- "pop" removes from end
- "unshift" adds to beginning
- "shift" removes from beginning
- "splice" can remove element(s) and potentially replace them with another value
- "delete" will replace element with undefined value
- "slice(index_1, index_2)" where index_1 is included in new subarray but index_2 is not 
- "reverse" 
- "join" creates string out of all elements by joining w/ commas
- "concat" will join 2 existing arrays into 1 array
- "[...array1, ...array2]" will join 2 existing arrays into 1 array too
  

### Objects
- example of object containing another object and a function
```
const someObj = {
        var1: 1,
        var2: true,
        anArray: ["some", "array", "values"],
        anotherObj: {
                anothersVar: "some String"
        },
        funcName: function(){
                return `this is a function in someObj..and this is var1:  ${this.var1}`;
        }
};

console.log(someObj.funcName());
```

- creating an object instance
- creating a new key, value for the instance
```
const vehicle = {
        wheels: 4
}

const truck = Object.create(vehicle);
truck.doors = 2;
```

- when creating instances of object. you can redefine object functions
- the instances can also be inherited 


- check if attribute exists
```
const vehicle = {
        wheels: 4
}

vehicle.hasOwnProperty("tires")
```
- destructurig objects 
- create new variables and assign same values as object's key value 
- can also be used in function to access the value associated to particular key
```
const vehicle = {
        wheels: 4,
        doors: 4
}

const {wheels: optionalNewName, doors: anotherOptionalNewName} = vehicle;
console.log(someName);

function closes({ doors }) { return `all ${doors} doors close`}
console.log(closes(vehicle))
```

### Classes

- example of class syntax
```
class someClass = {
        #privateVar0 = "something";
        constructor(parameter1, parameter2){
                this.#privateVar0 = "new value";
                this.var1 = parameter1;
                this.var2 = parameter2;
                this.var3 = 20;
        }
        funcName(){
                console.log(`this is a function in someClass..and this is var1:  ${this.var1}`);
        }
};
const myClass = new someClass("some string", 3);
console.log(myClass.funcName());
```
- private variable support added to JS via "#" 
- getter and setter functions have official keyword "get" and "set" 
- or just do normal way 
- subclass "extends" superclass


### JSON
- JSON is a text format used to send and receive data
- "JSON.stringify" turns Object into string data
- "JSON.parse" turns string data back into Object


### Error Handling
- syntax of try catch 
```
const makeError = () => {
    try { // will only exectue if no errors
        doSomething;
    } catch (err) { // will only execute if there is an error
        console.error(err); 
    } finally { // will execute no matter what 
        doSomethingElse;
    }
};
```

### DOM - Document Object Model
- DOM allows us to:
  -  retrieve html elements
  -  alter css 
  -  erase/create new html elements
- examples in DOM.js


### Event Listeners
- syntax of event listener
```
someElement.addEventListener(event, function, userCapture);
```
- when userCapture == false, (default)
  - things are changed from inner to outer
- when userCapture == true,
  - things are changed from outer to inner

- use "stopProprogation()" to not allow a trickle down change (see event_listener.js for the example)
- you can pre-write css classes and then call them in js instead of having to write css in js. 
- use "event.preventDefault();" to prevent page from reloading when submitting a form


### Web Storage API
- not part of DOM -- refers to the Window API
- available to JS via the global var : window
- session storage only keeps data when session is active. once you close tab, data goes away
- local storage will store persistent data and continues to store in browser and not attached to tab. if you close tab, data will not go away.
- data is stored as strings (JSON)
- JSON will not keep methods when converting back and forth



### Modules
- modules are used to export sections of code to other files
- in html , must have "<script type="module" defer src="js/modules.js"></script>"
type="module" applies some default behaviors:
  - applies defer src ...
  - applies strict mode to js file



### Higher Order Functions
- Higher order function does at least one of the following:
  - Takens one or morefunctions as an argument (paramter)
  - Returns a function as the result
- foreach() , filter(), map(), reduce()



### Fetch / Async / Await
#### Callbacks
- functions that are passed to other functions as parameters 
- can get very convoluted
-  promises were made 

#### Promises
- 3 states
  1. Pending
  2. Fulfilled
  3. Rejected
- every promise is a thenable object 

#### Thenable
- lets you get value of promise 
- chainable
- tells code to run after something happens 
- will not hold up code below it 


#### Async / Await
- made in place of Promises and Thenable
- cleaner way to chain events 
- remember, other code is allowed to run while async functions are waiting 











