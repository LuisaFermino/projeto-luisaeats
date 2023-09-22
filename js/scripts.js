let prato = null;
let bebida = null;
let sobremesa = null;

//função para selecionar prato
function selecionarPrato(classePrato) {
  const selecionado = document.querySelector(".menu-prato .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  prato = classePrato;
  const botao = document.querySelector("." + classePrato);
  botao.classList.add("selecionado");
}

//função para selecionar bebida
function selecionarBebida(classeBebida) {
  const selecionado = document.querySelector(".menu-bebida .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  bebida = classeBebida;
  const botao = document.querySelector("." + classeBebida);
  botao.classList.add("selecionado");
}

//função para selecionar sobremesa

function selecionarSobremesa(classeSobremesa) {
  const selecionado = document.querySelector(".menu-sobremesa .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  sobremesa = classeSobremesa;
  const botao = document.querySelector("." + classeSobremesa);
  botao.classList.add("selecionado");
}

function finalizarPedido() {
  let finalizar = document.querySelector(".rodape-final");

  if (finalizar !== null) {
    finalizar.classList.remove("escondido");
  } else if (finalizar === prato + bebida + sobremesa) {
    finalizar.classList.add("escondido");
  }
  let mensagem = document.querySelector(".mensagem-pedido");
  mensagem.innerHTML = "Fechar pedido";
}
