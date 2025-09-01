const audio = document.getElementById("hiddenAudio");

document.getElementById('larry').style.top = Math.floor(Math.random()* 98) + '%'
document.getElementById('larry').style.left = Math.floor(Math.random()* 98) + '%'
document.getElementById('larry').style.rotate = Math.floor(Math.random()* 360) + 'deg'
document.getElementById('larry').addEventListener('click',()=>{
    audio.play();
    for (let i = 0; i < document.querySelectorAll('.verify-window2 > div').length; i++) {
        document.querySelectorAll('.verify-window2 > div')[i].style.opacity = '0'
        
    }
    document.getElementsByClassName('verify-window2')[0].style.outline = '3px red solid'
    document.getElementsByClassName('verify-window2')[0].style.backgroundColor = 'black'
    document.getElementsByClassName('verify-window2')[0].style.width = '70%'
    document.getElementsByClassName('verify-window2')[0].style.height = '70%'
    setInterval(()=>{
        document.getElementsByClassName('verify-window2')[0].style.backgroundImage = 'url("larry.gif")'
        document.getElementsByClassName('verify-window2')[0].style.backgroundSize = 'auto 50%'
        clearInterval()
    },1500)
    setInterval(()=>{
        document.getElementsByClassName('verify-window2')[0].style.display = 'none'
        audio.pause()
        clearInterval()
    },19000)

})