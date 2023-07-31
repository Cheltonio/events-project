let div = document.querySelector("div");

document.getElementById("aqua").onclick = aqua;
document.getElementById("teal").onclick = teal;
document.getElementById("pink").onclick = pink;
document.getElementById("purple").onclick = purple;
document.getElementById("colorless").onclick = colorless;

function aqua() {
    div.style.background = "aqua";
    div.innerHTML = "aqua";
}

function teal() {
    div.style.background = "teal";
    div.innerHTML = "teal";
}

function pink() {
    div.style.background = "pink";
    div.innerHTML = "pink";
}

function purple() {
    div.style.background = "purple";
    div.innerHTML = "purple";
}

function colorless() {
    div.style.background = "white";
    div.innerHTML = "colorless";
}

document.getElementById("random").onclick = function random() {
    let num = parseInt(Math.random()*5);
    if(num==0) aqua();
    else if(num==1) teal();
    else if(num==2) pink();
    else if(num==3) purple();
    else colorless();
}

document.getElementById("display").onclick = function() {
    if(div.style.display != "none") div.style.display = "none";
    else div.style.display = "flex";
}