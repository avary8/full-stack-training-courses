// DOM - Document Object Model
console.clear();

/*-----------------------------------------------------------------------------------*/
// retrieve a section from html

const view1 = document.getElementById("view1");
console.log(view1);

// another way to do that
const view2 = document.querySelector("#view2");
console.log(view2);


/*-----------------------------------------------------------------------------------*/
// using retrieved sections to manipulate css from here

/*
// shows both views 
view1.style.display = "flex";
view2.style.display = "flex";


// shows one view 
view1.style.display = "none";
view2.style.display = "flex";
*/
view1.style.display = "flex";
view2.style.display = "none";


/*-----------------------------------------------------------------------------------*/
// getting boths views at once

// get boths views by class name // Returns HTML Collection
const views = document.getElementsByClassName("view");
console.log(views);

// get boths views by query select // returns in NodeList
const sameViews = document.querySelectorAll('.view');
console.log(sameViews);


/*-----------------------------------------------------------------------------------*/
// getting divs from previous variable

// query from inside view1 // returns NodeList
const divs = view1.querySelectorAll("div");
console.log(divs);

// another way to do that // returns HTMLCollection
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);


/*-----------------------------------------------------------------------------------*/
// using retrieved divs to manipulate css from here

// get all even divs
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n");
console.log(evenDivs);

//manipulate 
for (let i = 0; i < evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "darkblue";
    //evenDivs[i].style.width = "200px";
}

console.log("first div");
console.log(evenDivs[0]); // get first div from evenDivs
console.log(evenDivs[0].parentElement); // get parent of first div (view1)
console.log(evenDivs[0].parentElement.hasChildNodes()); // returns t/f if element has child nodes
console.log(evenDivs[0].parentElement.children); // gets all divs  // returns HTMLCollection
console.log(evenDivs[0].parentElement.childNodes); // gets all divs and text // returns NodeList
console.log(evenDivs[0].parentElement.firstChild); // gets first child which is text
console.log(evenDivs[0].parentElement.firstElementChild); // gets first child node which is div 1

console.log(evenDivs[0].nextSibling); // gets next sibling which is text
console.log(evenDivs[0].nextElementSibling); // gets next sibling node which is div 3

/*-----------------------------------------------------------------------------------*/
// retrieve navbar text and change it
const navText = document.querySelector("nav h1");
console.log(navText);
// navText.textContent = "Changed Text";

// retrieve entire nav bar and change the actual html 
const navbar = document.querySelector("nav");
// navbar.innerHTML  = `<h1> Changed </h1> <p> this should align right`;




/*-----------------------------------------------------------------------------------*/
// creating and erasing elements from DOM

view1.style.display = "none";
view2.style.display = "flex";

view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

// erase 
while (view2.lastChild){
    view2.lastChild.remove();
}

// create new divs
const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "black";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center"; 
    parent.append(newDiv);
}


// createDivs(view2, 10);

for (let i = 1; i <= 12; i++){
    createDivs(view2, i);
}




