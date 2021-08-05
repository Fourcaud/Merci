const modalbg = document.querySelector(".container");
const modalBtn = document.querySelectorAll(".fa-gift");
const modalCake = document.querySelector(".cake");
const finDuFeu = document.querySelector(".allFuego");
const finDuFeuBlock = document.querySelectorAll(".velas");
const btnRaf = document.querySelector(".btn-wrapper");
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
  btnRaf.style.display = "block";
}

var btn = document.getElementsByClassName("btn")[0];
var txtPosition = 0;
btn.addEventListener("mouseup", function (e) {
  changeText();
});

var btnTxt = [
  "hehe",
  "ouch!",
  "sparkles!",
  "ooh",
  "oooooh",
  "ooooooooooh",
  "HARDER",
  "softer",
  "tenderly",
  "this is getting weird",
  "please stop",
  '"gags"',
  "woof",
  "meow",
];

function changeText() {
  if (txtPosition !== btnTxt.length) {
    btn.innerHTML = btnTxt[txtPosition];
    txtPosition += 1;
  } else {
    document.location.reload();
  }
}
