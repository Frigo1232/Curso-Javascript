function clicar(){
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    res.innerHTML="Contando..."
    for(i; i<f; i+=p)
        res.innerHTML+=`${i}, `
}

    
  /*  res.innerHTML= ""
        let i = Number(ini.value)
        let f = Number (fim.value)
        let p = Number (pas.value)
        
        if(i<f){
        for (i; i<=f; i+=p){
            res.innerHTML+=`${i} \u{1F449} `
        }
        }else {
            for (i; i>=f; i-=p){
            res.innerHTML+=`${i} \u{1F449} `
            } 
        }
        res.innerHTML+=`\u{1F3C1}`
    }
*/
