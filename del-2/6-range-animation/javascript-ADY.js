/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
// alert("hej");

let root = document.documentElement;
// console.log(root);
let sliderElement = document.querySelector("#slider");
let sliderDistanceElement = document.querySelector("#sliderdistance");
console.log(sliderDistanceElement);

let boxOne = document.querySelector("#div1");

sliderElement.addEventListener('input', function(){
    updateSlider();
})

sliderDistanceElement.addEventListener('input', function(){
    updateDistance();
});

function updateDistance(){
    let distanceValue = sliderDistanceElement.value;
    // console.log(distanceValue);
    root.style.setProperty('--distance', distanceValue + "px");
    // console.log(distanceValue + "px");
}

function updateSlider(){
    let sliderValue = sliderElement.value;
    // console.log(sliderValue);
    root.style.setProperty('--slider', sliderValue);
}






