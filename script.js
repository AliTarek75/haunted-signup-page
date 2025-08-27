const root = document.documentElement;
  document.getElementsByClassName('inp')[0].addEventListener('input',()=>{
    var span_props = document.getElementsByClassName('txt')[0].getBoundingClientRect()
    document.getElementById('txt').innerText = document.getElementsByClassName('inp')[0].value
    for (let index = 0; index < document.getElementsByClassName('eye').length; index++) {
      rect = document.getElementsByClassName('eye')[index].getBoundingClientRect()
  var orgin_x = rect.x + rect.width/2
  var orgin_y = rect.y + rect.width/2
      var spanX = span_props.x+span_props.width; // X-coordinate relative to the viewport
      var spanY = span_props.y + span_props.height; // Y-coordinate relative to the viewport
      var angle = Math.atan2((spanY - orgin_y) , (spanX - orgin_x)) - Math.PI/4
      document.getElementsByClassName('iris')[index].style.rotate = `${angle}rad`
     // document.getElementsByClassName('eye')[0].style.left =  spanX+'px'
     // document.getElementsByClassName('eye')[0].style.top =  spanY+'px'
      root.style.setProperty("--iris_DC", document.getElementsByClassName('iris')[index].offsetWidth + "px");
      const circlationR = getComputedStyle(root).getPropertyValue("--circlation_R");
      root.style.setProperty("--circlation_RC", circlationR *  document.getElementsByClassName('iris')[index].offsetWidth + "px");
    }

  })
  
  