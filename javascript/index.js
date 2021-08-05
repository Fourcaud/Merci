const modalbg = document.querySelector(".container");
const modalBtn = document.querySelectorAll(".fa-gift");
const modalCake = document.querySelector(".cake");
const finDuFeu = document.querySelector(".allFuego");
const finDuFeuBlock = document.querySelectorAll(".velas");

const text = document.querySelector(".textfin");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "none";
  modalCake.style.display = "block";
}

finDuFeuBlock.forEach((btn) => btn.addEventListener("click", fin));

function fin() {
  finDuFeu.style.display = "none";
  text.style.display = "block";
}
