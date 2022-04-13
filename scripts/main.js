'use strict';

function cal(){
    var dato1=document.getElementById("texto1").value;
    var dato2=document.getElementById("texto2").value;

    var parsedato1=parseInt(dato1);
    var parsedato2=parseInt(dato2);

    var resultado=parsedato1+parsedato2;
    
    document.getElementById("perrafo").innerHTML=resultado;
}

var ola=document.getElementById("div1");
var boton=document.querySelector('#click');

boton.addEventListener("click",()=>{
    var ver=new hola();
    ver.oladiv();
});

function hola(){
    this.oladiv=()=>{
        ola.innerHTML="olan't";
    }
}