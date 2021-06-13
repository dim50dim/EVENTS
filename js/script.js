 
let button = document.querySelector('.btn');
     let input = document.querySelector('.inp');
           let li = document.querySelector('.li');


button.addEventListener('click', function(){
       li.innerHTML = input.value;
       li.style.color = 'red';
              input.value = '';
});