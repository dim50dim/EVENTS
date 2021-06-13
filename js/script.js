 
let button = document.querySelector('.btn');
     let input = document.querySelector('.inp');


button.addEventListener('click', function(){
    document.querySelector('.div1').innerHTML = input.value;
       document.querySelector('.div1').style.color = 'red';
              input.value = '';
});