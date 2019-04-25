/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
// alert("hej");

let root = document.documentElement;
console.log(root);
let sliderElement = document.querySelector("#slider");
// console.log(sliderElement);
let boxOne = document.querySelector("#div1");

sliderElement.addEventListener('input', function(){
    let inputValue = sliderElement.value;
    console.log(inputValue);
    root.style.setProperty('--slider', inputValue);
})








