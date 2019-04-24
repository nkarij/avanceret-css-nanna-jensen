/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
// alert("hej");

let button = document.querySelector("button");
button.addEventListener('click', function(){

    // get root-element
    let root = document.documentElement;

    // change css custom-property/css-variable 
    root.style.setProperty('--main-bg-color', 'pink');

    // retrieve property / read css custom property
    let style = getComputedStyle(root).getPropertyValue('--main-bg-color');
    console.log(style);

});






