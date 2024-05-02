const button = document.querySelector('button');
button.style.borderRadius ='50%'
button.style.border = 'none'
const screenWidth = window.innerHeight;
const screenHeight = window.innerHeight;



button.addEventListener('mouseenter',  function() {
    button.style.position = 'absolute';
    button.style.transition = 'all .2s'
    button.style.top = Math.random() * screenHeight + 'px';
    button.style.left = Math.random() * screenWidth + 'px';

    let r = Math.floor(Math.random()*255),
        g = Math.floor(Math.random()*255),
        b = Math.floor(Math.random()*255);

    button.style.backgroundColor='rgb('+r+','+g+','+b+')';
   
})
 