function countdown() {
    var seconds = document.getElementById("seconds").value; // get the user provided number of seconds to countdown
    function tick() {
        seconds = seconds - 1; // decrement the user input seconds by 1
        timer.innerHTML = seconds; // asign each decrement of seconds to timer
        setTimeout(tick, 1000); // when the time is up, open an alert pop up to let know
        if(seconds == -1) {
            alert("Time's up!");
        }
    }
    tick (); // call the function tick
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}