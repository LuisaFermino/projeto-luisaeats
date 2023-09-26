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

valorPrato = null;
valorBebida = null;
valorSobremesa = null;

function fecharPedido() {
  if (prato !== null && bebida !== null && sobremesa !== null) {
    let nomePrato = prato.querySelector(".nome-prato");
    let valorPrato = prato.querySelector(".valor");

    let nomeBebida = bebida.querySelector(".nome-prato");
    let valorBebida = bebida.querySelector(".valor-prato");

    let nomeSobremesa = sobremesa.querySelector(".nome-prato");
    let valorSobremesa = sobremesa.querySelector(".valor-prato");

    //Procurar valor dos elementos para utilizar na conta

    // window.location.href =
    //   "https://wa.me/5514998812492?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%20%0A%0A%20%20-%20Prato%3A%20Frango%20Yin%20Yang%20%0A%0A%20%20-%20Bebida%3A%20Coquinha%20Gelada%20%0A%0A%20%20-%20Sobremesa%3A%20Pudim%20%0A%0A%20%20Total%3A%20R%24%2027.70";
  }
}
