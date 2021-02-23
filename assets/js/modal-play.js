const play = document.querySelector(".play-btn");
const modalPlay = document.querySelector(".modal-play");




var modalOpen = false;


play.addEventListener('click', () => {

    if(modalOpen == false) {
        modalPlay.classList.add("open");
        modalOpen = true;
    }

});


modalPlay.addEventListener('click', (e) => {

    if(e.target.classList.contains("open")) {
        modalPlay.classList.remove("open");
        modalOpen = false;
    }

});