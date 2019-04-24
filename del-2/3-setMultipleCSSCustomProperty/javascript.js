/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
// alert("hej");

let buttonSmall = document.querySelector(".button-small");
let buttonLarge = document.querySelector(".button-large");

buttonSmall.addEventListener('click', function(){

    // get root-element
    let root = document.documentElement;

    // change css custom-property/css-variable 
    root.style.setProperty('--font-size', 'var(--font-normal)');

});

buttonLarge.addEventListener('click', function(){

    // get root-element
    let root = document.documentElement;

    // change css custom-property/css-variable 
    root.style.setProperty('--font-size', 'var(--font-large)');


});