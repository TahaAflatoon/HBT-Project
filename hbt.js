/*JQuery*/
$.noConflict()
jQuery(document).ready(function($) {
    
})

/*JavaScript*/
//Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 51) {
        document.querySelector('.header').style.opacity = 0.9;
    } else {
        document.querySelector('.header').style.opacity = 1;
    }
});

//Geolocation
let x = document.getElementById("error");
function Geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
}
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

//Modal image
function Modal() {
    //Get the modal
    let modal = document.getElementById('Modalimage');
    //Get the image and insert it inside the modal - use its "alt" text as a caption
    let img = document.getElementById('myImg');
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
//Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
//When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
}

//Scroll indicator
// When the user scrolls the page, execute myFunction
function indicator() {
    window.onscroll = function() {ScrollFunction()};
    function ScrollFunction() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("ScrollBar").style.width = scrolled + "%";
        }
}
indicator()
/*-----------*/