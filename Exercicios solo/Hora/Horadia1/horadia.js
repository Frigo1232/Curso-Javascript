function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var hora = new Date()
    var d = hora.getHours()

    msg.innerHTML = `Agora são ${d} horas`
    
    if(d>12 && d<18){
        document.body.style.background = "#FFFF00"

        img.src = "tardefoto.png"
    } else if (d>18 || d<6){
        img.src = "noitefoto.png"
        document.body.style.background = "#4B0082"
    } else {
        img.src = "manhafoto.png"
        document.body.style.background = "#f5deb3"
    }
}
