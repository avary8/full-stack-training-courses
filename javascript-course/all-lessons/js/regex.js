// regex

// while typing, checking if phone number is correct format
document.getElementById("phoneNum").addEventListener("input", (event)=>{
    const regex = /^\(?(\d{3})\)?[- .]?(\d{3})[- .]?(\d{4})$/g;
    const input = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");
    const phone = input.value;
    const found = regex.test(phone);
    if (!found && phone.length){
        input.classList.add("invalid");
        format.classList.add("block");
    } else {
        input.classList.remove("invalid");
        format.classList.remove("block");
    }
});


// removes () . or " " from phone number after hitting enter
document.getElementById("phoneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum");
    const regex = /[()-. ]/g;
    const savedPhoneNum = input.value.replaceAll(regex, "");
    console.log(savedPhoneNum);
});




document.getElementById("textForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("textEntry");
    const regex = / {2,}/g; // finds any occurrence of 2 or more spaces
    const newText = input.value.replaceAll(regex, " ").trim(); // replace 2 or more spaces with jsut 1. trim will remove whitespace at beginning / end of text
    console.log(newText);

    const encodedInputText = encodeURI(input.value); // encodes URL
    const encodedCleanText = encodeURI(newText);

    console.log(encodedInputText)// %20 is a whitespace
    console.log(encodedCleanText)// %20 is a whitespace
});









