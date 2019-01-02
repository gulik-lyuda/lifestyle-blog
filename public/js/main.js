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

// working with latest posts pagination
    $('#compact-pagination').pagination({
        pages: 8,
        displayedPages: 3,
        prevText: 'Previous',
        cssStyle: 'light-theme'
    });

// end working with a pagination

// loading random images from Unsplash to the Instagram Feed section
    const searchKeyword = 'happy new years';
    const apiUrl = 'https://api.unsplash.com/search/photos/?client_id=fc7cc484826e1eb8f6b417ec61f754e3c620a5e65ffe41ac068008fd6da20f97&query=' + searchKeyword;
    const imageCards = document.getElementsByClassName('image_card');

    fetch(apiUrl)
    .then((data) => data.json()) // Transform the data into json
    .then(function(data) { // if we got data from Unsplash we should parse them in our json-structure
        var k = 0;
        for (let image of imageCards) {
            image.getElementsByTagName('img')[0].src = data.results[k].urls.raw + "&fit=crop&w=290&h=220";
            k++;
        }
    })
    .catch(function(error) { // if we didn't get data from Unsplash we should set some default images
        var k = 1;
        for (let image of imageCards) {
            image.getElementsByTagName('img')[0].src = "images/content/blog_post_img_" + k + ".jpg";
            k++;
        }
    });
// end loading random images
})();

