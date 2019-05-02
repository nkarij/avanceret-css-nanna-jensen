
// ref rangesliders
let hueSliderElement = document.querySelector("#hueslider");
// console.log(hueSliderElement.value);
let satSliderElement = document.querySelector('#satslider');
let lightSliderElement = document.querySelector('#lightslider');

hueSliderElement.addEventListener('change', function(){
    updateHSLValue();
});

satSliderElement.addEventListener('change', function(){
    updateHSLValue();
});

lightSliderElement.addEventListener('change', function(){
    updateHSLValue();
});

// kører funktionen (updater hsl) så snart sitet loades.
updateHSLValue();

function updateHSLValue(){
    let hueValue = hueSliderElement.value;
    let satValue = satSliderElement.value;
    let lightValue = lightSliderElement.value;
    hslValue = `hsl(${hueValue}, ${satValue}%, ${lightValue}%)`;
    document.documentElement.style.setProperty('--chosen-color', hslValue);
    document.querySelector("#display-HSLvalue").innerHTML = hslValue;
}
