// alert("test");


// global variables
// let hslValue;

let slidesContainer = document.querySelector(".slidecontainer");
// array af inputs
let sliderInputArray = document.querySelectorAll(".slidecontainer input");
let hslValueArray = [50, 100, 50];
outputHSLValues();

slidesContainer.addEventListener('input', getValueFromInput);

function getValueFromInput(){
    sliderInputArray.forEach(slider =>{
        hslValueArray.push(slider.value);
    })
    outputHSLValues();
}

function outputHSLValues(){
    let hslValue = `hsl(${hslValueArray[0]}, ${hslValueArray[1]}%, ${hslValueArray[2]}%)`;
    // console.log(hslValue);
    document.documentElement.style.setProperty('--chosen-color', hslValue);
    // testColorElement.style.backgroundColor = hslValue;
    hslValueArray = [];
}














