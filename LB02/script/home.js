function generateImage(event){
  var id = event.id.concat('img');
  var src = './image/'.concat(event.id, '.jpg')
  var img = document.createElement("img");
  img.src = src;
  img.id=id;
  img.style.marginLeft = "auto"
  img.style.marginRight = "auto"
  img.style.width = "60%"
  img.style.display = "block"
  var fullpage = document.getElementById("fullpage");
  fullpage.appendChild(img);

  changeText(event.id);
  changeOpacity(event.id);

}

var names = ['mcqueen', 'mugler', 'galliano', 'gaultier', 'theyskens', 'westwood' ]

function changeText(id){
  names.forEach(element => {
    if(element != id){
      var src = document.getElementById(element)
      src.classList.add("whenpicture")
      src.classList.remove("title-text")
       }
  });
}
  
function changeOpacity(id){
     names.forEach(element => {
      if(element != id){
      document.getElementById(element).style.opacity = "0"
    }
     });
}

function getNewPage(event){
  var src = './'.concat(event.id, '.html')
  window.location.href = src;
  changeBackgroundBack(event);
}

function changeBackgroundBack(event){
 var id = event.id.concat('img');
 let image = document.getElementById(id);
 image.remove();
 names.forEach(element => {
  document.getElementById(element).style.opacity = "1"
  var src = document.getElementById(element)
  src.classList.remove("whenpicture")
  src.classList.add("title-text")
 });

  }
  