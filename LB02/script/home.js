function generateImage(src, id, event){
  var img = document.createElement("img");
  img.src = src;
  img.id=id;
  img.style.marginLeft = "auto"
  img.style.marginRight = "auto"
  img.style.width = "50%"
  img.style.display = "block"
  var fullpage = document.getElementById("fullpage");
  fullpage.appendChild(img);

}

function changeBackgroundBack(event){
  console.log(event)
 
  }
  