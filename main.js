
/*-------------Remove loader-----------------------*/
let loaderbg = document.querySelector(".loaderbg");

setTimeout(function () {
  loaderbg.style.display = "none";
}, 3000);

/*-------------Tutorial Screen-----------------------*/
let tutorialScreen = document.querySelector(".tutorialScreen");

function skipTutorial() {
  tutorialScreen.style.display = "none";
}

/*-----------------Menu Bar-----------------*/
let clickerScreen = document.getElementById("clickScreen");
let gameDiv = document.querySelector(".gameDiv");
let arrowLeft = document.querySelector(".arrowLeft");
let arrowRight = document.querySelector(".arrowRight");

function goRight() {
  if (clickerScreen.innerHTML == "Molecule Shaft") {
    clickerScreen.innerHTML = "Atomic Clicker";
    arrowLeft.style.display = "block";
    gameDiv.style.display = "flex";
    console.log("mol->atom");
  }
  else if (clickerScreen.innerHTML == "Atomic Clicker") {
    clickerScreen.innerHTML = "Quark Shop";
    arrowRight.style.display = "none";
    gameDiv.style.display = "none";
    console.log("atom->shop");
  }
}
function goLeft() {
  if (clickerScreen.innerHTML == "Atomic Clicker") {
    clickerScreen.innerHTML = "Molecule Shaft";
    arrowLeft.style.display = "none";
    gameDiv.style.display = "none";
    console.log("atom->mol");
  }
  else if (clickerScreen.innerHTML == "Quark Shop") {
    clickerScreen.innerHTML = "Atomic Clicker";
    arrowRight.style.display = "block";
    gameDiv.style.display = "flex";
    console.log("shop->atom");
  }
}

/*-----------------Atomic CLicker-----------------------*/
let click = 0;
let electrons = 0;
let clickValue = 1;
let elementLetter = document.querySelector(".elementLetter");
let core = document.getElementById("core");
let electron1 = document.querySelector(".electron1");
let electron2 = document.querySelector(".electron2");
let electron3 = document.querySelector(".electron3");
let electron4 = document.querySelector(".electron4");
let electron5 = document.querySelector(".electron5");
let electron6 = document.querySelector(".electron6");
let electron7 = document.querySelector(".electron7");
let electron8 = document.querySelector(".electron8");
let addElectron1Button = document.querySelector(".atoms1");
let addElectron2Button = document.querySelector(".atoms2");
let addElectron3Button = document.querySelector(".atoms3");
let addElectron4Button = document.querySelector(".atoms4");
let addElectron5Button = document.querySelector(".atoms5");
let addElectron6Button = document.querySelector(".atoms6");
let addElectron7Button = document.querySelector(".atoms7");
let addElectron8Button = document.querySelector(".atoms8");

function clickFunction() {
  click += clickValue;
  console.log(click);
  document.getElementById("clickNumber").innerHTML = click.toString();
  document.body.style.cursor ="pointer";
}
function addElectron1() {
  if (click >= 20) {
    electron1.removeAttribute("hidden");
    click = click - 20;
    electrons += 1;
    document.getElementById("electronsNumber").innerHTML = electrons.toString();
    document.getElementById("clickNumber").innerHTML = click.toString();
    document.getElementById("atomName").innerHTML = "Hydrogen";
    console.log("add electron 1");
    addElectron1Button.style.display = "none";
    addElectron2Button.style.display = "block";
    clickValue += 1;
    elementLetter.innerText = "Hydrogen";
    core.setAttribute("style", "background-color:blue;");
  }
}
function addElectron2() {
  if (click >= 50) {
    electron2.removeAttribute("hidden");
    click = click - 50;
    electrons += 1;
    document.getElementById("electronsNumber").innerHTML = electrons.toString();
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 2");
    addElectron2Button.style.display = "none";
    addElectron3Button.style.display = "block";
    clickValue += 1;
  }
}
function addElectron3() {
  if (click >= 100) {
    electron3.removeAttribute("hidden");
    click = click - 100;
    electrons += 1;
    document.getElementById("electronsNumber").innerHTML = electrons.toString();
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 3");
    addElectron3Button.style.display = "none";
    addElectron4Button.style.display = "block";
    clickValue += 1;
  }
}
function addElectron4() {
  if (click >= 150) {
    electron4.removeAttribute("hidden");
    click = click - 150;
    electrons += 1;
    document.getElementById("electronsNumber").innerHTML = electrons.toString();
    document.getElementById("clickNumber").innerHTML = click.toString();
    document.getElementById("atomName").innerHTML = "Helium";
    console.log("add electron 4");
    addElectron4Button.style.display = "none";
    addElectron5Button.style.display = "block";
    clickValue += 1;
    elementLetter.innerText = "Helium";
    core.setAttribute("style", "background-color:orange;");
  }
}
function addElectron5() {
  if (click >= 200) {
    electron5.removeAttribute("hidden");
    click = click - 200;
    electrons += 1;
    document.getElementById("electronsNumber").innerHTML = electrons.toString();
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 5");
    addElectron5Button.style.display = "none";
    addElectron6Button.style.display = "block";
    clickValue += 1;
  }
}
function addElectron6() {
  if (click >= 300) {
    electron6.removeAttribute("hidden");
    click = click - 300;
    electrons += 1;
    document.getElementById("electronsNumber").innerHTML = electrons.toString();
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 6");
    addElectron6Button.style.display = "none";
    addElectron7Button.style.display = "block";
    clickValue += 1;
  }
}
function addElectron7() {
  if (click >= 500) {
    electron7.removeAttribute("hidden");
    click = click - 500;
    electrons += 1;
    document.getElementById("electronsNumber").innerHTML = electrons.toString();
    document.getElementById("clickNumber").innerHTML = click.toString();
    document.getElementById("atomName").innerHTML = "Lithium";
    console.log("add electron 7");
    addElectron7Button.style.display = "none";
    addElectron8Button.style.display = "block";
    clickValue += 1;
    elementLetter.innerText = "Lithium";
    core.setAttribute("style", "background-color:green;");
  }
}
function addElectron8() {
  if (click >= 1000) {
    electron7.removeAttribute("hidden");
    click = click - 1000;
    electrons += 1;
    document.getElementById("electronsNumber").innerHTML = electrons.toString();
    document.getElementById("clickNumber").innerHTML = click.toString();
    console.log("add electron 8");
    addElectron8Button.style.display = "none";
    addElectron9Button.style.display = "block";
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
