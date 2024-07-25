'use strict';

document.getElementById("title").innerHTML="Page 1";

document.querySelectorAll('.title').forEach(title=>{
    title.addEventListener('click',()=>{
        const allContents=document.querySelectorAll('.content');
        allContents.forEach(content=>{
            if(content!==title.nextElementSibling){
                content.style.display='none';
            }
        });
        
        const content=title.nextElementSibling;
        content.style.display=content.style.display==='none'||content.style.display===''?'block':'none';
    });
});