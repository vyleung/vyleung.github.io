var scrollBefore = 0;

window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;

    if(scrollBefore > scrolled){
        scrollBefore = scrolled;
        //Desired action
        document.getElementById("nav").style.visibility = "visible";
    }

    else {
        scrollBefore = scrolled;
        //Desired action
        document.getElementById("nav").style.visibility = "hidden";

    }

})
