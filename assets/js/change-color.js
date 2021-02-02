'use strict'


const playBtn = document.getElementById('play-btn');
const navLinks = document.getElementById('nav__ul');
const navLogo = document.getElementById('nav__logo');


const social = document.querySelector('.right__social');
const search =document.querySelector('.right__search');



// setTimeout() nomes s'executa 1 vegada
// setInterval() es com un loop 

//Deixar valors preparats avans de la animacio perque es moguin cap a on vulguis
    function animation(){
        playBtn.style.opacity = 0;
        playBtn.style.transform = "translateX(45px)";
    }

    animation();

// animacio als 3s de delay
    var myTimer = setTimeout(myTimer, 3500);
    function myTimer() {
        playBtn.style.transition = "all 1s ease";
        playBtn.style.transform = "translateX(0px)";
        playBtn.style.opacity = 1;
    }

// deixar valors com avans de la animacio perque no peti res com el transforY(-5px) del button:hover
    var myTimer1 = setTimeout(animationBack, 4500);
    function animationBack(){
        playBtn.style.opacity = 1;
        playBtn.style.transform = "";
        playBtn.style.transition = "all 0.3s ease";
    }



// Uncaught TypeError: playBtn.addEventListener is not a function
// S'ha solucionat cambiant el getElementsByClassName a getElementById i fent el respectiu canvi al html
playBtn.addEventListener('click', () => {
    
    // declarem perque el playBtn i el social tinguin el mateix color random sino podriem fer simplement playBtn.style.backgroundColor = randomColor();
    var randomColor = randomColor();
    var randomDarkColor = randomDarkColor();

    
    function randomColor(){
        var randomColor = 'rgb(' + Math.round(Math.random()*255) +
        ',' + Math.round(Math.random()*255) +
        ', '+ Math.round(Math.random()*255) + ')';
    
        return randomColor;
    }


    function randomDarkColor(){

        let randomNum = Math.round(Math.random()*50);

        var randomDarkColor = 'linear-gradient( 135deg, rgba(0, 0, 0, 0.0),  rgba(0, 0, 0, 0.5)),' +
                            'rgb(' + randomNum +
                             ',' + randomNum +
                             ', '+ randomNum + ')';
    
        return randomDarkColor;
    }
    

    playBtn.style.backgroundColor = randomColor;
    social.style.backgroundColor = randomColor;
    search.style.background = randomDarkColor;


});




navLinks.addEventListener('click', () => {
    
    // declarem perque el playBtn i el social tinguin el mateix color random sino podriem fer simplement     playBtn.style.backgroundColor = randomColor();
    var randomColor = randomColor();
    var randomDarkColor = randomDarkColor();

    
    function randomColor(){
        var randomColor = 'rgb(' + Math.round(Math.random()*255) +
        ',' + Math.round(Math.random()*255) +
        ', '+ Math.round(Math.random()*255) + ')';
    
        return randomColor;
    }


    function randomDarkColor(){

        let randomNum = Math.round(Math.random()*50);

        var randomDarkColor = 'linear-gradient( 135deg, rgba(0, 0, 0, 0.0),  rgba(0, 0, 0, 0.5)),' +
                            'rgb(' + randomNum +
                             ',' + randomNum +
                             ', '+ randomNum + ')';
    
        return randomDarkColor;
    }
    

    playBtn.style.backgroundColor = randomColor;
    social.style.backgroundColor = randomColor;
    search.style.background = randomDarkColor;


});




navLogo.addEventListener('click', () => {
    console.log("click");
    // declarem perque el playBtn i el social tinguin el mateix color random sino podriem fer simplement     playBtn.style.backgroundColor = randomColor();
    var randomColor = randomColor();
    var randomDarkColor = randomDarkColor();

    
    function randomColor(){
        var randomColor = 'rgb(' + Math.round(Math.random()*255) +
        ',' + Math.round(Math.random()*255) +
        ', '+ Math.round(Math.random()*255) + ')';
    
        return randomColor;
    }


    function randomDarkColor(){

        let randomNum = Math.round(Math.random()*50);

        var randomDarkColor = 'linear-gradient( 135deg, rgba(0, 0, 0, 0.0),  rgba(0, 0, 0, 0.5)),' +
                            'rgb(' + randomNum +
                             ',' + randomNum +
                             ', '+ randomNum + ')';
    
        return randomDarkColor;
    }
    

    playBtn.style.backgroundColor = randomColor;
    social.style.backgroundColor = randomColor;
    search.style.background = randomDarkColor;


});