var n=document.querySelectorAll(".btn").length;
for(var i=0;i<n;i++){
   document.querySelectorAll(".btn")[i].addEventListener("click",addClick);
   
}

function addClick(){
  // this.style.color=""; that "this" is like the "this" in java
  var InnerElement=this.textContent;  //"this" refer to the document.querySelectorAll(".drum")[i] Where i=0...6
  makeSounds(InnerElement);
  pressedAnimation(InnerElement);
}

document.addEventListener("keypress",function(event){
   makeSounds(event.key);
   pressedAnimation(event.key);
   });

function makeSounds(key){
   switch(key){
       case 'C' :
           var key1=new Audio('keynots/key01.mp3');
           key1.play();
       break;
       case '1':
           var key2=new Audio('keynots/key02.mp3');
           key2.play();
       break;
       case 'D':
           var key3=new Audio('keynots/key03.mp3');
           key3.play();
       break;
       case '2':
           var key4=new Audio('keynots/key04.mp3');
           key4.play();
       break;
       case 'E':
           var key5=new Audio('keynots/key05.mp3');
           key5.play();
       break;
       case 'F':
           var key6=new Audio('keynots/key06.mp3');
           key6.play();
       break;
       case '3':
           var key7=new Audio('keynots/key07.mp3');
           key7.play();
       break;  
    case 'G':
        var key8=new Audio('keynots/key08.mp3');
        key8.play();
    break;
    case '4':
        var key9=new Audio('keynots/key09.mp3');
        key9.play();
    break;
    case 'A':
        var key10=new Audio('keynots/key10.mp3');
        key10.play();
    break;
    case '5':
        var key11=new Audio('keynots/key11.mp3');
        key11.play();
    break;
    case 'B':
        var key12=new Audio('keynots/key12.mp3');
        key12.play();
    break;
    case 'c' :
           var key1=new Audio('keynots/key01.mp3');
           key1.play();
       break;
       case 'd':
           var key3=new Audio('keynots/key03.mp3');
           key3.play();
       break;
       case 'e':
           var key5=new Audio('keynots/key05.mp3');
           key5.play();
       break;
       case 'f':
           var key6=new Audio('keynots/key06.mp3');
           key6.play();
       break;  
    case 'g':
        var key8=new Audio('keynots/key08.mp3');
        key8.play();
    break;
    case 'a':
        var key10=new Audio('keynots/key10.mp3');
        key10.play();
    break;
    case 'b':
        var key12=new Audio('keynots/key12.mp3');
        key12.play();
    break;
        
   }
}
function retunrClass(currentKey){
    switch(currentKey){
        case '1':
            return "one";
        case '2':
            return "two"; 
        case '3':
            return "three"; 
        case '4':
            return "four"; 
        case '5':
            return "five";   
        default:
            return currentKey;                                   
    }
}
function pressedAnimation(currentKey){
   var pressButton=document.querySelector("."+ retunrClass(currentKey));
  pressButton.classList.add("pressed");
  setTimeout(function(){
   pressButton.classList.remove("pressed");
  },100);
  
}