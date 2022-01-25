
var body = document.querySelector('body');
body.style.backgroundColor = "red";

const questionContainer = document.getElementsByClassName('clickevent')[0];
const bouton1 = document.getElementById('btn-1');
const bouton2 = document.getElementById('btn-2');
const para = document.querySelector('p');

questionContainer.style.backgroundColor = "rebeccapurple";
questionContainer.style.borderRadius = "50px";

questionContainer.addEventListener('click', () => questionContainer.classList.add('clicked'));
questionContainer.addEventListener('mouseout', () => questionContainer.classList.remove('clicked'));

bouton1.addEventListener('click', function() {
    para.style.visibility = "visible";
    para.classList.add('pclicked');
    para.style.backgroundColor = "green";
});
bouton2.addEventListener('click', function() {
    para.style.visibility = "visible";
    para.classList.add('pclicked');
    para.style.backgroundColor = "red";
});
// ordre de priorité dans le css   id > class > baliseHtml
const rond = document.querySelector('.mousemove');

window.addEventListener("mousemove", (e) => rond.style.left = e.pageX + "px")
window.addEventListener("mousemove", (e) => rond.style.top = e.pageY + "px")+

window.addEventListener('mousedown', () => {
    rond.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener('mouseup', () => {
    rond.style.transform = "scale(1) translate(-50%, -50%)";
})

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
})

para.addEventListener('mouseover', () => para.style.transform = "rotate(-2deg)"); 

/*------------------KEYPRESS-------------------*/
const keypress = document.querySelector('.keypress');
keypress.style.opacity = 0.5;
const key = document.getElementById('key');

const ring = () => {
    const audio = new Audio;
    audio.src = "Enter.mp3";
    audio.play();
}

window.addEventListener('keypress', (e) => {
    key.innerText = e.key;
    if(e.key === "c") {
        keypress.style.backgroundColor = "blue";
    } else if (e.key === "j") {
        keypress.style.backgroundColor = "yellow";
    }

    ring();
})
/*-----------------------SCROLL EVENT------------------------*/

var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
})

/*-----------------------FORMULAIRE------------------------*/




