var botones=document.getElementsByClassName("btn btn-primary");
var botonesarray=Array.from(botones);
var edad=document.getElementById("edad");
var educacion=document.getElementById("educacion");
var conocimientos=document.getElementById("conocimientos");
var idiomas=document.getElementById("idiomas");
var contador=0;
var contador2=0;
var contador3=0;
var contador4=0;
botonesarray.forEach(boton=>{
    boton.addEventListener("click",()=>{
    if(boton.id==="Edad" && contador===0){
     edad.style.display="block";
     edad.style.maxHeight=edad.scrollHeight+ "px";
     contador=contador+1
     return;
    }
    if(boton.id==="Edad" && contador===1){
        edad.style.maxHeight=0;
        edad.style.display="none"; 
        contador=0;
        return;  
    }
    if(boton.id==="Educacion" && contador2===0){
        educacion.style.display="block";
        educacion.style.maxHeight=educacion.scrollHeight+ "px";
        contador2=contador2+1
        return;
    }
    if(boton.id==="Educacion" && contador2===1){
        educacion.style.maxHeight=0;
        educacion.style.display="none"; 
        contador2=0;
        return;
    }
    if(boton.id==="Conocimientos" && contador3===0){
        conocimientos.style.display="block";
        conocimientos.style.maxHeight=conocimientos.scrollHeight+ "px";
        contador3=contador3+1
        return;
    }
    if(boton.id==="Conocimientos" && contador3===1){
        conocimientos.style.maxHeight=0;
        conocimientos.style.display="none"; 
        contador3=0;
        return;
    }
    if(boton.id==="Idiomas" && contador4===0){
        idiomas.style.display="block";
        idiomas.style.maxHeight=idiomas.scrollHeight+ "px";
        contador4=contador4+1
        return;
    }
    if(boton.id==="Idiomas" && contador4===1){
        idiomas.style.maxHeight=0;
        idiomas.style.display="none"; 
        contador4=0;
        return;
    }

    })
})



