/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
// alert("hej");

// på click-event skal knappens baggrundsfarve bruges til variablen

// array af buttons
let colorButtonArray = document.querySelectorAll("#color-buttons button");
// console.log(colorButtonArray);
// reference til root-pseudo-elementet:
let rootElement = document.documentElement;
// console.log(rootElement)

// tilføj clickevent vha loop

colorButtonArray.forEach(button => {
    button.addEventListener('click', function(){
        // hvis man ikke bruger computed style - men style.backgroundColor - leder JS efter 
        // inline styles. Dem er der ingen af, når man bruger css-klasser.
        let style = window.getComputedStyle(button).getPropertyValue('background-color');
        console.log(style);
        rootElement.style.setProperty('--chosen-color', '"var(" + style + ")"');
    });
    
});



