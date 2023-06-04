let click = 0;
let clickValue = 1;
let elementLetter = document.querySelectorAll(".elementLetter");
let electron1 = document.querySelector(".electron1");
let electron2 = document.querySelector(".electron2");
let electron3 = document.querySelector(".electron4");
let electron4 = document.querySelector(".electron4");
let electron5 = document.querySelector(".electron5");
let addElectron1Button = document.querySelector(".atoms1");
let addElectron2Button = document.querySelector(".atoms2");
let addElectron3Button = document.querySelector(".atoms3");
let addElectron4Button = document.querySelector(".atoms4");
let addElectron5Button = document.querySelector(".atoms5");
let addElectron6Button = document.querySelector(".atoms6");

function clickFunction() {
  click += clickValue;
  console.log(click);
  document.getElementById("clickNumber").innerHTML = click.toString();
}

function addElectron1() {
  if (click >= 20) {
    electron1.removeAttribute("hidden");
    click = click - 20;
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 1");
    addElectron1Button.style.display = "none";
    addElectron2Button.style.display = "block";
    clickValue += 1;
    elementLetter.innerText = "Hydrogen";
  }
}
function addElectron2() {
  if (click >= 100) {
    electron2.removeAttribute("hidden");
    click = click - 100;
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 2");
    addElectron2Button.style.display = "none";
    addElectron3Button.style.display = "block";
    clickValue += 1;
  }
}
function addElectron3() {
  if (click >= 300) {
    electron3.removeAttribute("hidden");
    click = click - 100;
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 3");
    addElectron3Button.style.display = "none";
    addElectron4Button.style.display = "block";
    clickValue += 1;
  }
}
function addElectron4() {
  if (click >= 500) {
    electron4.removeAttribute("hidden");
    click = click - 100;
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 4");
    addElectron4Button.style.display = "none";
    addElectron5Button.style.display = "block";
    clickValue += 1;
    elementLetter.innerText = "Helium";
  }
}
function addElectron5() {
  if (click >= 1000) {
    electron5.removeAttribute("hidden");
    click = click - 100;
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 5");
    addElectron5Button.style.display = "none";
    addElectron6Button.style.display = "block";
    clickValue += 1;
  }
}
function addElectron6() {
  if (click >= 2000) {
    electron6.removeAttribute("hidden");
    click = click - 100;
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 6");
    addElectron6Button.style.display = "none";
    addElectron7Button.style.display = "block";
    clickValue += 1;
  }
}
/*
function autoClick() {
  if (click >= 1000) {
    document.getElementById("trabant").removeAttribute("hidden");
    click = click - 1000;
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("autoclick");
  }
}
*/
