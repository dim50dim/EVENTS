    'use strict';



    

 let button = document.querySelector('.btn');
 let input = document.querySelector('.inp');

 button.addEventListener('click', function(){

      
        let li = document.createElement('li');
          li.innerHTML = input.value;
          
          input.value = '';
           li.style.color = `rgb(${putRandom(0, 255)}, ${putRandom(0, 255)}, ${putRandom(0, 255)})`;

     function putRandom(min, max){
         return Math.ceil(Math.random() * (max - min) + min);
     }        
 
        
   document.querySelector('.ul').prepend(li);
   
   
 });