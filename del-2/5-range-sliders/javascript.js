/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
// alert("hej");

// på change-event skal sliderens værdi logges til consol

// ref rangesliders
let hueSliderElement = document.querySelector("#hueslider");
// console.log(hueSliderElement.value);
let satSliderElement = document.querySelector('#satslider');
let lightSliderElement = document.querySelector('#lightslider');
// ref color test-element
// let testColorElement = document.querySelector("#testcolor");
let root = document.documentElement;

// ref hsl values
let hslValue;
let hueValue = 180;
let saturationValue = 100;
let lightnessValue = 50;

// log value of hueslider
hueSliderElement.addEventListener('input', function(event){
    hueValue = hueSliderElement.value;
    updateHueValue(hueValue);
});

function updateHueValue(huevalue){
    hslValue = `hsl(${huevalue}, ${saturationValue}%, ${lightnessValue}%)`;
    console.log(hslValue);
    testColorElement.style.backgroundColor = hslValue;
}


// log value of saturationslider
satSliderElement.addEventListener('input', function(event){
    satValue = satSliderElement.value;
    updateSatValue(satValue);
});

function updateSatValue(satvalue){
    hslValue = `hsl(${hueValue}, ${satvalue}%, ${lightnessValue}%)`;
    console.log(hslValue);
    testColorElement.style.backgroundColor = hslValue;
}


// log value of lightnessslider
lightSliderElement.addEventListener('input', function(event){
    lightValue = lightSliderElement.value;
    updateLightValue(lightValue);
});

function updateLightValue(lightvalue){
    hslValue = `hsl(${hueValue}, ${saturationValue}%, ${lightvalue}%)`;
    console.log(typeof(hslValue));
    testColorElement.style.backgroundColor = hslValue;
}




