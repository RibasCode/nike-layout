const lupa = document.querySelector(".play-btn");
const modal = document.querySelector(".modal-play");




var modalOpen = false;


lupa.addEventListener('click', () => {

    if(modalOpen == false) {
        modal.classList.add("open");
        modalOpen = true;
    }

});


modal.addEventListener('click', (e) => {

    if(e.target.classList.contains("open")) {
        modal.classList.remove("open");
        modalOpen = false;
    }

});