(function () {
    "use strict";
// working with a slider  
    var slideIndex = 1;
    showSlides(slideIndex);

    document.getElementById("prev").onclick = sliderLeft;
    document.getElementById("next").onclick = sliderRight;

    function sliderLeft() {
        showSlides(slideIndex-1);
    }

    function sliderRight() {
        showSlides(slideIndex+1);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slides");

        if (n > slides.length) {
            slideIndex = 1
        } else if (n < 1) {
            slideIndex = slides.length
        } else {
            slideIndex = n 
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slides[slideIndex - 1].style.display = "block";  
    }
// end working with a slider

    $('#compact-pagination').pagination({
        pages: 8,
        displayedPages: 3,
        prevText: 'Previous',
        cssStyle: 'light-theme'
    });
})();

