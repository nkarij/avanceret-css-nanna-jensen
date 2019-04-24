/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
// alert("hej");

let button = document.querySelector("button");
button.addEventListener('click', function(){

    // -------- VERSION 1 -------- //
    // change css custom-property/css-variable in root pseudo-element
    // get root-element
    // let root = document.documentElement;
    // set property 
    // root.style.setProperty('--main-bg-color', 'pink');
    // ELLER:
    // root.style.setProperty('--main-bg-color', 'var(--change-color)');

    // retrieve property / read css custom property
    // let style = getComputedStyle(root).getPropertyValue('--main-bg-color');
    // console.log(style);

    // ------ VERSION 2 ------- //
    // reference element
    let element = document.querySelector("#div1");

    // change css custom-property/css-variable
    element.style.setProperty('background-color', 'var(--change-color)');

    // ------- GETCOMPUTED STYLE --------//
    // hvis man ikke bruger computed style - men style.backgroundColor - leder JS efter 
    // inline styles. Dem er der ingen af, når man bruger css-klasser.
    let computedColor = window.getComputedStyle(element).getPropertyValue('background-color');
    console.log(computedColor);
  
});