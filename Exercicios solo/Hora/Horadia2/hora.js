function carregar() {
    var msg = window.document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>6 && hora<12){
        document.body.style.background = "#00BFFF"
        img.src = "manhafoto.png"      
        
    } else if(hora>=12 && hora<19) {
        document.body.style.background = "#DAA520"
        img.src= "tardefoto.png"
    } else {
        document.body.style.background = "#FF00FF"
        img.src= "noitefoto.png"
    }
}