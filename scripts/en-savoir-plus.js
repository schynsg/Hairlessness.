const plusElUn = document.getElementsByClassName("en-savoir-plus")[0];
const btnElUn = document.getElementsByClassName("en-savoir-plus")[1];
const plusElDeux = document.getElementsByClassName("en-savoir-plus")[2];
const btnElDeux = document.getElementsByClassName("en-savoir-plus")[3];

const pElUn = document.getElementsByClassName("infos-sup")[0];
const pElDeux = document.getElementsByClassName("infos-sup")[1];



function pApparitionUn(e) {
    pElUn.classList.toggle("sup");

    e.preventDefault();
}
function pApparitionDeux(e) {
    pElDeux.classList.toggle("sup");

    e.preventDefault();
}

plusElUn.addEventListener("click", pApparitionUn);
btnElUn.addEventListener("click", pApparitionUn);

plusElDeux.addEventListener("click", pApparitionDeux);
btnElDeux.addEventListener("click", pApparitionDeux);
