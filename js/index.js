document.getElementById('btnInserir').onclick = Inserir;

const lista = [];
let aprovado = [];
let reprovado = [];

function Inserir() {
    const inserir: {
        Nome: document.getElementById('nome').value,
        Nota: document.getElementById('nota').value,
    }

    if (condition) {

    } else {

    }
}

Em seguida utilize o FILTER para separar em listas quem está aprovado e quem não está aprovado:

    para estar aprovado a nota deverá ser 7 ou maior.para estar reprovado a nota deverá ser menor que 7.

em seguida faça um MAP sobre a lista de quem está aprovado e retorne se o mesmo foi aprovado das seguintes formas:

    se a nota
for 7: "Fulano você foi aprovado em cima da média"
se a nota
for maior que 7 e menos que 10: "Fulano você foi aprovado com uma ótima nota"
se a nota
for 10: "Parabéns fulano, você passou gabaritando"
document.getElementById('resultado').innerHTML =