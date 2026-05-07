let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        navbar.classList.add("change");
    }
    else{
        navbar.classList.remove("change");
    }

});