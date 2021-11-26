exibir(10)
function exibir(limite){
    var n = 0
    var t = ""  
       
    for(n; n<=limite; n++){
        if(n % 2 === 0){
        t="Par"}
        else{
            t="Impar"
        }
        console.log(`${n}, ${t}`)
    }
}
    
    
 