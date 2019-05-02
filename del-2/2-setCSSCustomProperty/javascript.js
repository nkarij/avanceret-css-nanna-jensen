/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
// alert("hej");

let buttonSmallText = document.querySelector(".button-small");
let buttonLargeText = document.querySelector(".button-large");
// get root-element
let root = document.documentElement;

buttonSmallText.addEventListener('click', function(){

    // get root-element
    let root = document.documentElement;

    // change css custom-property/css-variable 
    root.style.setProperty('--font-size', 'var(--font-normal)');

});

buttonLargeText.addEventListener('click', function(){

    // change css custom-property/css-variable 
    root.style.setProperty('--font-size', 'var(--font-large)');

    // retrieve property / read css custom property
    let style = getComputedStyle(root).getPropertyValue('--font-size');
    console.log(style);

});