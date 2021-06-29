let colors = document.querySelectorAll(".slideShow .color");
let titleLinks = document.querySelectorAll(".slideShow .nav-link");
let images = document.querySelectorAll(".slideShow .images img");
// set bezier for speed of colors 
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
let maxZIndex = titleLinks.length;

titleLinks[0].classList.add("active");
images[0].classList.add("active");

titleLinks.forEach((titleLink, index) => {
    //set zIndex so the image appears in the foreground
    colors[index].style.zIndex = `${maxZIndex -
        index}`;
    titleLink.addEventListener("click", () => {
        // nav-link
        titleLinks.forEach(navLink => navLink.classList.remove("active"));
        titleLink.classList.add("active");
        // select current active image
        let currSlide = document.querySelector(".slideShow .images img.active");
        let imageFade = currSlide.animate([
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
        imageFade.onfinish = () => {
            currSlide.classList.remove("active");
            let activeSlide = images[index];
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
        let activeOverlay = colors[index];
        activeOverlay.style.zIndex = `${maxZIndex}`;
        //fill color in from left to right
        activeOverlay.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], { duration: 1200, fill: "forwards", easing: easeInOutQuart });
    });
});

