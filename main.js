'use strict';
/*
document.getElementById('titulo').innerHTML="test";

function cal(){
    var dato1=document.getElementById("texto1").value;
    var dato2=document.getElementById("texto2").value;

    var parsedato1=parseInt(dato1);
    var parsedato2=parseInt(dato2);

    var resultado=parsedato1+parsedato2;
    
    document.getElementById("div").innerHTML=resultado;
}

var boton=document.querySelector('#click');
boton.addEventListener("click",()=>{
    alert("ola");
});

function hola(){
    var ola=document.getElementById("div1").value;
    ola.innerHTML="olan't";
}*/

function localStorageTest(){
    if(typeof(Storage)){
        console.log("si se puede");
        localStorage.setItem("ola","ola");
    }else{
        console.log("no se puede");
        localStorage.getItem("ola");
    }
}

localStorageTest();