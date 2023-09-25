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
    window.location.href = "https://wa.me/5514998812492?text=Teste%20mensagem";
  }
}
