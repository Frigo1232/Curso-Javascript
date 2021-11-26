var agora = new Date ()
var hora = agora.getHours ()
if (hora<6 || hora>18) {
    console.log (`são ${hora} Horas, Boa noite`)
} else if (hora > 11)
 {   console.log (`são ${hora} Horas, Boa tarde`)
}   else {
    console.log (`são ${hora} Horas, Bom dia`)
}