'use strict';

document.getElementById("titulo").innerHTML="ola";

var text=document.getElementById("parrafo");
function texto(){
    text.innerHTML="uwun't"
}

let input_element=document.querySelector("input");
input_element.addEventListener("keyup",()=>{
    input_element.setAttribute("value",input_element.value);
})