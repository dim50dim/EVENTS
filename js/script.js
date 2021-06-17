'use strict';

let button = document.querySelector('.but');
let input = document.querySelector('.inp');

button.addEventListener('click', function() { 
      let li = document.createElement('li');
        li.innerHTML = input.value;
    
            input.value = '';
              li.style.color = `rgb(${colorRandom(0, 255)}, ${colorRandom(0, 255)}, ${colorRandom(0, 255)})`;
                li.style.fontSize = '40px';
                 li.style.listStyle = 'none';

        function  colorRandom (min, max){
            return Math.ceil(Math.random() * (max - min) + min);
        }     
  
          document.querySelector('.ullu').prepend(li);

});
