
var audioElement = new Audio('1.mp4')
let icon = document.getElementById("icon") 


icon.addEventListener("click",()=>{
    if(audioElement.paused){
        audioElement.play();
        icon.classList.remove('bi-play-circle')
        icon.classList.add('bi-pause-circle')
        
    }
    else{
        audioElement.pause();
        icon.classList.remove('bi-pause-circle')
        icon.classList.add('bi-play-circle')
    }
})


const playControl= () =>{
    Array.from(document.getElementsByClassName('wow')).forEach((element)=>{
        element.classList.remove('bi-pause-circle')
        element.classList.add('bi-play-circle')
    })
}



Array.from(document.getElementsByClassName('wow')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
     
       
        index = parseInt(e.target.id)
        console.log(index)
        audioElement.src = `audio/${index}.mp4`;
        audioElement.currentTime = 0; 
        
        if(audioElement.paused){
          audioElement.play()
          
          
        }
        icon.classList.remove('bi-play-circle')
        icon.classList.add('bi-pause-circle')





    })})
        


document.getElementById('forward').addEventListener('click',()=>{
  if(index>=8){
    index = 1;
    }
    else{
      index += 1;
    }
          audioElement.src = `audio/${index}.mp4`;
        audioElement.currentTime = 0; 
        audioElement.play()
        icon.classList.remove('bi-play-circle')
        icon.classList.add('bi-pause-circle')
      })

document.getElementById('backward').addEventListener('click',()=>{
  if(index<=1){
    index = 1;
    }
    else{
      index -= 1;
    }
          audioElement.src = `audio/${index}.mp4`;
        audioElement.currentTime = 0; 
        audioElement.play()
        icon.classList.remove('bi-play-circle')
        icon.classList.add('bi-pause-circle')
      })





document.getElementById("1").onmouseover = function() {mouseOver1()};
document.getElementById("1").onmouseout = function() {mouseOut1()};
function mouseOver1() {
    document.getElementById("1").innerHTML = `<img src="cloud-lightning-rain.svg" alt="">
                 <div id="vol" >
                        <input type="range" class="form-range" value="50" min="0" max="100" onchange="vol1()" id="x customRange1">
                    </div>
            
                   
`
  }
  function mouseOut1() {
    document.getElementById("1").innerHTML = `<img src="cloud-lightning-rain.svg" alt="">
    `;
  }


document.getElementById("2").onmouseover = function() {mouseOver2()};
document.getElementById("2").onmouseout = function() {mouseOut2()};
function mouseOver2() {
    document.getElementById("2").innerHTML = `<img src="forest.svg" alt="">
    <div id="vol">
    <input type="range" class="form-range" value="50" min="0" max="100" onchange="vol1()" id="x customRange1">
   </div>
            
    
`
  }
  function mouseOut2() {
    document.getElementById("2").innerHTML = `<img src="forest.svg" alt="">
    `;
  } 
  
  
document.getElementById("3").onmouseover = function() {mouseOver3()};
document.getElementById("3").onmouseout = function() {mouseOut3()};
function mouseOver3() {
    document.getElementById("3").innerHTML = `<img src="wind.svg" alt="">
    <div id="vol">
    <input type="range" class="form-range" value="50" min="0" max="100" onchange="vol1()" id="x customRange1">
</div>
            
    
`
  }
  function mouseOut3() {
    document.getElementById("3").innerHTML = `<img src="wind.svg" alt="">
    `;
  }
  
  

  document.getElementById("4").onmouseover = function() {mouseOver4()};
  document.getElementById("4").onmouseout = function() {mouseOut4()};
  function mouseOver4() {
      document.getElementById("4").innerHTML = `<img src="rocket-takeoff.svg" alt="">
      <div id="vol">
      <input type="range" class="form-range" value="50" min="0" max="100" onchange="vol1()" id="x customRange1">
  </div>
              
      
  `
    }
    function mouseOut4() {
      document.getElementById("4").innerHTML = `<img src="rocket-takeoff.svg" alt="">
      `;
    }
    
    
document.getElementById("5").onmouseover = function() {mouseOver5()};
document.getElementById("5").onmouseout = function() {mouseOut5()};
function mouseOver5() {
    document.getElementById("5").innerHTML = `<img src="water.svg" alt="">
    <div id="vol">
    <input type="range" class="form-range" value="50" min="0" max="100" onchange="vol1()" id="x customRange1">
</div>
            
    
`
  }
  function mouseOut5() {
    document.getElementById("5").innerHTML = `<img src="water.svg" alt="">
    `;
  }
  
  

  document.getElementById("6").onmouseover = function() {mouseOver6()};
  document.getElementById("6").onmouseout = function() {mouseOut6()};
  function mouseOver6() {
      document.getElementById("6").innerHTML = `<img src="bonfire-outline.svg" alt="">
      <div id="vol">
      <input type="range" class="form-range" value="50" min="0" max="100" onchange="vol1()" id="x customRange1">
  </div>
              
      
  `
    }
    function mouseOut6() {
      document.getElementById("6").innerHTML = `<img src="bonfire-outline.svg" alt="">
      `;
    }
    
    document.getElementById("7").onmouseover = function() {mouseOver7()};
    document.getElementById("7").onmouseout = function() {mouseOut7()};
    function mouseOver7() {
        document.getElementById("7").innerHTML = `<img src="people.svg" alt="">
        <div id="vol">
        <input type="range" class="form-range" value="50" min="0" max="100" onchange="vol1()" id="x customRange1">
    </div>
                
        
    `
      }
      function mouseOut7() {
        document.getElementById("7").innerHTML = `<img src="people.svg" alt="">
        `;
      }
      
      
document.getElementById("8").onmouseover = function() {mouseOver8()};
document.getElementById("8").onmouseout = function() {mouseOut8()};
function mouseOver8() {
    document.getElementById("8").innerHTML = `<img src="buildings.svg" alt="">
    <div id="vol">
    <input type="range" class="form-range" value="50" min="0" max="100" onchange="vol1()" id="x customRange1">
</div>
            
    
`
  }
  function mouseOut8() {
    document.getElementById("8").innerHTML = `<img src="buildings.svg" alt="">
    `;
  }  




//   Volume Button



  function vol1(){
  
    var slider = document.getElementById("x customRange1").value/100;
    console.log(slider)
    audioElement.volume = slider;
    console.log(audioElement)
}




function sendEmail(event){
  // event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;


  let record = new Array();
  record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

  record.push({
      "name":name,
      "email":email,
      "message":message
  })
  localStorage.setItem("users",JSON.stringify(record));

}


// let icon = document.getElementById("icon")
// icons.addEventListener("click",()=>{
//     if(ar.paused){
//         ar.play();
//         icon.src = "pause-circle.svg"
    
        
//     }
//     else{
//         ar.pause();
//         icon.src = "play-circle.svg"
//     }
// })

//  Scroll Up Button


window.addEventListener('scroll',function(){
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle("active",window.scrollY > 500)
  
})

