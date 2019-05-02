/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
// alert("hej");

let root = document.documentElement;
console.log(root);

let animationSliderElement = document.querySelector("#slider");
// console.log(sliderElement);
let boxOne = document.querySelector("#animation-box");

animationSliderElement.addEventListener('input', function(){
    let inputValue = sliderElement.value;
    console.log(inputValue);
    root.style.setProperty('--slider', inputValue);
})








