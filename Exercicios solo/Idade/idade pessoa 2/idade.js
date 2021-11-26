function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById("res")
    var idd = document.getElementById("ano")
    var idade = ano - Number(idd.value)

    if(idd.value.length == 0 || Number(idd.value)>ano){
        window.alert("[ERRO]")
    }
    else{
        var sex = document.getElementsByName("radsex")
        var genero = ``
        if (sex[0].checked){
            genero = "um Homem"
        }
        else if(sex[1].checked){
            genero = "uma Mulher"
        }

    res.innerHTML=(`Você é ${genero} tem ${idade} anos`)
    }
}