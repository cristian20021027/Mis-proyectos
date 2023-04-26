const contador = document.getElementById("contar")
const sumar = document.getElementById("incrementar")
const restar = document.getElementById("disminuir")
const resetear = document.getElementById("resetear")
let numero=0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML=numero;
})
restar.addEventListener("click", ()=>{
    if(numero==0){}
    else{
        numero--;
    contador.innerHTML=numero;
    }
})
resetear.addEventListener("click",()=>{
    numero=0;
    contador.innerHTML=numero;
})