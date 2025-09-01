document.getElementById('larry').style.top = Math.floor(Math.random()* 100) + '%'
document.getElementById('larry').style.left = Math.floor(Math.random()* 100) + '%'
document.getElementById('larry').style.rotate = Math.floor(Math.random()* 360) + 'deg'
document.getElementById('larry').addEventListener('click',()=>{
    console.log('done')
})