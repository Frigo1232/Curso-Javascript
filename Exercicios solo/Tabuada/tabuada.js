function clicar(){
   
    var num = document.getElementById("num")
    var res = document.getElementById("res")
    var ini = 1
    var n = Number(num.value)

    res.innerHTML=""

    for(n;ini<=10;ini++){
        
        res.innerHTML+= `${n} x ${ini} = ${ini*n} <br>`
    }
}