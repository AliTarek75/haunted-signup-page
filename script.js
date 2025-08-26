const root = document.documentElement;
document.addEventListener('mousemove', (event) => { 
  for (let index = 0; index < document.getElementsByClassName('eye').length; index++) {
    rect = document.getElementsByClassName('eye')[index].getBoundingClientRect()
var orgin_x = rect.x + rect.width/2
var orgin_y = rect.y + rect.width/2
    var mouseX = event.clientX; // X-coordinate relative to the viewport
    var mouseY = event.clientY; // Y-coordinate relative to the viewport
    var angle = Math.atan2((mouseY - orgin_y) , (mouseX - orgin_x)) - Math.PI/4
    document.getElementsByClassName('iris')[index].style.rotate = `${angle}rad`
   // document.getElementsByClassName('eye')[0].style.left =  mouseX+'px'
   // document.getElementsByClassName('eye')[0].style.top =  mouseY+'px'
    root.style.setProperty("--iris_DC", document.getElementsByClassName('iris')[index].offsetWidth + "px");
    const circlationR = getComputedStyle(root).getPropertyValue("--circlation_R");
    root.style.setProperty("--circlation_RC", circlationR *  document.getElementsByClassName('iris')[index].offsetWidth + "px");
  }
  
  });
  
  