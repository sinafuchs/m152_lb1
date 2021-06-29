//TODOD
const texts = [
    "Vivienne Westwood couture",
    "Vivienne Westwood ready-to-wear",
    "Vivienne Westwood ready-to-wear",
    "Vivienne Westwood couture"
  ];
  const smalltexts = [
    "fall 2002",
    "fall 1995",
    "fall 1994",
    "fall 1996"
  ];
  const colors = ["#b3e6ff", "#dd99ff", "#b30000", "#ff944d"];
  const images = [
    "./image/westwood/we1.jpg",
    "./image/westwood/we2.jpg",
    "./image/westwood/we3.jpg",
    "./image/westwood/we4.jpg"
  ];
  var i = 0;
  const currentText = document.getElementById("current-option-text1");
  const currentText2 = document.getElementById("current-option-text2");
  const currentImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentText.innerText = texts[i];
  currentText2.innerText = smalltexts[i];
  currentImage.style.backgroundImage = "url(" + images[i] + ")";
  mainMenu.style.background = colors[i];
  
  //next
  optionNext.onclick = function () {
    i = i + 1;
    i = i % texts.length;
    currentText.dataset.nextText = texts[i];
    currentText2.dataset.nextText = smalltexts[i];
    mainMenu.style.background = colors[i];
    carousel.classList.add("anim-next");

    setTimeout(() => {
      currentImage.style.backgroundImage = "url(" + images[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentText.innerText = texts[i];
      currentText2.innerText = smalltexts[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  //previous
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = texts.length;
    }
    i = i - 1;
    currentText.dataset.previousText = texts[i];
    currentText2.dataset.previousText = smalltexts[i];
    mainMenu.style.background = colors[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentImage.style.backgroundImage = "url(" + images[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentText.innerText = texts[i];
      currentText2.innerText = smalltexts[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
  
  