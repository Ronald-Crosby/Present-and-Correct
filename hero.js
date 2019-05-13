function main() {

    // consts 
    
    const slidesContainer = document.querySelector(".js-slides")  
    const prevArrow = document.querySelector(".js-hero-arrow-prev")    
    const nextArrow = document.querySelector(".js-hero-arrow-next")
    const numberOfSlides = document.querySelectorAll(".slides li")
    console.log(numberOfSlides)

    // functions
    let currentSlide = 0

    // next
    const nextSlide = function() {
        currentSlide = currentSlide + 1

        if(currentSlide >= numberOfSlides.length) {
            currentSlide = 0
        }

        let currentSlidePercentage = currentSlide * 100
        console.log(currentSlidePercentage)

        slidesContainer.style.transform = `translateX(-${currentSlidePercentage}%)`         
    }

    // go prev
    const prevSlide = function() {
        currentSlide = currentSlide - 1

        if(currentSlide < 0) {
            currentSlide = numberOfSlides.length - 1
        }

        currentSlidePercentage = currentSlide * -100
        console.log(currentSlidePercentage)

        slidesContainer.style.transform = `translateX(${currentSlidePercentage}%)`       
    
    }


    // autoscroll
    const autoScroll = setInterval(() => {
        nextSlide()
    }, 4000);
    

    // event listeners
    prevArrow.addEventListener("click", function() {
        prevSlide()
    })

    nextArrow.addEventListener("click", function() {
        nextSlide()
    })


}
if (document.readyState !== 'loading') main()
else document.addEventListener('DOMContentLoaded', main)