$(document).ready(function() {
  // Defina as opções de texto
  var options = [
    {
      text: "Sim!",
      nextText: "Você morreu, nunca estamos sozinhos."
    },
    {
      text: "Não...",
      nextText: "Você passou do nível 1..."
    }
  ];
  
  // Defina a função para atualizar o texto do jogo
  function updateGameText(text) {
    $('#game-text').text(text);
  }

  // Defina a função para adicionar as opções do jogo
  function addGameOptions(options) {
    $('#options-container').empty();
    options.forEach(function(option) {
      var $option = $('<button class="game-option"></button>');
      $option.text(option.text);
      $option.click(function() {
        if (option.text === "Sim!") {
          // Desativar os botões e exibir mensagem de fim de jogo
          $('.game-option').off('click');
          updateGameText("Você morreu. Fim de jogo!");
        } else {
          // Atualizar o texto do jogo e adicionar as opções para a próxima cena
          setTimeout(function() {
            updateGameText(option.nextText);
            addGameOptions([]);
          }, 1000);
        }
      });
      $('#options-container').append($option);
    });
  }
  
  // Inicialize o jogo com o texto e opções padrão
  updateGameText('');
  addGameOptions(options);
  
  // Adicione o efeito de texto digitado
  const texto = "Você está sozinho?";
  let i = 0;
  const tempoDigitacao = 80; // em milissegundos
  
  function escreverTexto() {
    if (i < texto.length) {
      $('#game-text').text($('#game-text').text() + texto.charAt(i));
      i++;
      setTimeout(escreverTexto, tempoDigitacao);
    }
  }
  
  escreverTexto();
  
});
