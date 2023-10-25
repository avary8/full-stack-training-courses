// Modules
console.clear();
//"use strict"; // applied automatically


/*

import playGuitar from "./modules_instruments.js";;
//rename shredding as shred
import { shredding as shred, plucking, playPiano, pianoScales, pianoChords } from "./modules_instruments.js";;

console.log(playGuitar());
console.log(shred());
console.log(plucking());

*/


/* -------------------------------------------------------*/
// import all in one line
// cant rename the functions this way

import * as Instruments from "./modules_instruments.js";
import User from "./modules_user.js";

// since playGuitar was exported as default. it is called by default ...
// you can just not export as default to work around this
console.log(Instruments.default());
console.log(Instruments.shredding());
console.log(Instruments.plucking());


const me = new User("email@mail.com", "dave");
console.log(me);
console.log(me.greeting());















