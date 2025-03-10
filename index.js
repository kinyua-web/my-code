// const 

const PI = 3.149

let radius

let circ;

document.getElementById("myS").onclick = function(){
    radius = document.getElementById("myT").value
    radius = Number(radius)

    circ = 2 * PI * radius

        document.getElementById("myH3").textContent =circ + 'cm'



}