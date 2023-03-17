const mensagemBot = document.querySelector(".mensagem");

function pedidoCliente() {
  let mensagem = " Em caso de pedidos, ligue (12) 2345-6547";
  inputTextClient.innerHTML = " ";
  mensagemBot.innerText = mensagem;
}

function pedidoErrado() {
  let mensagem = " Lanche errado? ligue (12) 2345-6547";
  inputTextClient.innerHTML = " ";
  mensagemBot.innerText = mensagem;
}

const inputTextClient = document.querySelector(".inputTextClient");

function reclamacaoCliente() {
  let mensagem = `<input type="text" class="inputTextDigitar" placeholder="Reclame aqui">`;
  inputTextClient.innerHTML = mensagem;
}

function feedBackCliente() {
  let mensagem = `<input type="text" class="inputTextDigitar" placeholder="Deixe seu feedback!">`;
  inputTextClient.innerHTML = mensagem;
}
