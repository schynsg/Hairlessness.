const btnEl = document.querySelector(".btn-burger");

const menuEl = document.querySelector(".header-nav");

function menuApparition(e) {
    menuEl.classList.toggle("brg");

    e.preventDefault();
}

btnEl.addEventListener("click", menuApparition);

























