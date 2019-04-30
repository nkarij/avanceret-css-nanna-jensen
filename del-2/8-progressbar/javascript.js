/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function(){
    // alert("hej");

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

