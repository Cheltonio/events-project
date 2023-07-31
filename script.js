let div = document.querySelector("div");

document.getElementById("aqua").onclick = function aqua() {
    div.style.background = "aqua";
    div.innerHTML = "aqua";
}

document.getElementById("teal").onclick = function teal() {
    div.style.background = "teal";
    div.innerHTML = "teal";
}

document.getElementById("pink").onclick = function pink() {
    div.style.background = "pink";
    div.innerHTML = "pink";
}

document.getElementById("purple").onclick = function purple() {
    div.style.background = "purple";
    div.innerHTML = "purple";
}

document.getElementById("colorless").onclick = function colorless() {
    div.style.background = "white";
    div.innerHTML = "colorless";
}

document.getElementById("random").onclick = function random() {
    let num = parseInt(Math.random()*5);
    if(num==0) {
        div.style.background = "aqua";
        div.innerHTML = "aqua";
    }
    else if(num==1) {
        div.style.background = "teal";
        div.innerHTML = "teal";
    }
    else if(num==2) {
        div.style.background = "pink";
        div.innerHTML = "pink";
    }
    else if(num==3) {
        div.style.background = "purple";
        div.innerHTML = "purple";
    }
    else {
        div.style.background = "white";
        div.innerHTML = "colorless";
    }
}

document.getElementById("display").onclick = function() {
    if(div.style.display != "none") div.style.display = "none";
    else div.style.display = "flex";
}