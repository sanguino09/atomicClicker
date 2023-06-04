let click = 0;
let electron1 = document.getElementsByClassName('electron1');
let electron2 = document.getElementsByClassName('electron2');
let electron3 = document.getElementsByClassName('electron3');
let neutron1 = document.getElementsByClassName('neutron1');
let neutron2 = document.getElementsByClassName('neutron2');
let neutron3 = document.getElementsByClassName('neutron3');
let neutron4 = document.getElementsByClassName('neutron4');
let neutron5 = document.getElementsByClassName('neutron5');
let clickCount = document.getElementsByClassName("clickNumber");

function clickFunction(){
    click += 1;
    console.log('click');
}