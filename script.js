// TIMER
let tempo = 600;

function timer() {
    let m = Math.floor(tempo / 60);
    let s = tempo % 60;

    document.getElementById("timer").innerHTML =
        `Oferta termina em: ${m}:${s < 10 ? '0' : ''}${s}`;

    tempo--;
    if (tempo >= 0) setTimeout(timer, 1000);
}

// POPUP
function popup() {
    let p = document.getElementById("popup");
    p.style.display = "block";

    setTimeout(() => {
        p.style.display = "none";
    }, 3000);
}

setInterval(popup, 8000);

// CONTADOR
let people = 23;

setInterval(() => {
    let change = Math.floor(Math.random() * 4);

    if (Math.random() > 0.5) {
        people += change;
    } else {
        people -= change;
        if (people < 15) people = 15;
    }

    document.getElementById("people").innerText = people;
}, 3000);

window.onload = timer;