// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    
})

// JavaScript
// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 51) {
        document.querySelector('.header').style.opacity = 0.9;
    } else {
        document.querySelector('.header').style.opacity = 1;
    }
});

// Geolocation
const x = document.querySelector('#error');
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

// Modal image
function Modal() {
    // Get the modal
    const modal = document.querySelector('#Modalimage');
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const img = document.querySelector('#myImg');
    const modalImg = document.querySelector('#img01');
    const captionText = document.querySelector('#caption');
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
    const span = document.querySelectorAll('.close')[0];
// When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
}

// Scroll indicator
// When the user scrolls the page, execute myFunction
function indicator() {
    window.onscroll = function() {ScrollFunction()};
    function ScrollFunction() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.querySelector("#ScrollBar").style.width = scrolled + "%";
        }
}
indicator()
/*-----------*/