 
 function clicar(){
    var iss = new Date()

    var idd = document.getElementById("ano")
    var res = document.getElementById("res")
    var foto = document.getElementById("foto")
    var ano = iss.getFullYear()
    var idade = ano - Number(idd.value)

    if (idd.value.length ==0 || idd.value>ano || idade>120){
        window.alert("[ERRO] VERIFIQUE OS DADOS")
    } else {
       var fsex = document.getElementsByName ("radsex")
       var genero = ''
       var img = document.createElement ("img")
       img.setAttribute ("id", "foto")
       if (fsex[0].checked){
            genero = "um Homem"
            if (idade<12){
                img.setAttribute("src", "criançam.png")
                //Criança
            } else if (idade<24){
                img.setAttribute("src", "jovemm.png")
                //jovem
            } else if (idade<60){
                img.setAttribute("src", "adultom.png")
                //adulto
            } else {
                img.setAttribute("src", "idosom.png")
                //idoso
            } 

           
       } else if (fsex[1].checked) {
            genero = "uma Mulher"
            if (idade<12){
                //Criança 
                img.setAttribute("src", "criançaf.png")
            } else if (idade<24){
                //jovem
                img.setAttribute("src", "jovemf.png")
            } else if (idade<60){
                //adulto
                img.setAttribute("src", "adultof.png")
            } else {
                //idoso
                img.setAttribute("src", "idosof.png")
            } 
       }
       
       res.innerHTML = (`Você é ${genero} e tem ${idade} anos.` )
       res.appendChild(img)
    }


    
    
}

