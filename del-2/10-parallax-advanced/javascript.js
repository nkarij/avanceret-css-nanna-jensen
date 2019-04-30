/*---------------------------------------------------
TABLE OF CONTENT 
----------------------------------------------------*/
// alert("hej");


var parallaxElement = document.querySelector("#parallaxelement");

window.addEventListener('scroll', function(){

    updateParallax();

});

function updateParallax(){
        // pageYoffset viser afstanden fra page-top til scroll-position (kun på window?)
        let scrolledDistance = window.pageYOffset;
        console.log(scrolledDistance);
        // offsetTop = afstanden fra top til element
        // offsetHeigth = elementets højde inkl border + padding
        // dvs den samlede distance fra elementets bund til toppen af viewport
        let limit = parallaxElement.offsetTop + parallaxElement.offsetHeight;
        console.log(limit);
        let speedFactor = 0.66;
    
        // hvis scrolled distance er større end parallax top-distance
        //  && <= elementets (bundens) totale afstand fra toppen:
        // dvs at scroll befinder sig et sted midt i elementet
        if(scrolledDistance > parallaxElement.offsetTop && scrolledDistance <= limit) {
            // style backgroundposition i elementet på y-aksen, 
            // så billedet "slæber efter" teksten?
            // man kan også bare gange, så er det lettere at gøre hurtigt/langsomt.
            parallaxElement.style.backgroundPositionY = (scrolledDistance - parallaxElement.offsetTop) * speedFactor + "px";
    
        } else {
            // sætter backgroundposition i element til default
            parallaxElement.backgroundPositionY = 0;
        }
}