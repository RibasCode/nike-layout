const lupa = document.querySelector(".lupa");
const modalLupa = document.querySelector(".modal-lupa");




var modalOpen = false;


lupa.addEventListener('click', () => {

    if(modalOpen == false) {
        modalLupa.classList.add("open");
        modalOpen = true;
    }

});


modalLupa.addEventListener('click', (e) => {

    if(e.target.classList.contains("open")) {
        modalLupa.classList.remove("open");
        modalOpen = false;
    }

});