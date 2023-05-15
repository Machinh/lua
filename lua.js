// Quando o diálogo terminar:
//dialogBox.style.display = "none";

// Quando você precisar mostrar o diálogo:
//dialogText.innerHTML = "Este é o texto do diálogo.";
//dialogBox.style.display = "block"; //bloqueia o texto na tela

//botoes
//const (var nome) = document.getElementById("botao1");
//(var nome).style.display = "none"; // oculta o botão
//(var nome).style.display = "block"; // exibe o botão



const dialogBox = document.getElementById("dialog-box");
const dialogText = document.getElementById("dialog-text");
dialogText.innerHTML = "Você está... sozinho?"
dialogBox.style.display = "Block";

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", continuarHistoria);
btn1.addEventListener("click", continuarHistoria);

function continuarHistoria() {
    if (this.id === "btn1") {
      dialogText.innerHTML = "a lua pálida sorri para você";
      dialogBox.style.display = "block";
    } else if (this.id === "btn2") {
      dialogText.innerHTML = "Nunca estamos sozinhos...";
      dialogBox.style.display = "block";
    }
  }
