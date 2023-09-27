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

function validarPedido() {
  if (prato !== null && bebida !== null && sobremesa !== null) {
    const liberado = document.querySelector(" .container");
    liberado.classList.add("liberado");

    let mensagemFinalizar = document.querySelector(".mensagem-pedido");
    mensagemFinalizar.innerHTML = "Fechar Pedido";
  }
}

function fecharPedido() {
  if (prato !== null && bebida !== null && sobremesa !== null) {
    let nomePrato = prato.querySelector(".nome-prato").innerHTML;
    let valorPrato = prato.querySelector(".valor").innerHTML;
    valorPrato = valorPrato.replace("R$ ", "");
    valorPrato = valorPrato.replace(",", ".");
    valorPrato = Number(valorPrato);
    let valorPatualizado = valorPrato.toFixed(2);

    let nomeBebida = bebida.querySelector(".nome-prato").innerHTML;
    let valorBebida = bebida.querySelector(".valor-prato").innerHTML;
    valorBebida = valorBebida.replace("R$ ", "");
    valorBebida = valorBebida.replace(",", ".");
    valorBebida = Number(valorBebida);
    let valorBatualizado = valorBebida.toFixed(2);

    let nomeSobremesa = sobremesa.querySelector(".nome-prato").innerHTML;
    let valorSobremesa = sobremesa.querySelector(".valor-prato").innerHTML;
    valorSobremesa = valorSobremesa.replace("R$ ", "");
    valorSobremesa = valorSobremesa.replace(",", ".");
    valorSobremesa = Number(valorSobremesa);
    let valorSatualizado = valorSobremesa.toFixed(2);

    let valorTotal = valorPrato + valorBebida + valorSobremesa;
    let valorAtualizado = valorTotal.toFixed(2);

    const mensagemZap = encodeURI(`Olá, gostaria de fazer o pedido: 
    \n- Prato: ${nomePrato} -  ${valorPatualizado}
    \n- Bebida: ${nomeBebida} -  ${valorBatualizado}
    \n- Sobremesa: ${nomeSobremesa} -  ${valorSatualizado}
    \nTotal: ${valorAtualizado}`);

    // console.log(mensagemZap);

    window.location.href = `https://wa.me/5514998812492?text=${mensagemZap}`;
  }
}
