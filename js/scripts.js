let prato = null;
let bebida = null;
let sobremesa = null;

//função para selecionar prato
function selecionarPrato(classePrato) {
  const selecionado = document.querySelector(".menu-prato .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }
  const pratoSelecionado = document.querySelector("." + classePrato);
  pratoSelecionado.classList.add("selecionado");
  prato = pratoSelecionado;
  validarPedido();
}

//função para selecionar bebida
function selecionarBebida(classeBebida) {
  const selecionado = document.querySelector(".menu-bebida .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  const bebidaSelecionada = document.querySelector("." + classeBebida);
  bebidaSelecionada.classList.add("selecionado");

  bebida = bebidaSelecionada;
  validarPedido();
}

//função para selecionar sobremesa

function selecionarSobremesa(classeSobremesa) {
  const selecionado = document.querySelector(".menu-sobremesa .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  const sobremesaSelecionada = document.querySelector("." + classeSobremesa);
  sobremesaSelecionada.classList.add("selecionado");
  sobremesa = sobremesaSelecionada;

  validarPedido();
}

//Funçao para validar o pedido
function validarPedido() {
  if (prato !== null && bebida !== null && sobremesa !== null) {
    const liberado = document.querySelector(" .container-rodape");
    liberado.classList.add("liberado");

    let mensagemFinalizar = document.querySelector(".mensagem-pedido");
    mensagemFinalizar.innerHTML = "Fechar Pedido";
  }
}

// Função que mostra a aba de confirmação
function fecharPedido() {
  const fecharPedido = document.querySelector(".tela-confirmar");
  fecharPedido.classList.add("abrir");

  const nomePrato = prato.querySelector(".nome-prato").innerHTML;
  let valorPrato = prato.querySelector(".valor").innerHTML;
  let mensagemPrato = document.querySelector(".descricao-prato");
  valorPrato = valorPrato.replace("R$ ", "");
  valorPrato = valorPrato.replace(",", ".");
  valorPrato = Number(valorPrato);
  let valorPatualizado = valorPrato.toFixed(2);
  mensagemPrato.innerHTML = `${nomePrato} &nbsp;&nbsp;&nbsp;&nbsp; R$ ${valorPatualizado}`;

  const nomeBebida = bebida.querySelector(".nome-prato").innerHTML;
  let valorBebida = bebida.querySelector(".valor-prato").innerHTML;
  let mensagemBebida = document.querySelector(".descricao-bebida");
  valorBebida = valorBebida.replace("R$ ", "");
  valorBebida = valorBebida.replace(",", ".");
  valorBebida = Number(valorBebida);
  let valorBatualizado = valorBebida.toFixed(2);
  mensagemBebida.innerHTML = `${nomeBebida} &nbsp;&nbsp;&nbsp;&nbsp; R$ ${valorBatualizado}`;

  const nomeSobremesa = sobremesa.querySelector(".nome-prato").innerHTML;
  let valorSobremesa = sobremesa.querySelector(".valor-prato").innerHTML;
  let mensagemSobremesa = document.querySelector(".descricao-sobremesa");
  valorSobremesa = valorSobremesa.replace("R$ ", "");
  valorSobremesa = valorSobremesa.replace(",", ".");
  valorSobremesa = Number(valorSobremesa);
  let valorSatualizado = valorSobremesa.toFixed(2);
  mensagemSobremesa.innerHTML = `${nomeSobremesa} &nbsp;&nbsp;&nbsp;&nbsp; R$ ${valorSatualizado}`;

  let valorTotal = valorPrato + valorBebida + valorSobremesa;
  let valorAtualizado = valorTotal.toFixed(2);
  let mensagemTotal = document.querySelector(".descricao-total");
  mensagemTotal.innerHTML = `TOTAL:&nbsp; R$ ${valorAtualizado}`;

  fecharPedido.addEventListener("click", (e) => {
    if (e.target.id == "cancelar") {
      fecharPedido.classList.remove("abrir");
    }
  });
}

//função que envia a confirmação para o whats
function confirmarPedido() {
  if (prato !== null && bebida !== null && sobremesa !== null) {
    const nomePrato = prato.querySelector(".nome-prato").innerHTML;
    let valorPrato = prato.querySelector(".valor").innerHTML;
    valorPrato = valorPrato.replace("R$ ", "");
    valorPrato = valorPrato.replace(",", ".");
    valorPrato = Number(valorPrato);
    let valorPatualizado = valorPrato.toFixed(2);

    const nomeBebida = bebida.querySelector(".nome-prato").innerHTML;
    let valorBebida = bebida.querySelector(".valor-prato").innerHTML;
    valorBebida = valorBebida.replace("R$ ", "");
    valorBebida = valorBebida.replace(",", ".");
    valorBebida = Number(valorBebida);
    let valorBatualizado = valorBebida.toFixed(2);

    const nomeSobremesa = sobremesa.querySelector(".nome-prato").innerHTML;
    let valorSobremesa = sobremesa.querySelector(".valor-prato").innerHTML;
    valorSobremesa = valorSobremesa.replace("R$ ", "");
    valorSobremesa = valorSobremesa.replace(",", ".");
    valorSobremesa = Number(valorSobremesa);
    let valorSatualizado = valorSobremesa.toFixed(2);

    let valorTotal = valorPrato + valorBebida + valorSobremesa;
    let valorAtualizado = valorTotal.toFixed(2);

    const nomeCliente = prompt("Informe seu Nome: ");
    const enderecoCliente = prompt("Informe seu Endereço: ");

    const mensagemZap = encodeURI(`Olá, gostaria de fazer o pedido:\n
  - Prato: ${nomePrato}        R$ ${valorPatualizado}
  - Bebida: ${nomeBebida}      R$ ${valorBatualizado}
  - Sobremesa: ${nomeSobremesa}          R$ ${valorSatualizado}
    \n*Total: R$ ${valorAtualizado}*\n
    Nome: ${nomeCliente}
    Endereço: ${enderecoCliente}
    \n*Seu pedido chegará em 30min*`);

    window.location.href = `https://wa.me/5514998812492?text=${mensagemZap}`;
  }
}
