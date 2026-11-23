var nome = prompt("Digite seu nome:");

if (nome === null || nome.trim() === "") {
    nome = "Visitante";
}

alert("Bem-vindo à Semana de Tecnologia, " + nome + "!");

var alterarFundo = confirm("Deseja alterar a cor de fundo?");

if (alterarFundo) {
    var cor = prompt("Escolha uma das opções: blue, red ou green");

    if (cor !== null) {
        cor = cor.toLowerCase();

        if (cor === "blue" || cor === "red" || cor === "green") {
            document.body.style.backgroundColor = cor;
        } else {
            alert("Opção inválida. Use blue, red ou green.");
        }
    }
}
