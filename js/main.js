function botão(){
   document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://linkedin.com/");
    //window.location.href="https://linkedin.com/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML ="Passe o mouse aqui";
    
}


/*function soma(n1, n2){
    return n1+n2;
}
*?
/*function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

//alert(soma(5, 10));
*?




/*function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/



/*var d = new Date();
alert(d.getMinutes());
alert(d.getday());
alert(d.getHours());
*/



/*var count;
for (count = 0; count <= 5; count++){
    alert(count);
};
*?


/*var count = 0;
while(count < 5 ){
    console.log(count);
    alert(count);
    count ++;
};
*/


/*var idade = prompt ("Qual sua idade");
if (idade > 18) {
    alert("Maior de idade");
}else {
    alert("Menor de idade");
}
*/


/*var fruta = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxo"}]
console.log(fruta);
alert(fruta[1].nome);
*/



//Cria cor com as letras
/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//Array e String cria lista das frutas
/*var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista.reverse());
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));
*/

//Cria poupap com nome + idade ou faz contas ou cria frases 
/*var nome =  "Andre Ramos";
var idade = 29;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = " Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos " );
alert(idade + idade2 );

console.log(nome);
console.log(n1*n2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toLowerCase());
alert(frase.replace("Japão","Brasil"));
*/