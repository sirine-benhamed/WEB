let favcolor =document.querySelector(".color");
let number = document.querySelector("#nb");
favcolor.addEventListener('mouseover',function(){​​​​​​​​
    favcolor.style.color ='#'+Math.floor(Math.random()*16777215).toString(16);});
 
