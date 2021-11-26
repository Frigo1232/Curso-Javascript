function contar(){
    let inicio = document.getElementById ("inicio")
    let fim = document.getElementById ("fim")
    let passo = document.getElementById ("passo")
    let res = document.getElementById("res")
        if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
                alert("ERRO, FALTAM DADOS")
        } else if(passo.value==0){
            window.alert("Passo não pode ser 0 reabra a pagina pq vc quebrou ela BOA!!")
            }else{
            res.innerHTML = "Contando..."}
        let i = Number(inicio.value)
        let f = Number (fim.value)
        let p = Number (passo.value)
        
        if(i<f){
            while(i<=f-p){
                i+=p
                res.innerHTML += `${i}, `}   
                var r = f-i
                var s = p-r
                    if(r>0){res.innerHTML += `faltaram ${r} para ${f} e sobraram ${s}`}
        } else {
            while(i>=f+p){
                i-=p
                res.innerHTML += `${i}, `}
                var r = i-f
                var s = p-r
                    if(r>0){res.innerHTML += `faltaram ${r} para ${f} e sobraram ${s}`}
        }
    }  
        //for(let c = i; c <= f ; c +=p)
        //res.innerHTML += `${c}, `    
        // outra forma de fazer