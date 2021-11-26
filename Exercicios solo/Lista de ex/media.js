/* var arr = [ 10, 20, 30 ];
console.log("arr.length is : " + arr.length); */

var notas = [100, 0, 99]
var m = notas.length 
var c = 0
for(var i in notas){
   c+=notas[i]
} var nota =c/m

if(nota<60){
    console.log("F")
} else if (nota<70){
    console.log("D")
} else if (nota<80){
    console.log("C")
} else if (nota<90){
    console.log("B")
} else if (nota<100){
    console.log("A")
} else {console.log ("A+")}