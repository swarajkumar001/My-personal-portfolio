// var targetpos=1500;
// var currentpos=0;


// var scrollInterval=setInterval(function(){
//     if(currentpos>=targetpos){
//         clearInterval(scrollInterval);
//         return;}
//         currentpos+=50;
//         window.scrollBy(0,50);
//     },50);

// first method 
/*
var navMenuAnchorTag=document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTag);

for(var i=0;i<navMenuAnchorTag.length;i++){
    navMenuAnchorTag[i].addEventListener('click', function(event){
     event.preventDefault();
     var targetSectionId = this.textContent.trim().toLowerCase();
     // trim spa
 
    
     var targetSection=document.getElementById(targetSectionId);
    //  console.log(targetSection);

    var interval=setInterval(function(){

        // Get the distance between the top of the section and the top of the viewport
      var targetsectiondistance = targetSection.getBoundingClientRect();

      if (targetsectiondistance.top <= 0) {
        clearInterval(interval);
        return;
      }

      // Scroll down 50 pixels
      window.scrollBy(0, 50);


    },50);

    });
}*/

// 2nd method .............
var navMenuAnchorTag=document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<navMenuAnchorTag.length;i++){
    navMenuAnchorTag[i].addEventListener('click', function(event){
     event.preventDefault();
     var targetSectionId = this.textContent.trim().toLowerCase();
    
 
    
     var targetSection=document.getElementById(targetSectionId);
    //  console.log(targetSection);

    // var interval=setInterval(scrollvertically(targetSection),50);  this is wrong method......
    //interval=setInterval(scrollvertically,50,targetSection); // 2nd approach 

    // 3rd approach 
    interval=setInterval(function(){
        scrollvertically(targetSection);
    },50,);



    });
}

function scrollvertically(targetSection){
    

        // Get the distance between the top of the section and the top of the viewport
      var targetsectiondistance = targetSection.getBoundingClientRect();

      if (targetsectiondistance.top <= 0) {
        clearInterval(interval);
        return;
      }

      // Scroll down 50 pixels
      window.scrollBy(0, 50);


    
}


// skill bar filling 

var progressbar=document.querySelectorAll('.skills-progress>div');
var SkillsContainer=document.getElementById('skills-container');

// handle the scoll event 
window.addEventListener('scroll',checkScroll);
var animationDone=false;

// initialize all the width of inner dive with zero 
function initializebar(){
    for(let bar of progressbar ){
        bar.style.width=0+'%';
    }
}
initializebar();


// function to fill the attribute 
function fillbars(){

    for(let bar of progressbar){
    let targetwidth =bar.getAttribute("data-bar-width");
    let currentwidth=0;
     let interval=setInterval(function(){
           if(currentwidth>targetwidth){
            clearInterval(interval);
            return;
           }
           currentwidth++;
           bar.style.width=currentwidth+'%';



     },3);
    // bar.style.width= bar_percentage+'%';
    // animationDone=false;

    }
    

}


// handle the check scroll ...if the skills section is visible or not.....
function checkScroll(){
    var coordinates=SkillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight){
         animationDone=true;
        // console.log('skills section is visible to us  ');

        // fill bars
        fillbars();
        // initializebar();
        // animationDone=false;
        
    }
else if(coordinates.top>window.innerHeight){
    
        animationDone=false;
        initializebar();
        
}




}


