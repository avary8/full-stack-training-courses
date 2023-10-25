// JavaScript Event Listeners
console.clear();

const view1 = document.querySelector("#view1");
const view2 = document.querySelector("#view2");
const view3 = document.querySelector("#view3");

const views = [view1, view2, view3];

// creating function to change views easier
function changeView (views, viewNum){ // view num not array index
    for (let i = 0; i < views.length; i++){
        views[i].style.display = "none";
    }
    views[viewNum-1].style.display = "flex";
}


changeView(views, 2); 
console.log(view2)

const div = view2.querySelector("div");
const h2 = div.querySelector("h2");



/*-----------------------------------------------------------------------------------*/
// Syntax: addEventListener(event, function, userCapture)

const doSmth = () => {
    alert("doing something");
}

h2.addEventListener("click", doSmth, false); // add event listener
h2.removeEventListener("click", doSmth, false); // remove event listener

// adding event listener that has an anonymous function 
// you cant remove even w/ anonymous function
/* commented out for more examples below

h2.addEventListener("click", (event)=> {
    console.log(event.target);
    event.target.textContent = "Clicked";
});

*/

/* // other syntax .. same thing
h2.addEventListener("click", function (event) {
    console.log(event.target);
    event.target.textContent = "Clicked";
});
*/


// this event checks if page is loaded enough for DOM to be interacted with 
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        console.log("readyState: complete");
        //initApp(); // common to call function to init more event listeners
        initApp2(); // same as initApp() but more complex
    }
});


// when usercapture is false, things change from inside to outside
// when usercapture is true, things change from outside to inside
// move stopPropogation to outer element / inner element depending on userCapture to stop everything from changing with h2 is clicked
const initApp = () => {
    view2.addEventListener("click", (event) => {
        // event.stopPropagation(); // when all userCapture == true. and h2 is clicked, this will ensure only view2 gets changed and nothing else
        view2.style.backgroundColor = "purple";
    });

    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    });

    h2.addEventListener("click", (event) => {
        // event.stopPropagation(); // when all userCapture == false. and h2 is clicked, this will ensure only h2 gets changed and nothing else
        event.target.textContent = "Clicked"; 
    });

};


/* same example as above. but with toggling and some more.
we use classes from css (classes are already written in "event.css" */
const initApp2 = () => {
    view2.addEventListener("click", (event) => {
        // event.stopPropagation(); // when all userCapture == true. and h2 is clicked, this will ensure only view2 gets changed and nothing else

        // this way makes it so you can only add and remove. no going back
        // view2.classList.add("purple");
        // view2.classList.remove("darkblue");
        
        // this allows you to toggle back and forth
        view2.classList.toggle("purple");
        view2.classList.toggle("darkblue");
    });

    div.addEventListener("click", (event) => {
        div.classList.toggle("blue");
        div.classList.toggle("black");
    });

    h2.addEventListener("click", (event) => {
        // event.stopPropagation(); // when all userCapture == false. and h2 is clicked, this will ensure only h2 gets changed and nothing else
        const myText = event.target.textContent;
        if (myText == "My 2nd View"){
            event.target.textContent = "Clicked";
        } else {
            event.target.textContent = "My 2nd View";
        }
    });


    const nav = document.querySelector("nav");

    /* nav stuff is commented out because it interferes with link to go back home */

    // nav.addEventListener("mouseover", (event) => {
    //     event.target.classList.add("height100"); 
    // })

    // nav.addEventListener("mouseout", (event) => {
    //     event.target.classList.remove("height100"); 
    // })

};



/*----------------------- view 3 example ----------------------------*/

changeView(views, 3); 

// this event checks if page is loaded enough for DOM to be interacted with 
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp3(); // common to call function to init more event listeners
    }
});


const initApp3 = () => {
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault(); // prevents page from reloading
        console.log("submit event");
    });
};









