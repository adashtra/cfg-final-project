
function updateLink(input) {
    if (input === 'telaviv') {
        document.getElementById("submit").setAttribute('onclick', "location.href='destination/telaviv.html'")
    }
    else if (input === 'iceland') {
        document.getElementById("submit").setAttribute('onclick', "location.href='destination/iceland.html'")
    }
    else if (input === 'mallorca') {
        document.getElementById("submit").setAttribute('onclick', "location.href='destination/mallorca.html'")
    }
}

function check() {
    var e = document.getElementById("radio").checked;
    //alert(e);
    if (!e) {
        alert("You haven't selected a destination type");
        return false;
    }
}

//  slideshow 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function newsletterSignUp() {
    let text;
    if (email.value === '') {
        text = "Please enter an email address";
    } else {
        text = "Thank you for subscribing to the Green Travel newsletter, you will receive your first email shortly.";
    }
    document.getElementById("message").innerHTML = text;
}