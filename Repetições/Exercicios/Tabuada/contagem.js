function tabuada(){
    let num = document.getElementById=("txtn")
    let tab = document.getElementById=("seltab")
   
        let n = Number(num.valueOf)
        let c = 1
        while (c<=10){
            let item = document.createElement("option")
            item.text= `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        

}}