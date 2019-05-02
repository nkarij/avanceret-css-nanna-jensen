// let linksArray = document.querySelectorAll(".nav-item");

let input = words;
let substringArray = input.split(" ");
// console.log(substringArray);
let numberArray = [1,2,3,4,5,6,7,8,9];
let sortedArray = [];

numberArray.forEach(number => {
    substringArray.forEach(substring =>{
        if(!substring.match(number)){
            return input = "";
        }
        if(substring.match(number)){
            sortedArray.push(substring);
        }
    });   
});

return sortedArray;


