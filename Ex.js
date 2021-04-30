let favcolor =document.getElementById('favcolor');
let number = document.getElementById('nb');
favcolor.addEventListener('mouseover',function(e) => {​​​​​​​​
    h1.style.color = e.target.value;
    contents.style.background = hexToRgbA(e.target.value);
