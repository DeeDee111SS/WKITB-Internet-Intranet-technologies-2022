function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()

            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(0)

function myFuncHide() {
        var x = document.getElementsByClassName("old-frame");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    }
    function myFuncShow() {
        var x = document.getElementsByClassName("old-frame");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
    }
    
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 75, 50);