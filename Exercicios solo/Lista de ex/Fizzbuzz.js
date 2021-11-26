const resultado = fizzBuzz(1)
console.log(resultado);

function fizzBuzz(entrada){
       
    
    if(typeof entrada!=="number")
        return "Não é um número"
        else if (entrada % 15 === 0)
        return ("fizzBuzz")
        else if (entrada % 3 === 0)
        return ("Fizz")
        else if (entrada % 5 === 0)
        return ("Buzz")
        else return entrada 
}

