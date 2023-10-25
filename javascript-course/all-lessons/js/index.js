// js event listeners for the index.html (not part of the lessons)

/*
    this file was created to allow links to stay highlighted even if a different part of the page is clicked
*/
console.clear();
//const links = document.getElementsByClassName("link");
const links = document.querySelectorAll('.link');
let lastClicked = null;

links.forEach(link =>{
    link.addEventListener('click', (event) =>{
        if (lastClicked){
            lastClicked.classList.remove('clicked');
        }
        link.classList.add('clicked'); 
        //link.style.color = "red";
        //console.log(event.target);
        //event.target.classList.add('clicked');
        lastClicked = link;
    })
});


