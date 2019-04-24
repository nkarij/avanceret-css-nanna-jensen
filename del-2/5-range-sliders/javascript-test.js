// alert("test");


// global variables
// let hslValue;
let testColorElement = document.querySelector("#testcolor");
let slidesContainer = document.querySelector(".slidecontainer");
let sliderInputArray = document.querySelectorAll(".slidecontainer input");
let hslValueArray = [];

slidesContainer.addEventListener('input', getValueFromInput);

function getValueFromInput(){
    sliderInputArray.forEach(slider =>{
        hslValueArray.push(slider.value);
    })
    outputHSLValues();
}

function outputHSLValues(){
    let hslValue = `hsl(${hslValueArray[0]}, ${hslValueArray[1]}%, ${hslValueArray[2]}%)`;
    console.log(hslValue);
    testColorElement.style.backgroundColor = hslValue;
    hslValueArray = [];
}














