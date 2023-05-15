// Quando o diálogo terminar:
//dialogBox.style.display = "none";

// Quando você precisar mostrar o diálogo:
//dialogText.innerHTML = "Este é o texto do diálogo.";
//dialogBox.style.display = "block";

//botoes
//const (var nome) = document.getElementById("botao1");
//(var nome).style.display = "none"; // oculta o botão
//(var nome).style.display = "block"; // exibe o botão



const dialogBox = document.getElementById("dialog-box");
const dialogText = document.getElementById("dialog-text");
dialogText.innerHTML = "Você está... sozinho?"
dialogBox.style.display = "Block";

const container = document.getElementById("botoes-container");
const botaoSim = document.createElement("button");
botaoSim.innerHTML = "Sim";
container.appendChild(botaoSim);
