const playGuitar = () => {
    return "Playing Guitar!";
};



const shredding = () => {
    return "Shredding some licks!";
};


const plucking = () => {
    return "Plucking the strings...";
};





export default playGuitar;
export { shredding, plucking };



/* -------------------------------------------------------*/
// way to export in line 

// if default wasnt already exported 
// export default function playPiano() {
//     return "Playing piano";
// };

export function playPiano() {
    return "Playing piano";
};

export function pianoScales() {
    return "Playing piano scales";
};


export function pianoChords() {
    return "Practicing piano chords";
};

