const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function(){
    alert('con un 7 me conformo')
});

const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover', function() {
    const ramdomX = parseInt(Math.random()*100);
    const ramdomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',ramdomY+'%');
    noBtn.style.setProperty('left',ramdomX+'%');
    noBtn.style.setProperty('tranform',`traducir(- ${ randomX } % ,- ${ randomY } %)` );
} );

noBtn.addEventListener('click',function(){
    alert('f eso no se hace')
});