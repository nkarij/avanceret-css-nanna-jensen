
// gem referencer til begge arrays
let linkArray = document.querySelectorAll(".nav-item");
let pageArray = document.querySelectorAll(".pagewrapper");
// let index = 0;
// reference til index
let onPageLoadIndex = 0;

// function som kører når siden loades første gang
runOnPageLoad(onPageLoadIndex);

function runOnPageLoad(index){
    // function som skjuler alle siderne
    fadePages();
    // 0-index vises (jf onPageLoadIndex)
    // klasser fjernes/tilføjes
    pageArray[index].classList.remove("fade-out");
    pageArray[index].classList.add("fade-in");
    // function som tilføjer klik-events til navigationen
    updatePagesOnClick();
}

function updatePagesOnClick(){
    // for-loop, looper 2 index på samme tid
    for (index = 0; index < linkArray.length; index++) {
        // console.log(index);
        // reference til instanser
        const link = linkArray[index];
        const page = pageArray[index];
        // eventlisteners på link-instanser
        
        link.addEventListener('click', function(){
            // skjuler alle siderne
            fadePages();
            // console.log("now on");
            // viser featured page
            page.classList.remove("fade-out");
            page.classList.add("fade-in");
        });
    }
}

// function som skjuler alle siderne
function fadePages(){
    for (index = 0; index < pageArray.length; index++) {
        const page = pageArray[index];
        page.classList.remove("fade-in");
        page.classList.add("fade-out");
    }
}




