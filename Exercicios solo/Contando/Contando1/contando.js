var ini = document.getElementById("ini")
var fim = document.getElementById("fim")
var pas = document.getElementById("pas")
var res = document.getElementById("res")
        

function clicar(){
    if(pas.value.length == 0 || ini.value.length == 0 || fim.value.length == 0)
    window.alert("Não pode deixar valores vazios")
    else if(pas.value==0){
        window.alert("Quebrou, boaaaa!")
        window.location.replace(window.location.pathname + window.location.search + window.location.hash);
        // reload na pagina
    }else{
    
    res.innerHTML= ""
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
}
