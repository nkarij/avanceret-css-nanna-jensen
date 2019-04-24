// alert("test");


// global variables
// let hslValue;
let testColorElement = document.querySelector("#testcolor");
let slidesContainer = document.querySelector(".slidecontainer");
let sliderInputArray = document.querySelectorAll(".slidecontainer input");
let valueArray = [];

slidesContainer.addEventListener('input', getValueFromInput);

function getValueFromInput(){
    sliderInputArray.forEach(slider =>{
        valueArray.push(slider.value);
    })
    outputHSLValues();
}

function outputHSLValues(){
    let hslValue = `hsl(${valueArray[0]}, ${valueArray[1]}%, ${valueArray[2]}%)`;
    console.log(hslValue);
    testColorElement.style.backgroundColor = hslValue;
    valueArray = [];
}














