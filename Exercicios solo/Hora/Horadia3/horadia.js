var msg = document.getElementById ("msg")
var img = document.getElementById ("img")
var tempo = new Date()
var h = tempo.getHours()


if (h>=18 || h<6) {
    msg.innerHTML = `Boa noite, agora são ${h} horas`
    document.body.style.background = "Purple"
    img.src = "noitefoto.png"
} else if (h>12) {
    msg.innerHTML = `Boa tarde, agora são ${h} horas`
    document.body.style.background = "Orange"
    img.src = "tardefoto.png"
} else {
    msg.innerHTML = `Bom dia, agora são ${h} horas`
}