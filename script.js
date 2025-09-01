document.querySelectorAll('.pop >input')[0].style.display = 'none'
document.getElementsByClassName('pop')[0].style.display = 'none'
var angle_convert =(angle)=>{// makes the angle in interval [0,360[
    if (angle >= 0 & angle < 360) {
        return angle
    } else {
       if (angle > 0) {
        while ((angle >= 0 & angle < 360)==false) {
           angle -= 360 
        }
       } else {
        while ((angle >= 0 & angle < 360)==false) {
            angle += 360 
         }
       } 
       return angle
    }
}
/////////////////////////////
var int_extraction =(text)=>{// takes the integer of a text
    return parseInt(text.replace(/[^\d.]/g,''))
}
///////////////////////////
var choose = (l)=>{//// chooses a random item of a list
    return l[Math.floor(Math.random()* l.length)]
}
var insruction_0 = ()=>{
    document.querySelectorAll('.pop >div')[0].style.backgroundImage = 'url("_0.jpg")'

    document.getElementsByClassName('pop')[0].style.display = 'block'
    for (let u = 0; u < document.getElementsByClassName('but').length; u++) {
        document.getElementsByClassName('but')[u].style.display = 'none'
        
    }
    document.querySelectorAll('.pop >span')[0].innerText = instructions[0] 
    instruction_done[0]= 1
}
var insruction_1 = ()=>{
    document.querySelectorAll('.pop >div')[0].style.backgroundImage = 'url("_1.jpg")'
  
        document.getElementsByClassName('anti-clockwise')[0].style.display = 'none'
        document.getElementsByClassName('clockwise')[0].style.gridColumn = 'span 2' 
        document.getElementsByClassName('pop')[0].style.display = 'block'
            document.getElementsByClassName('but')[0].style.display = 'none'
            
        
        document.querySelectorAll('.pop >span')[0].innerText = instructions[1] 
        instruction_done[1] = 1
    
}
var insruction_2 = ()=>{
    document.querySelectorAll('.pop >div')[0].style.backgroundImage = 'url("_2.jpg")'
    document.getElementsByClassName('pop')[0].style.display = 'block'
    for (let u = 0; u < document.getElementsByClassName('but').length; u++) {
     document.getElementsByClassName('but')[u].style.display = 'none'
     
 }
    document.querySelectorAll('.pop >span')[0].innerText = instructions[2] 
    document.querySelectorAll('.pop >input')[0].style.display = 'inline-block'
    instruction_done[2] = 1

}
var inst_functions = [insruction_0,insruction_1,insruction_2]
const root_set = document.documentElement;
var root_get = window.getComputedStyle(document.body);
var instruction_numper_to_tell = 0
var instruction_done = [0,0,0]
var instruction_turn = [0,0,0]
var instructions = [
"Sir!, I'm afraid to tell you that if you toched the button for more than 0.2s , the object would rotate 5deg every 0.2s",
"Sir!, you can't rotate it ant-clockwise any more",
"Sir! , congrats !! , you are almost done ,but unfortunatly , I forgot your name"
]
//////------random_rotations----
    root_set.style.setProperty("--hand_rootation",choose([45,90,135,180,225,270,315,0])+'deg')
    root_set.style.setProperty("--object_rootation",angle_convert(choose([0,90]) + int_extraction(root_get.getPropertyValue("--hand_rootation")))+'deg')

for (let i = 0; i < document.getElementsByClassName('but').length; i++) {

    document.getElementsByClassName('but')[i].addEventListener('click',()=>{
       
        root_set.style.setProperty("--object_rootation",angle_convert(int_extraction(root_get.getPropertyValue("--object_rootation")) +[45 , -45][i]) + 'deg')
        if (root_get.getPropertyValue("--object_rootation")==root_get.getPropertyValue("--hand_rootation")) {
           
           if (instruction_done[2]== 0) {
            instruction_turn[2] = 1
           /////inst_________2
           for (let ins = 0; ins < instruction_turn.length; ins++) {
            if (instruction_turn[ins] == 1) {
                inst_functions[ins]()
                instruction_turn[ins]=0
                instruction_done[ins] = 1
                break
            }
            
           }
        }
             
        }
       
        else if (Math.abs(int_extraction(root_get.getPropertyValue("--object_rootation"))-int_extraction(root_get.getPropertyValue("--hand_rootation"))) <= 45) {
            if (instruction_done[1]== 0) {
                /////inst_________1
                instruction_turn[1] = 1 
                for (let ins = 0; ins < instruction_turn.length; ins++) {
                    if (instruction_turn[ins] == 1) {
                        inst_functions[ins]()
                        instruction_turn[ins]=0
                        instruction_done[ins] = 1
                        
                        break
                    }
                    
                   }
               
            }
        }
    })
 
    document.getElementsByClassName('but')[i].addEventListener("mouseenter",()=>{
        clock =  setInterval(()=>{
           
            root_set.style.setProperty("--object_rootation",angle_convert(int_extraction(root_get.getPropertyValue("--object_rootation")) + 5) + 'deg')
            if (instruction_done[0] == 0) {
               /////inst_________0
               instruction_turn[0] = 1
               for (let ins = 0; ins < instruction_turn.length; ins++) {
                if (instruction_turn[ins] == 1) {
                    inst_functions[ins]()
                    instruction_turn[ins]=0
                    instruction_done[ins] = 1
                    break
                }
                
               }
            }
            else if (Math.abs(int_extraction(root_get.getPropertyValue("--object_rootation"))-int_extraction(root_get.getPropertyValue("--hand_rootation"))) <= 45) {
             
             if (instruction_done[1] == 0) {
                /////inst_________1
                instruction_turn[1] = 1
                for (let ins = 0; ins < instruction_turn.length; ins++) {
                    if (instruction_turn[ins] == 1) {
                        inst_functions[ins]()
                        instruction_turn[ins]=0
                        instruction_done[ins] = 1
                        
                        break
                    }
                    
                   }
             }
            }
        },200)
        
    })
    document.getElementsByClassName('but')[i].addEventListener("mouseleave",()=>{
        clearInterval(clock)
    })
    
}

document.querySelectorAll('.pop >button')[0].addEventListener('click', ()=>{
    if (instruction_done[1]==0) {
        for (let u = 0; u < document.getElementsByClassName('but').length; u++) {
            document.getElementsByClassName('but')[u].style.display = 'block'
            
        }
    } else {
        document.getElementsByClassName('but')[0].style.display = 'block'
    }

    if (instruction_done[2]==1){
        document.getElementsByClassName('verify-window')[0].style.display = 'none'
    }
    document.getElementsByClassName('pop')[0].style.display = 'none'
    for (let ins = 0; ins < instruction_turn.length; ins++) {
        if (instruction_turn[ins] == 1) {
            inst_functions[ins]()
            instruction_turn[ins]=0
            instruction_done[ins] = 1
            
        }
        
       }
})