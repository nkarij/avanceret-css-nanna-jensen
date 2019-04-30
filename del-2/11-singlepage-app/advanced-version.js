// I DEN AVANCEREDE UDGAVE FADER NY SIDE IND, MENS GAMMEL SIDE FADER UD
// POSITION ER ÆNDRET
// ANIMATION-END EVENT ER TILFØJET TIL COLLAPSE
// DER ER INDSAT FLERE IF-SÆTNINGER
// HAR LAVET EN PRELOAD FUNKTION


// gem referencer til begge arrays
let linkArray = document.querySelectorAll(".nav-item");
let pageArray = document.querySelectorAll(".pagewrapper");
let navigationElement = document.querySelector(".navigation");
// let index = 0;
// reference til index
let onPageLoadIndex = 0;

// function som kører når siden loades første gang
runOnPageLoad(onPageLoadIndex);


function runOnPageLoad(index){
    // 0-index vises (jf onPageLoadIndex)
    // function som skjuler alle sider
    hidePages();
    // klasser fjernes/tilføjes
    pageArray[index].classList.remove("collapse");
    pageArray[index].classList.remove("fade-out");
}

// event på menuen, som preloader min updatefunction
navigationElement.addEventListener('mouseover', function(){
    updatePagesOnClick();
    console.log("muse-event");
})

// funktion som looper 2 arrays på samme tid
function updatePagesOnClick(){
    // for-loop
    for (index = 0; index < linkArray.length; index++) {
        // console.log(index);

        // reference til instanser
        const link = linkArray[index];
        const page = pageArray[index];
        
        // klik-event på links, som viser featured page
        link.addEventListener('click', function(){
            // skjuler alle sider
            hidePages(); 

            // viser featured page
            if(page.classList.contains("collapse")){
                console.log("collapse")
                page.classList.remove("collapse");
            }        

            // sørger for at siden fader ind
            page.classList.remove("fade-out");
            page.classList.add("fade-in");

            // kalder functionen, som skal lytte på animation-end
            animationEnd();
        })
    }
}


// function som lytter på animation-end og tilføjer collapse til fade-out elementer
// når animationen slutter
function animationEnd(){
    // looper pageArray og tilføjer animation end event
    pageArray.forEach(page => {
        page.addEventListener('webkitAnimationEnd', function(){
            // console.log("transition ended");
            // hvis elementet er et fade-out, skal det kollapse
            if(page.classList.contains("fade-out")){
                page.classList.remove("fade-out");
                page.classList.add("collapse");
            }
        });
        
    });
}

// function som skjuler alle siderne
function hidePages(){
    for (index = 0; index < pageArray.length; index++) {
        const page = pageArray[index];
        page.classList.add("fade-out");
        page.classList.remove("fade-in");
    }
}





