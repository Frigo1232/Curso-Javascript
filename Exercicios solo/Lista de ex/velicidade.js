veloc(99)

function veloc(v){
    var limite = 80
    var multa =  v - limite 
    var pontos = Math.floor(multa/5)
    if (multa>0){
        
        if(pontos<12){
    console.log(`Você ganhou ${pontos} pontos`)}
        else {console.log( "Carteira suspensa")}
    
} else {console.log("tudo ok")}
 
    
    
}