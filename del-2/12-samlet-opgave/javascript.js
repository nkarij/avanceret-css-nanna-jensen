/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function(){

    // alert("hej");

    // OPGAVE 1 
    let buttonChangeColor = document.querySelector("#change-color-div__button");
    buttonChangeColor.addEventListener('click', function(){

        let divElement = document.querySelector("#change-color-div__div");

        // replace css custom-property/css-variable
        divElement.style.setProperty('background-color', 'var(--change-color)');

        // get computed style - husker at dette bare var for øvelsens skyld
        let computedColor = window.getComputedStyle(divElement).getPropertyValue('background-color');
        // console.log(computedColor);
    });

    // OPGAVE 2
    let buttonSmallText = document.querySelector(".button-small-text");
    let buttonLargeText = document.querySelector(".button-large-text");

    // get root-element
    let root = document.documentElement;

    buttonSmallText.addEventListener('click', function(){

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


    // OPGAVE 3 ----------------------------------------------------

    // array af buttons
    let colorButtonArray = document.querySelectorAll("#color-buttons button");
    // reference til root-pseudo-elementet:
    let rootElement = document.documentElement;
    // console.log(rootElement)

    // tilføj clickevent vha loop

    colorButtonArray.forEach(button => {
        button.addEventListener('click', function(){
            // hvis man ikke bruger computed style - men style.backgroundColor - leder JS efter 
            // inline styles. Dem er der ingen af, når man bruger css-klasser.
            let style = window.getComputedStyle(button).getPropertyValue('background-color');
            // console.log(style);
            rootElement.style.setProperty('--box-color', style);
        });
        
    });

// OPGAVE 4 ----------------------------------------------------
    
    // global variables
    // let hslValue;

    let slidesContainer = document.querySelector(".color-slidecontainer");
    // array af inputs
    let sliderInputArray = document.querySelectorAll(".color-slidecontainer input");

    // sætter et start-pseudo-input
    let hslValueArray = [50, 100, 50];

    // kører funktionen som skifter farve
    outputHSLValues();

    slidesContainer.addEventListener('input', getValueFromInput);

    // function som henter input
    function getValueFromInput(){
        sliderInputArray.forEach(slider =>{
            hslValueArray.push(slider.value);
        })
        outputHSLValues();
    }

    function outputHSLValues(){
        let hslValue = `hsl(${hslValueArray[0]}, ${hslValueArray[1]}%, ${hslValueArray[2]}%)`;
        // console.log(hslValue);
        document.documentElement.style.setProperty('--animate-box-color', hslValue);
        // testColorElement.style.backgroundColor = hslValue;
        hslValueArray = [];
    }

// OPGAVE 5 ----------------------------------------------------
/* NB I MIN EGEN VERSION VAR DER IKKE NOGEN DISTANCE SLIDER */
/* DENNE ER KOMMET TIL I ADYS VERSION */

    let sliderAnimationElement = document.querySelector("#animation-slider");

    sliderAnimationElement.addEventListener('input', function(){
        let inputValue = sliderAnimationElement.value;
        console.log(inputValue);
        root.style.setProperty('--slider', inputValue);
    })



// OPGAVE 6

// SE HTML FOR NOTER


// OPGAVE 7 ------------------------------------

// Opgave: en progressbar som starter når man scroller ned så den kan ses i viewport
    
    let index = 0;
    let progressBarElement = document.querySelector("#progressbar");
    progressBarElement.value = 0;
    let interval = null;

    // en function som kører når progressbar kommer inden for synsvidde.

    if(interval == null){
        document.addEventListener('scroll', function(){
            if(inViewPort(progressBarElement)){ 
                startTimer();
            }
        });
    }


    function inViewPort(element){
        // giver mig elementets koordinater/position:
        let elementPosition = element.getBoundingClientRect();
        // console.log(elementPosition);
        // tjek om elementets top-position er over innerheight eller bottom er mindre end 0
        // hvis ja er elementet er udenfor viewport, og betingelsen skal returnere false
        if(elementPosition.top > innerHeight || elementPosition.bottom < 0) {
            return false;
        } else {
            return true;
        }
    }

    // function som starter og stopper et interval
    function startTimer(){
        let interval = setInterval(incrementValue, 100);

        function incrementValue(){
            if(progressBarElement.value >= 0 && progressBarElement.value < 100) {
                let addedValue = index++;
                // setInterval(incrementValue, 100);
                progressBarElement.value = addedValue;
            } else {
                console.log("færdig");
                clearInterval(interval);
            }
        }

    }




});



