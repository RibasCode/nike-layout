const lupa = document.querySelector(".lupa");
const modal = document.querySelector(".modal-lupa");




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