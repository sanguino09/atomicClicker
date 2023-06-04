let click = 0;
let electron1 = document.querySelector(".electron1");
let electron2 = document.querySelector(".electron2");
let electron3 = document.querySelector(".electron4");
let electron4 = document.querySelector(".electron4");
let electron5 = document.querySelector(".electron5");
let addElectron1Button = document.querySelector(".atoms1");
let addElectron2Button = document.querySelector(".atoms2");

function clickFunction() {
  click += 1;
  console.log(click);
  document.getElementById("clickNumber").innerHTML = click.toString();
}

function addElectron1() {
  if (click >= 20) {
    electron1.removeAttribute("hidden");
    click = click - 20;
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 1");
    addElectron1Button.style.display = 'none';
    addElectron2Button.style.display = 'block';
  }
}
function addElectron2() {
    if (click >= 100) {
      electron2.removeAttribute("hidden");
      click = click - 100;
      document.getElementById("clickNumber").innerHTML = click.toString();
      console.log("add electron 2");
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
