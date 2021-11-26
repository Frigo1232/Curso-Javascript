var num = document.getElementById("val")
var sel = document.getElementById("sel")
var total = document.getElementById("restotal")
var maior = document.getElementById("resmaior")
var menor = document.getElementById("resmenor")
var soma = document.getElementById("ressoma")
var  media = document.getElementById("resmedia")
var numeros = []

function clicar(){
    if (num.value.length == 0){
        window.alert("Por favor digite um número")
    }else{
        var n = Number(num.value)
        var item = document.createElement("option")
            if(numeros.indexOf(n,[0])==-1){            
                item.text = `O valor ${n} Foi adicionado`
                sel.appendChild(item)
                numeros.push(n)}
            else{
                window.alert("Valor já adicionado")
            }
            num.value=``
            num.focus()
    }
}

function fim(){
    if(numeros.length==0){
    window.alert("Adicione valores antes de finalizar")
    } else{
    numeros.sort(function(a, b){return a-b});
    var c = 0
    for(var i in numeros){
        c+=numeros[i]}
        var medianum = c/numeros.length
        var arrumado = medianum.toFixed(2);
        total.innerHTML=`Existem ${numeros.length} elementos.`
        maior.innerHTML=`O maior valor informado foi ${numeros[numeros.length-1]}` 
        menor.innerHTML=`O menor valor informado foi ${numeros[0]}` 
        soma.innerHTML=`A soma de todos os valores é ${c}`
        media.innerHTML=`A média de todos é ${arrumado}`}
}