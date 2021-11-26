
function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora <12){
        img.src = `manhafoto.png`
        document.body.style.background = "#FFDEAD"

    } else if (hora >=12 && hora <18)
        { img.src = `tardefoto.png`
        document.body.style.background = "#D2691E"

        } else { img.src = `noitefoto.png`
        document.body.style.background = "#191970"

        }
}