//TODO
let colors = document.querySelectorAll(".carousel .bar");
let titleLinks = document.querySelectorAll(".carousel .nav-link");
let images = document.querySelectorAll(".carousel .slides img");
// set bezier for speed of colors 
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
let maxZIndex = titleLinks.length;

titleLinks[0].classList.add("active");
images[0].classList.add("active");

titleLinks.forEach((navLink, activeIndex) => {
    //set zIndex so the image appears in the foreground
    colors[activeIndex].style.zIndex = `${titleLinks.length -
        activeIndex}`;
    navLink.addEventListener("click", () => {
        // nav-link
        titleLinks.forEach(navLink => navLink.classList.remove("active"));
        navLink.classList.add("active");
        // select current active image
        let currentSlide = document.querySelector(".carousel .slides img.active");
        let slideFadeOut = currentSlide.animate([
            //repositions image horizontally
            { transform: "translateX(0)", opacity: 1 },
            //moves element 5% to to right
            { transform: "translateX(5%)", opacity: 0 }
        ], {
            //set duration
            duration: 600,
            easing: "ease-in",
            fill: "forwards"
        });
        //when animation finished
        slideFadeOut.onfinish = () => {
            currentSlide.classList.remove("active");
            let activeSlide = images[activeIndex];
            activeSlide.classList.add("active");
            activeSlide.animate([
                {
                    transform: "translateX(-5%)",
                    opacity: 0
                },
                {
                    transform: "translateX(0)",
                    opacity: 1
                }
            ], { duration: 600, easing: "ease-out", fill: "forwards" });
        };
        maxZIndex += 1;
        //active color
        let activeOverlay = colors[activeIndex];
        activeOverlay.style.zIndex = `${maxZIndex}`;
        //fill color in from left to right
        activeOverlay.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], { duration: 1200, fill: "forwards", easing: easeInOutQuart });
    });
});

