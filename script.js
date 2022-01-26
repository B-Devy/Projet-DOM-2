
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
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let language = "";
let textuel = "";



inputName.addEventListener('input', (e) => {
    textuel = e.target.value;
});

select.addEventListener('change', (e) => {
    language = e.target.value;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
//cgv vient de l'id de l'element checkbox
    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `   
        <h3>pseudo : ${textuel} </h3>
        <h4>langage : ${language}</h4>
        `
    /* Attention c'est quillemet touche 7 */
    } else {
        alert('Cochez les CGV');
    }

    console.log("yes !");
});

/*-------Evenement Load----------*/
window.addEventListener('load', () => alert("c'est chargé!"))

/*-------FOR EACH----------*/

/*var boxes = document.getElementsByClassName('box'); 
ATTENTION getElementsByClassName ne doit être utiliser que sur plusieurs éléments à la fois */

var boxes = document.querySelectorAll('.box'); 
boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.target.style.transform = "scale(0.7)"
    })
});
    



