//Aula_05
function carregando(){
    alert("A página está carregando!");
}
function clicado(){
    alert("Você clicou no botão!");
}
function redirecionar(){
    //window.open("https://www.google.com/");
    window.location.href="https://www.google.com/";
}
function agradecer(){
    document.getElementById("clicando").innerHTML = "<b>Obrigado por clicar</b>"
}
function pousarMouse(elemento){
    elemento.innerHTML = "Tirar mouse";
}
function tirarMouse(elemento){
    elemento.innerHTML = "Pousar mouse";
}
function mostrarEscolha(elemento){
    console.log(elemento.value);
}

//Aula_04
/*function somar(n1, n2){
    return n1 + n2;
}
console.log(somar(1, 2));
var validar = 0;
function validarIdade(idade){
    //var validar = false;
    if(idade >= 18){
        validar = true;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
alert(validarIdade(idade));
console.log(validar);
function setReplace(frase, oldname, newname){
    return frase.replace(oldname, newname);
}
console.log(setReplace("Vai Japão!!!", "Japão", "Brasil"));*/

//Aula_03
/*var d = new Date();
alert(d + "\n" + d.getDay() + "\\" + (d.getMonth() + 1) + "\n" + 
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());

for(count = 0; count < 5; count++){
    console.log(count);
}

var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    console.log("Maior de idade!");
} else{
    console.log("menor de idade!!!".toUpperCase());
}

var count = 0;
while(count < 5){
    console.log(count);
    count++;
}*/

//Aula_02
/*var frutas = ["laranja", "maçã", "pera"];
console.log(frutas.length);
frutas.push("uva");
console.log(frutas.length);
console.log(frutas);
console.log(frutas[0]);
console.log(frutas.pop());
console.log(frutas.toString());
console.log(frutas.join(" - "));
console.log(frutas.reverse());

var frutas2 = [{nome: "maçã", cor:"vermelha"}, {nome:"pera", cor:"verde"}];
console.log(frutas2);
console.log(frutas2[1].cor);*/


//Aula_01
/*var nome = "Péricles Zapata";
var n1 = 49;
var n2 = 34;
var frase = "Canadá é o melhor país do mundo";
alert(nome + " tem " + n1 + " anos.");
console.log(n1 - n2);
console.log(frase.replace("Canadá", "Austrália"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());*/