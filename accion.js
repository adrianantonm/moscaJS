let mosca= document.getElementById("mosca");
let rojo=document.getElementById("rojo");
let verde=document.getElementById("verde");
let azul=document.getElementById("azul");
let x=document.getElementById("x");
let y=document.getElementById("y");
let rotacion=document.getElementById("rotacion");
let nueva=document.getElementById("nueva");



nueva.addEventListener("click",function (){
    let nueva=document.createElement("img");
    body.append(nueva);

});
window.addEventListener("keydown",function (){


if(tecla=="ArrowUp") {
    mosca.style.top = y.value(+1);
}
else if(tecla=="ArrowDown") {
    mosca.style.bottom = y.value(+1);
}
else if(tecla=="ArrowLeft") {
    mosca.style.left = y.value(+1);
}
else if(tecla=="ArrowRight"){
    mosca.style.right = y.value(+1);
}
});